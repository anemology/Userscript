// ==UserScript==
// @name        Skip Leaving Facebook
// @namespace   https://github.com/anemology/Userscript
// @author      anemology
// @version     1.0
// @description Skip leaving Facebook page
// @grant       none
// @include     https://www.facebook.com/flx/warn/?u=*
// @run-at      document-start
// ==/UserScript==

var redirect_url = decodeURIComponent(location.search.replace(/\?u=(.*?)&h=.*/, "$1"));
location.href = redirect_url;