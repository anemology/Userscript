// ==UserScript==
// @name        Bahamut Old Search
// @namespace   https://github.com/anemology/Userscript
// @author      anemology
// @version     1.1
// @description 巴哈舊搜尋，並可只搜尋一個字
// @grant       none
// @include     https://forum.gamer.com.tw/*
// @run-at document-idle
// ==/UserScript==
(function () {
    document.querySelector('#searchbox').style.display = 'none';
    document.querySelector('#old_search_searchbox').style.display = '';
    var SearchInput = document.getElementById('old_search_input');
    if (SearchInput.value == '') {
        SearchInput.value = '\\';
    }
})();