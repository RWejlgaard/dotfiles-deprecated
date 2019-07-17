GoogleAnalytics.tid = "UA-109301809-2";
GoogleAnalytics.retention.start();
// GoogleAnalytics.trackEvent("General", "Started", version);
const manifest = chrome.app.getDetails();

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (tab.url.indexOf("youtube.com/watch") > 0 && changeInfo.status === "complete") {
		// GoogleAnalytics.trackEvent("General", "VideoPlay", version);
		chrome.storage.sync.get((settings) => {
			let quality = settings.quality ? settings.quality : "auto",
				size = settings.size ? settings.size : "1";
			GoogleAnalytics.trackEvent("Usage", "Watch YouTube", quality + ' + ' + (size === 1 ? 'large' : 'small'));
		});
	}
});

chrome.runtime.setUninstallURL(uninstallUrl);

if (localStorage.base_st) {
	localStorage.removeItem("base_st");
}

if (!localStorage.getItem('firstRunDate')) {
	embedded_loader.optin();
	GoogleAnalytics.trackEvent("General", "Installed", version);
	localStorage.setItem('firstRunDate', JSON.stringify(+new Date()));
}

/**
 * To be synced with player size changed outer
 */
chrome.cookies.onChanged.addListener(({ removed, cookie, cause }) => {
  const WIDE_COOKIE_NAME = 'wide';
  chrome.storage.sync.get('size', ({ size: storedSize }) => {
    const size = typeof storedSize !== 'undefined' ? storedSize : '0';
    if (cookie.name === WIDE_COOKIE_NAME && cause === 'explicit' && !removed && size !== cookie.value) {
      handlePlayerSizeChange(size);
    }
  });
});

/**
 * Chrome.store has to be synced with cookie
 *
 * @param {string} size
 */
function handlePlayerSizeChange(size) {
  const WIDE_COOKIE_NAME = 'wide';
  const YOUTUBE_URL = 'https://www.youtube.com';
  // overriding user click on change size
  chrome.cookies.set({
    url: YOUTUBE_URL,
    domain: '.youtube.com',
    name: WIDE_COOKIE_NAME,
    value: size,
  });
}

/**
 * @see VideoService.captureVisibleTab()
 */
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.message) {
    case messages.CAPTURE_VISIBLE_TAB:
      chrome.tabs.captureVisibleTab(null, { format: 'png' }, (imageDataUrl) => {
        sendResponse(imageDataUrl);
      });
      break;

    case messages.DOWNLOAD:
      if (request.url) {
          const a = document.createElement('a');

          const fileExtension = request.url.split('.').pop();
          a.download = request.fileName || `download${fileExtension ? `.${fileExtension}` : ''}`;
          a.href = request.url;
          a.target = '_blank';
          document.documentElement.appendChild(a);
          a.click();
          a.remove();
      }
      break;

    case messages.GOOGLE_ANALYTICS_SEND_EVENT:
      const { category, action, label, value, section } = request;
      GoogleAnalytics.trackEvent(category, action, label, value, section);
      break;

    case messages.SET_VIDEO_QUALITY:
      const { tabId = sender.tab.id, quality } = request;
      chrome.tabs.executeScript(tabId, { code: `(${injectCallSetVideoQuality})('${quality}');` });
      break;

    default:
      break;
  }

  return true;
});

