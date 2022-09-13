// ==UserScript==
// @name        Twitch Channel Auto Close
// @match       https://www.twitch.tv/*
// @grant       GM_addStyle
// @version     1.1
// @author      anemology
// @description 2020/11/25 22:01:58
// @description 檢查是否在特定頻道。例如掛台睡覺時，台主揪團至其他頻道後可以自動關掉分頁。
// ==/UserScript==

// ===== setting area =====
var channel_id = "channel";
var check_interval = 180; // seconds
// ===== setting area =====

var checkTwitchUrl = setInterval(function () {
    console.log("check channel - " + channel_id);
    if (!location.href.includes(channel_id)) {
        // window.close only work under @grant=GM_addStyle
        // https://stackoverflow.com/questions/19761241/window-close-and-self-close-do-not-close-the-window-in-chrome
        saveTabClosedTime();
        window.close();
      /*
       * Firefox is secure against that exploit. So, the only javascript way is to cripple the security settings, one browser at a time.

You can open up about:config and set
allow_scripts_to_close_windows to true.
       * */
    }
}, check_interval * 1000);

// 儲存關閉分頁時間至 localStorage
// 利用 array 搭配 json 儲存多筆資料
// localStorage 只能存字串，所以要做字串與 json 轉換
function saveTabClosedTime() {
    let key = "twitch_close_time";
    let message = { "url": location.href, "time": new Date().toLocaleString() };
    let closed_detail = localStorage.getItem(key);
    let new_value = [];
    if (closed_detail) { // 已有資料
        new_value = JSON.parse(closed_detail);
    }
    new_value.push(message);
    localStorage.setItem(key, JSON.stringify(new_value));
}
