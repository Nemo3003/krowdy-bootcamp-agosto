(()=>{chrome.action.onClicked.addListener(e=>{let t={target:{tabId:e.id},files:["scripts/scrapper.js"]};chrome.scripting.executeScript(t)});})();
