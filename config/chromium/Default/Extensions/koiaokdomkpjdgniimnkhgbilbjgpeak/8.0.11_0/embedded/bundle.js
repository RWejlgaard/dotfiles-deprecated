!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=124)}({124:function(e,t,o){"use strict";var r,n=o(6),s=(r=n)&&r.__esModule?r:{default:r},i=o(2);!function(){window.bareNecessitys=window.bareNecessitys||{},bareNecessitys.godDushara={init:function(e){const t=e.instance,o=["noreferrer","noopener"];function r(){document.body.addEventListener.apply(document.body,arguments)}function n(e,t=!1){chrome.runtime.sendMessage({message_type:"rel",rel:e,background:t})}function s(e){return e===document.body?null:"A"===e.tagName?e:e.parentNode?s(e.parentNode):void 0}function i(e){const t=s(e.target);if(t){const e=t.getAttribute("rel");e&&o.includes(e)&&n(e,!0)}}function c(e){const t=s(e.target);if(t){const r=t.getAttribute("rel");r&&o.includes(r)&&n(r,!!e.ctrlKey||"_blank"===t.getAttribute("target"))}}return t.cableChristus().then(()=>{["contextmenu","auxclick"].forEach(e=>{r(e,i)}),["click"].forEach(e=>{r(e,c,!0)})})},deps:["Moscow"]}}();const c=()=>{const e=[...document.querySelectorAll("iframe")].map(e=>e.src),t=/http[s]?:\/\/www\.youtube(?:-nocookie)?\.com\/embed\/([a-zA-Z0-9_-]+)(\?.*)?/,o=[];return e.forEach(e=>{const r=e.match(t);null!==r&&r.length>1&&r[1].length>0&&o.push(r[1])}),Array.from(new Set(o))},a=(e,t)=>{0===Math.floor(10*Math.random())&&s.default.sendEvent({category:i.googleAnalytics.categories.videoPopularity,action:"Popularity shown",label:window.location.hostname});const o=t.getBoundingClientRect(),r=document.createElement("div");r.id="embeddedVideoStats",r.style.left=`${o.x}px`,r.style.top=`${o.y-31}px`,r.setAttribute("srcyoutube",t.src),Object.keys(e).forEach(t=>{const o=document.createElement("div");o.id="statElement";const n=document.createElement("div");n.id="statElementText",n.innerText=((e,t)=>"viewCount"===t?parseInt(e).toLocaleString():0===e?0:e<=999?e:e>=1e3&&e<=999999?`${Math.round(e/100)/10}K`:e>=1e6&&e<=999999999?`${Math.round(e/1e5)/10}M`:e)(e[t],t);const s=document.createElement("img");s.id="statElementImage",s.src=chrome.extension.getURL(`/content/images/${t}.svg`),o.appendChild(s),o.appendChild(n),r.appendChild(o)}),t.parentNode.insertBefore(r,t)};!function(){window.bareNecessitys=window.bareNecessitys||{},bareNecessitys.Moscow={init:function(){const e=bareNecessitys.Moscow;e.class=class{cableChristus(e){return e=e||document,new Promise(t=>{e.addEventListener("DOMContentLoaded",t),window.addEventListener("load",t),"complete"===e.readyState&&t()})}deCaseDithers(e){return this.stomachCups(e).hostname}stomachCups(e){let t=document.createElement("a");return t.href=e,t}attendPostures(){return top===self&&!!window.location}combineDirck(e){return location.hostname.includes(e)}cryDivan(e,t){do{if(e===document||e===document.body)return null;if(t.call(this,e))return e}while(e=e.parentElement);return null}blackCornish(){document&&document.addEventListener.apply(document,arguments)}formHomme(e){return Array.prototype.slice.call(e)}meetClouds(e){chrome&&chrome.runtime&&chrome.runtime.sendMessage(e)}},e.instance=new e.class}}}();chrome.runtime.onMessage.addListener((e,t,o)=>{switch(e.type){case"embeddedVideosStats":(()=>{const e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("type","text/css"),e.setAttribute("href","https://fonts.googleapis.com/css?family=Roboto:300,400,500,700"),document.head.appendChild(e)})(),(e=>{if(Object.keys(e).length>0){const t=Object.keys(e);document.addEventListener("mouseover",o=>{const r=o.target;r.src&&t.forEach(t=>{r.src.includes(t)&&a(e[t],r)})}),document.addEventListener("mouseout",e=>{const o=e.target;o.src&&t.forEach(e=>{if(o.src.includes(e)){const e=document.getElementById("embeddedVideoStats");e.parentNode.removeChild(e)}})}),document.addEventListener("scroll",()=>{if(null!==document.getElementById("embeddedVideoStats")){const e=document.getElementById("embeddedVideoStats"),t=e.getAttribute("srcyoutube");[...document.querySelectorAll("iframe")].forEach(o=>{o.src===t&&(e.style.top=`${o.getBoundingClientRect().y-31}px`)})}})}})(e.stats);break;case"getEmbeddedVideosIds":o({videos:c(),currentUrl:`${location.href}`})}})},2:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.tkey="ng;ldfhgieRGV3dlkdsiig0a",t.privacyPolicyUrl="https://autohdforyoutube.com/privacy",t.messages={CAPTURE_VISIBLE_TAB:"CAPTURE_VISIBLE_TAB",DOWNLOAD:"DOWNLOAD",GOOGLE_ANALYTICS_SEND_EVENT:"GOOGLE_ANALYTICS_SEND_EVENT",TOGGLE_BLOCK_VIDEO_ADS:"TOGGLE_BLOCK_VIDEO_ADS",SET_VIDEO_QUALITY:"SET_VIDEO_QUALITY"},t.googleAnalytics={categories:{controlButton:"Control Button",error:"Error",popup:"Popup",settings:"Settings",popupSetting:"Popup Setting",youTubePlayer:"YouTube Player",adBlock:"Ad Block",popularityOffAlert:"Popularity off alert",videoPopularity:"Video Popularity",onboarding:"Onboarding"},actions:{click:"Click",open:"Open",select:"Select",switch:"Switch",toggle:"Toggle",captureScreen:"Capture Screen",darkenSurrounding:"Darken Surrounding",hideSurrounding:"Hide Surrounding",fillMode:"Fill Mode",shown:"Shown",videoPopularity:"Video Popularity",overlay:"Overlay"},labels:{options:"Options",enhancementsButtons:"Enhancements Buttons",adBlock:"Ad Block",fail:"Fail",success:"Success",screen:"Screen"},customDimensions:{section:{popup:"Popup",optionsSection:"Options section"}}},t.DEFAULT_VIDEO_QUALITY="auto",t.DEFAULT_PLAYER_SIZE="0",t.DEFAULT_VIDEO_PROGRESS_BAR_COLOR="#f00",t.DEFAULT_AD_BLOCKING=!1,t.DEFAULT_EMHANCEMENTS_BUTTONS=!0,t.DEFAULT_DOWNLOAD_VIDEOS=!0,t.localStorageKeys={NOTIFICATION_VIEWED:"notification_viewed"},t.chromeStorageKeys={SUBMITTED_RATING:"submittedRating",AD_BLOCKING:"adBlocking",DARK_THEME:"darkTheme",ENHANCEMENTS_BUTTONS:"enhancementsButtons",QUALITY:"quality",SIZE:"size",INSTALL_DATE:"installDate",SHOW_AD_BLOCKING_OVERLAY:"showAdBlockingOverlay",SHOW_EMBEDDED_VIDEOS_OVERLAY:"showEmbeddedVideosOverlay",DOWNLOAD_VIDEOS:"downloadVideos",HAS_ONBOARDED:"hasOnboarded",VIDEO_PROGRESS_BAR_COLOR:"progressBarColor"},t.GLOBAL_SETTINGS_URL="#global-settings",t.YOU_TUBE_URL="https://www.youtube.com",t.DEFAULT_VIMEO_BUTTON_CLASS_NAME="haddrp",t.videoQualityLevels=new Map([["hd1080","1080p"],["hd720","720p"],["large","480p"],["medium","360p"],["small","240p"]]),t.videoProgressBarColors=new Map([["Default","#f00"],["Blue","blue"],["Green","green"],["Yellow","yellow"],["Orange","orange"],["White","white"]])},3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{static getAllCookies(e){return new Promise((t,o)=>{chrome.cookies.getAll(e,e=>{chrome.runtime.lastError&&o(chrome.runtime.lastError),t(e)})})}static removeCookie(e){return new Promise((t,o)=>{chrome.cookies.remove(e,e=>{chrome.runtime.lastError&&o(chrome.runtime.lastError),t(e)})})}static setCookie(e){return new Promise((t,o)=>{chrome.cookies.set(e,e=>{!e&&chrome.runtime.lastError&&o(chrome.runtime.lastError),t(e)})})}static getCookie(e){return new Promise(t=>{chrome.cookies.get(e,e=>{t(e&&e.value)})})}static getStorageSync(){return new Promise((e,t)=>{chrome.storage.sync.get(o=>{chrome.runtime.lastError&&t(chrome.runtime.lastError),e(o)})})}static setStorageSync(e){return new Promise((t,o)=>{chrome.storage.sync.set(e,()=>chrome.runtime.lastError?o(chrome.runtime.lastError):t())})}static getActiveTab(){return new Promise((e,t)=>{chrome.tabs.query({active:!0,currentWindow:!0},o=>o.length>0?e(o[0]):t())})}static getExecutableResult(e=null,t,{first:o}){return new Promise((r,n)=>{chrome.tabs.executeScript(e,{code:t},e=>chrome.runtime.lastError?n(chrome.runtime.lastError):r(o?e&&e.length>0&&e[0]:e))})}static sendMessage(e){chrome.runtime.sendMessage(e,()=>{chrome.runtime.lastError})}static getStorageSyncItem(e){return new Promise((t,o)=>{chrome.storage.sync.get(e,r=>{const n=r[e];void 0!==n?t(n):o()})})}static isPopup(){return 1===chrome.extension.getViews({type:"popup"}).length}static isOptionsPage(){return new URL(window.location).pathname===new URL(chrome.runtime.getURL(chrome.runtime.getManifest().options_ui.page)).pathname}}},6:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},s=o(2),i=o(3),c=(r=i)&&r.__esModule?r:{default:r};t.default=class{static sendEvent(e){const{category:t,action:o}=e;t&&o&&c.default.sendMessage(n({message:s.messages.GOOGLE_ANALYTICS_SEND_EVENT},e))}}}});