// ==UserScript==
// @name         Seiya Saiga persistent checkboxes generic
// @namespace    https://github.com/VLF100
// @version      1.0
// @description  A script to make the checboxes on the Seiya Saiga website persistent across sessions, so they don't get deleted when closing or reloading the browser.
// @author       VLF100
// @match        https://seiya-saiga.com/game/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

var id_counter = 0;

var url = window.location.href;
var url_split = url.split("/");
var guide_name = url_split[url_split.length-1].split(".")[0];
console.log("Script loaded for "+guide_name);

// maybe the elements are already on the page
loadCheckboxes([].slice.call(document.querySelectorAll('input[type="checkbox"]')));

function loadCheckboxes(nodes) {
    nodes.forEach(function(n) { n.setAttribute("id",guide_name+"-checkbox-"+id_counter++); if(GM_getValue(n.id) == true) n.checked = true; n.addEventListener( 'change', function() {
    if(this.checked) {
        console.log("Checbox checked " + this.id)
        GM_setValue( this.id, true )
    } else {
        console.log("Checbox unchecked " + this.id)
        GM_setValue( this.id, false )
    }
});
});
}
