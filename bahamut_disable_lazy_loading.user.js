// ==UserScript==
// @name        Bahamut Disable Lazy Loading
// @namespace   https://github.com/anemology/Userscript
// @author      anemology
// @version     1
// @description 停用巴哈姆特的 Lazy Loading
// @grant       none
// @include     https://forum.gamer.com.tw/*
// @run-at      document-idle
// ==/UserScript==
(function () {
  let allImgs = document.querySelectorAll("img.lazyload");
  for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].classList.remove("lazyload");
    allImgs[i].src = allImgs[i].dataset.src;
  }
})();
