"use strict";
console.log("Using Dev-Helper");

const bodyElement = document.getElementsByTagName("body");
let formData = {};
let borderProperties = `${formData.size}px ${formData.color} ${formData.bStyle}`;
// let borderProperties = "1px dashed #0000FF"

function devHelper(event) {
  // highlight the mouseover target
  event.target.style.border = borderProperties;

  // reset the border after a short delay
  setTimeout(function () {
    event.target.style.border = "";
  }, 500);
}

function DevHelperController(commands, sender, sendResponse) {
  console.log(commands);
  if (commands.onoffswitch) {
    formData = commands;
    borderProperties = `${formData.size}px ${formData.color} ${formData.bStyle}`;
    bodyElement[0].addEventListener("mouseover", devHelper, { passive: true });
  } else {
    bodyElement[0].removeEventListener("mouseover", devHelper);
  }
}

chrome.runtime.onMessage.addListener(DevHelperController);
