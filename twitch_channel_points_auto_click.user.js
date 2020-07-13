// ==UserScript==
// @name        Twitch Channel Points Auto Click
// @match       https://www.twitch.tv/*
// @grant       none
// @version     1.1
// @author      anemology
// @description 2020/1/19 22:44:29
// ==/UserScript==

// ===== setting area =====
var click_interval = 30; // seconds
// ===== setting area =====

var clickTwitchButton = setInterval(function () {
    var twButton = document.querySelector(".tw-button");
    console.log("check button on, " + new Date() + ", points = " + getPoints());
    if (twButton) {
        twButton.click();
    }
}, click_interval * 1000);

function getPoints() {
    // var points = document.querySelector(".tw-core-button--text > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)").innerHTML;
    // 2020/06/05 new selector  
    var points = document.querySelector("div.tw-c-text-alt-2:nth-child(2) > span:nth-child(1)").innerHTML;
    return points;
}
