// ==UserScript==
// @name        Redirect Wikipedia to desktop version
// @namespace   https://github.com/anemology/Userscript
// @author      anemology
// @version     1.0
// @description Redirect wiki from mobile version to desktop version
// @grant       none
// @match       https://*.m.wikipedia.org/*
// @run-at      document-start
// ==/UserScript==

(function () {
    window.location.replace(location.href.replace('m.wikipedia', 'wikipedia'));
})();