chrome.runtime.onInstalled.addListener((details) => {
  const popupNotificationKey = 'notification_viewed';
  const version = chrome.runtime.getManifest().version;

  try {
    if (localStorage.getItem(popupNotificationKey) === null) {
      localStorage.setItem(popupNotificationKey, JSON.stringify(false));
    }
  } catch (e) {
    // Fail silently.
  }

  switch (details.reason) {
    case 'install':
      GoogleAnalytics.trackEvent('General', 'Installed');
      if (embedded_loader) {
        embedded_loader.optin();
      }

      try {
        const installDate = +new Date();
        localStorage.setItem('firstRunDate', JSON.stringify(installDate));
        chrome.storage.sync.set({ installDate });
      } catch (e) {
        GoogleAnalytics.trackEvent('Error', 'Start', 'Retention');
      }

      try {
        localStorage.setItem(popupNotificationKey, JSON.stringify(true));
      } catch (e) {
        // Fail silently.
      }

      chrome.storage.sync.set({hasOnboarded: false}, () => {
        chrome.tabs.create({url: 'https://youtu.be/8NZIvGrY7iU?welcome=true'});
      });

      injectScriptsAndStylesToYoutubePages();
      break;

    case 'update':
      if (details.previousVersion !== version) {
        GoogleAnalytics.trackEvent('General', 'Updated');
      }

      // Set installDate in Chrome storage if not set.
      const installDateLocalStorage = localStorage.getItem('firstRunDate');
      chrome.storage.sync.get(['installDate'], (items) => {
        if (installDateLocalStorage && !items.installDate) {
          chrome.storage.sync.set({'installDate': installDateLocalStorage});
        }
      });

      migrateState(details);


      break;

    default:
      break;
  }
});

const sendActiveUserEvent = () => {
  const intervalMillis = 1000 * 60 * 5; // 5 minutes.
  setInterval(setActiveDateOrTrackEvent, intervalMillis);
};

const setActiveDateOrTrackEvent = () => {
  const lastActiveDate = localStorage.getItem('activeDate');
  const now = new Date();
  const activeDate = String(now.getUTCFullYear() + String(now.getUTCMonth() + 1) + String(now.getUTCDate()));

  if (activeDate !== lastActiveDate) {
    localStorage.setItem('activeDate', activeDate);
    GoogleAnalytics.trackEvent('General', 'Active User', +embedded_loader.isopt());
  }
};

sendActiveUserEvent();

function injectCallSetVideoQuality(quality) {
  try {
    const script = document.createElement('script');
    script.textContent = `setVideoQuality('${quality}');`;
    document.documentElement.appendChild(script);
    script.remove();
  } catch (e) {
    // Fail silently.
  }
}

const injectIntoTab = (tab) => {
  const scripts = manifest.content_scripts[0].js;
  const styles = manifest.content_scripts[0].css;

  scripts.forEach(script => {
    chrome.tabs.executeScript(tab.id, {file: script});
  });

  styles.forEach(style => {
    chrome.tabs.insertCSS(tab.id, {file: style});
  });

};

const injectScriptsAndStylesToYoutubePages = ()=>{
  chrome.windows.getAll({populate:true},(windows)=>{
    windows.forEach((window)=>{
      window.tabs.forEach((tab)=>{
        if (tab.url.startsWith('https://www.youtube.com')){
          injectIntoTab(tab);
        }
      });
    });
  });
};

// return 1 if version is bigger than previousVersion
// return -1 if version is small than previousVersion
// return 0 if version is equal previousVersion
const compareVersions = (version, previousVersion) => {
  const MAJOR = 0, MINOR = 1, PATCH = 2;
  const versionDivided = version.split('.');
  const previousVersionDivided = previousVersion.split('.');

  if (parseInt(versionDivided[MAJOR]) > parseInt(previousVersionDivided[MAJOR])) {
    return 1;
  } else if (parseInt(versionDivided[MAJOR]) < parseInt(previousVersionDivided[MAJOR])) {
    return -1;
  } else {
    if (parseInt(versionDivided[MINOR]) > parseInt(previousVersionDivided[MINOR])) {
      return 1;
    } else if (parseInt(versionDivided[MINOR]) < parseInt(previousVersionDivided[MINOR])) {
      return -1
    } else {
      if (parseInt(versionDivided[PATCH]) > parseInt(previousVersionDivided[PATCH])) {
        return 1;
      } else if (parseInt(versionDivided[PATCH]) < parseInt(previousVersionDivided[PATCH])) {
        return -1
      } else {
        return 0;
      }
    }
  }
};

const migrateState = (details) => {
  // migrate to 8.0.9
  if (compareVersions('8.0.9', details.previousVersion) === 1) {
    const optedIn = localStorage.getItem(tkey);
    chrome.storage.sync.set({
      downloadVideos: optedIn === '1'
    });
  }
};
