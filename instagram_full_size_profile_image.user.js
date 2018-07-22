// ==UserScript==
// @name        Instagram Full-Size Profile Image
// @namespace   https://github.com/anemology/Userscript
// @author      anemology
// @version     1
// @description Get the full-size profile image of Instagram
// @grant       none
// @include     https://www.instagram.com/*/
// @run-at document-idle
// ==/UserScript==
(function () {

    // replace all slash(/) from location pathname
    var username = location.pathname.replace(/\//g, '');

    // get user id
    fetch('https://www.instagram.com/' + username + '/?__a=1')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson.graphql.user.id;
        })
        .then(function (userid) {
            // get user profile picture url
            fetch('https://i.instagram.com/api/v1/users/' + userid + '/info/')
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    var picurl = myJson.user.hd_profile_pic_url_info.url;
                    console.log('%cThe full-size instagram profile image is here.', 'font-size:20px; color: #87CEFA;');
                    console.log('%c' + picurl, 'font-size: 40px; color: #87CEFA;');
                });
        });
})();