/**
 * @see constants/constants.js contains tkey and messages too.
 */

if(typeof chrome !== 'object') {
	window.chrome = browser;
}

const version = chrome.runtime.getManifest().version;
const domain_secondary = 'https://embedded.autohdvideoapi.com';
const secondary_route = "/embedded";
const tkey = "ng;ldfhgieRGV3dlkdsiig0a";
const uninstallUrl = "https://autohdforyoutube.com/uninstall";
const REGEXP = {
    vimeo: /.*:\/\/(.*\.+|)vimeo.com\/\d*.*/,
    youtube: /.*:\/\/(.*\.+|)youtube.com\/.*/
};

const messages = {
  CAPTURE_VISIBLE_TAB: 'CAPTURE_VISIBLE_TAB',
  DOWNLOAD: 'DOWNLOAD',
  GOOGLE_ANALYTICS_SEND_EVENT: 'GOOGLE_ANALYTICS_SEND_EVENT',
  SET_VIDEO_QUALITY: 'SET_VIDEO_QUALITY',
};
