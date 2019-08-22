function hideChat() {
    browser.tabs.executeScript({code:'if(document.getElementsByClassName("akc aZ6 nH oy8Mbf nn aCl") && document.getElementsByClassName("akc aZ6 nH oy8Mbf nn aCl")[0]){document.getElementsByClassName("akc aZ6 nH oy8Mbf nn aCl")[0].style.display = "none";}'});
}  
browser.browserAction.onClicked.addListener(hideChat);
