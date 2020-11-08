console.log("Using Dev-Helper");

test = document.getElementsByTagName("body");

function devHelper(event) {
  // highlight the mouseover target
  event.target.style.border = "1px dashed #0000FF";
  // reset the border after a short delay
  setTimeout(function () {
    event.target.style.border = "";
  }, 500);
}

function DevHelperController(command, sender, sendResponse) {
  if (command.activate) {
    test[0].addEventListener("mouseover", devHelper, false);
  } else {
    test[0].removeEventListener("mouseover", devHelper);
  }
}
chrome.runtime.onMessage.addListener(DevHelperController);
