console.log("Background JS")

let activate = true

function devHelperStart(tab){
    chrome.tabs.sendMessage(tab.id,{activate})
    activate = !activate
    console.log("activate",activate)
}


chrome.browserAction.onClicked.addListener(devHelperStart)

