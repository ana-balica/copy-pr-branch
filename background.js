chrome.tabs.onUpdated.addListener( function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    chrome.tabs.executeScript({file: 'render_copy_branch_name_button.js'});
  }
});
