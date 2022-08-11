export const postData = ()=> {
    const getByClass = (className) => Array.from(document.getElementsByClassName(className))[0]
    const getMess = (className) => getByClass(className).textContent

    chrome.runtime.sendMessage({
        id: getMess("entity-result__secondary-subtitle t-14 t-normal"),
        iconUrl: getByClass("presence-entity__image  ivm-view-attr__img--centered EntityPhoto-circle-3  EntityPhoto-circle-3 lazy-image ember-view").src
    })
    chrome.runtime.sendMessage({
        id: getMess("entity-result__primary-subtitle t-14 t-black t-normal"),
        iconUrl: getByClass("presence-entity__image  ivm-view-attr__img--centered EntityPhoto-circle-3  EntityPhoto-circle-3 lazy-image ember-view").src
    })
    chrome.runtime.sendMessage({
        id: getMess("entity-result__title-text t-16"),
        iconUrl: getByClass("presence-entity__image  ivm-view-attr__img--centered EntityPhoto-circle-3  EntityPhoto-circle-3 lazy-image ember-view").src
    })

    

}