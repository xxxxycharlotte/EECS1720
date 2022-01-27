let color = '#FDB9C8';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cpink', `color: ${color}`);
});

let option = '#89cff0';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ option });
  console.log('Default background color set to %cblue', `color: ${option}`);
});