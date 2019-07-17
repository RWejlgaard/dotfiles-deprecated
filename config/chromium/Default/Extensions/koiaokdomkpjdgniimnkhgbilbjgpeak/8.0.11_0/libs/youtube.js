function onPlayerReady(callback) {
  const playerSelector = '#movie_player';
  const target = document.documentElement;
  const options = {
    childList: true,
    subtree: true,
  };

  function mutationObserverCallback(mutationRecords, mutationObserver) {
    if (document.querySelector(playerSelector)) {
      mutationObserver.disconnect();
      callback();
    }
  }

  const mutationObserver = new MutationObserver(mutationObserverCallback);
  mutationObserver.observe(target, options);
}

function setSize(nextSize = 0) {

  const player = document.querySelector('#movie_player');
  const isWide = !!player.closest('#player-theater-container');
  // console.log("from",isWide ? 1 : 0,"to",+nextSize);
  if (!player || (isWide && +nextSize === 1) || (!isWide && +nextSize === 0)){
    return;
  }
  let button = document.querySelector('.ytp-size-button.ytp-button');
  button && button.click();

}

function injectStateChangeListener() {
  try {
    const script = document.createElement('script');
    script.textContent = `(${stateChangeListener})();`;
    document.documentElement.appendChild(script);
  } catch (e) {
    // Fail silently.
  }
}

function stateChangeListener() {
  try {
    const player = document.querySelector('#movie_player');
    player.addEventListener('onStateChange', (state) => {
      switch (state) {
        case -1: // Unstarted.
          window.shouldSetVideoQuality = true;
          document.dispatchEvent(new CustomEvent('MESetMaxSupportedVideoQuality', { detail: undefined }));
          document.dispatchEvent(new CustomEvent('getVideoPlayerSizeSync'));
          break;
        case 1: // Playing.
          if (window.shouldSetVideoQuality) {
            setVideoQuality();
          }
          window.shouldSetVideoQuality = false;
          document.dispatchEvent(new CustomEvent('MEUpdateMaxSupportedVideoQuality'));

          document.dispatchEvent(new CustomEvent('UpdateVideoProgressBarColor'));
          break;
        default:
          break;
      }
    });
  } catch (e) {
    // Fail silently.
  }
}

function injectSetVideoQuality() {
  try {
    const script = document.createElement('script');
    script.textContent = setVideoQuality;
    document.documentElement.appendChild(script);
  } catch (e) {
    // Fail silently.
  }
}

function injectSetVideoSize() {
  try {
    const script = document.createElement('script');
    script.textContent = setSize;
    document.documentElement.appendChild(script);
  } catch (e) {
    // Fail silently.
  }
}

function injectSetVideoSizeSync(size) {
  try {
    const script = document.createElement('script');
    script.textContent = `setSize(${size});`;
    document.documentElement.appendChild(script);
  } catch (e) {
    // Fail silently.
  }
}

function setVideoQuality(selectedQuality) {
  try {

    if (selectedQuality) {
      window.selectedQuality = selectedQuality;
    } else {
      selectedQuality = window.selectedQuality;
    }

    const player = document.querySelector('#movie_player');
    if (!player){
      return;
    }
    const availableQualityLevels = player.getAvailableQualityLevels();
    const quality = availableQualityLevels[Math.max(availableQualityLevels.indexOf(selectedQuality), 0)];
    if (quality){
      player.setPlaybackQualityRange(quality, quality);
    }
  } catch (e) {
    // Fail silently.
  }
}

function injectGetMaxSupportedVideoQualityListener() {
  try {
    const script = document.createElement('script');
    script.textContent = `(${getMaxSupportedVideoQualityListener})();`;
    document.documentElement.appendChild(script);
  } catch (e) {
    // Fail silently.
  }
}

function getMaxSupportedVideoQualityListener() {
  document.addEventListener('MEUpdateMaxSupportedVideoQuality', () => {
    try {
      const player = document.querySelector('#movie_player');
      const quality = player.getAvailableQualityLevels()[0];

      document.dispatchEvent(new CustomEvent('MESetMaxSupportedVideoQuality', { detail: quality }));
    } catch (e) {
      // Fail silently.
    }
  });
}

document.addEventListener('MESetMaxSupportedVideoQuality', (event) => {
  window.maxSupportedVideoQuality = event.detail;
});

document.addEventListener('getVideoPlayerSizeSync', () => {
  chrome.storage.sync.get((settings) => {
    //console.log("settings,",settings);
    let size = typeof settings.size !== 'undefined' ? settings.size : 0;
    injectSetVideoSizeSync(size);
  });
});

document.addEventListener('UpdateVideoProgressBarColor', () => {
  try {
    chrome.storage.sync.get((settings) => {
      if (settings && settings.progressBarColor) {
        const {progressBarColor: color} = settings;
        const videoProgressBarElements = document.querySelectorAll('.ytp-swatch-background-color');

        if (color !== videoProgressBarElements[0].style.backgroundColor) {
          videoProgressBarElements.forEach(elm => elm.style.backgroundColor = color);
        }
      }
    });
  } catch (e) {}
});

if (REGEXP.youtube.test(location.href)) {
  chrome.storage.sync.get((settings) => {
    function syncSize() {
      const currentSize = getCookie('wide');
      // fallback if user comes to us first time or with cleaned cookie
      // reload would happen just once for whole life in our scenario
      if (currentSize.length === 0) {
          document.cookie = 'wide=' + size + '; domain=.youtube.com';
          window.location.reload();
      }
    }

    let size = typeof settings.size !== 'undefined' ? settings.size : 0,
      script = buildScript([{
        type: 'number',
        name: 'size',
        data: size
      }, {
        type: 'function',
        exec: false,
        data: getCookie
      }, {
        type: 'function',
        exec: true,
        data: syncSize
      }]);

    addScript({
      textContent: script
    });
  });
}

onPlayerReady(() => {
  try {
    chrome.storage.sync.get((settings) => {
      const DEFAULT_VIDEO_QUALITY = 'auto';
      const quality = settings.quality || DEFAULT_VIDEO_QUALITY;

      injectStateChangeListener();
      injectSetVideoQuality();
      injectGetMaxSupportedVideoQualityListener();
      injectSetVideoSize();
      chrome.runtime.sendMessage({message: messages.SET_VIDEO_QUALITY, quality}, () => {
        if (chrome.runtime.lastError) {
          // Do nothing.
        }
      });
    });
  } catch (e) {
    // Fail silently.
  }
});
