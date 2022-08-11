console.log("Its alive!!  you monster!....");

import {postData} from './profilesInject.js';

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: (/^https:\/\/www\.linkedin\.com\/.+/).test(tab.url)? postData:()=> alert("Yooza!You ain't supposed to scrap here bro.")
    })
})

chrome.runtime.onMessage.addListener((message)=> {
    console.log(message);
    chrome.notifications.create({
        title: "AKA: stalking", 
        message: `You've done your stalking: Charge${message.id}`, iconUrl:message.iconUrl, type: "basic"});

    //mock sending data with fetch method
    var url = 'https://example.com/saveProfile';
    var data = {idProfile: message.id, profileImg: message.iconUrl};
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
})