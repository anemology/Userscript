// ==UserScript==
// @name        MGStage Download All Sample Images
// @namespace   https://github.com/anemology/Userscript
// @author      anemology
// @version     1.0
// @description download all sample images from mgstage
// @grant       none
// @include     https://www.mgstage.com/product/product_detail/*
// @run-at      document-idle
// ==/UserScript==

// create link
let downloadlink = document.createElement("a");
downloadlink.href = "javascript:void(0);";
downloadlink.onclick = function (event) { downloadimages(event); };
// set link text
let text = document.createTextNode("download all sample images.");
downloadlink.appendChild(text);
// append link to page
document.querySelector("#sample-photo > dt:nth-child(1)").appendChild(downloadlink);

function downloadimages(e) {
    e.preventDefault();
    // stop other listener by mgstage
    e.stopImmediatePropagation();

    let pagetitle = document.title;
    // find video number
    let videonumberelement;
    let allths = document.querySelectorAll("th");
    for (var i = 0; i < allths.length; i++) {
        if (allths[i].innerHTML == "品番：") {
            videonumberelement = allths[i].nextElementSibling;
            break;
        }
    }
    let videonumber = ((videonumberelement) ? videonumberelement.innerHTML : "");
    let downloadpagetitle = videonumber + " " + pagetitle;

    let images = document.querySelectorAll("#sample-photo a.sample_image, a.link_magnify");
    let imagescontent = "";
    images.forEach(function (item) {
        imagescontent += "<img src='" + item.href + "' >";
    });

    let newTab = window.open("");
    newTab.document.write("<html><head><title>" + downloadpagetitle + "</title></head><body>" + imagescontent + "</body></html>)");
}
