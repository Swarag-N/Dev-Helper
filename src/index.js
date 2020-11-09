let devForm = document.getElementById("customization");
console.log(devForm)

function readFormData(){
    // let formData = new FormData( document.getElementById("customization") )
    var formData = Object.fromEntries(new FormData(document.querySelector('form')).entries());
    return formData

}

devForm.addEventListener("input", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let commands = readFormData()
        chrome.tabs.sendMessage(tabs[0].id, commands, function(response) {
          console.log(response);
        });
    });
});
