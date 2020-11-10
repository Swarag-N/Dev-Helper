let devForm = document.getElementById("customization");

/**
 * @returns formData => Data in the Form
 */
function readFormData() {
  let formData = Object.fromEntries(
    new FormData(document.querySelector("form")).entries()
  );
  return formData;
}

function formEventHandler() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let commands = readFormData();
    chrome.tabs.sendMessage(tabs[0].id, commands);
  });
}

devForm.addEventListener("input", formEventHandler, false);
devForm.addEventListener("reset", formEventHandler, false);
