console.log("Its alive!! You monster!....");

import {postData} from './profilesInject.js';

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: (/^https:\/\/www\.linkedin\.com\/.+/).test(tab.url)? postData:()=> alert("Yooza! You ain't supposed to scrap here bro.")
    })
})

chrome.runtime.onMessage.addListener((message)=> {
    console.log(message.id);
    chrome.notifications.create({
        title: "Stalking", 
        
        message: `You've done your stalking:${message.id}`, iconUrl:message.iconUrl, type: "basic"});

   /* chrome.tabs.create({url: "https://www.linkedin.com/feed/"});

    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.remove(tabs[0].id);
    }
    )*/
    //create and store the data in a json
    


})