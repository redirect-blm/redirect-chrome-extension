import {wrapStore} from 'webext-redux';
 
const store;
 
wrapStore(store);

chrome.runtime.onInstalled.addListener(function() {
  // Show the page action (popup.html) when the URL host demain contains amazon
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: 'amazon.com' }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});