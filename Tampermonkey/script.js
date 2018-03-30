// ==UserScript==
// @name         Backpack.tf Stats Scanner
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  try to take over tf2's economy!
// @author       Squizel
// @include      https://backpack.tf/stats/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Quality list
    var qualities = [];
    qualities[0] = {name: "Normal"};
    qualities[1] = {name: "Genuine"};
    qualities[3] = {name: "Vintage"};
    qualities[5] = {name: "Unusual"};
    qualities[6] = {name: "Unique"};
    qualities[7] = {name: "Community"};
    qualities[8] = {name: "Valve"};
    qualities[9] = {name: "Self-Made"};
    qualities[11] = {name: "Strange"};
    qualities[13] = {name: "Haunted"};
    qualities[14] = {name: "Collector's"};
	qualities[15] = {name: "Decorated"};

    var original_link = window.location.href;
    console.log(original_link);
    var link = original_link.split("/");
    console.log(link);
    var quality = link[4].replace("%27", "'");
    var name = decodeURI(link[5]);
    var craftable = link[7];
    var tradable = link[6];
    var australium;
    var killstreak;
    // Convert the craftable stat into a number
    if (craftable == "Craftable"){
        craftable = 1;
    } else {
        craftable = -1;
    }
    // Convert quality into a number
    for (var i = 0; i <= 15; i++){
        if (qualities[i] != undefined){
            if (qualities[i].name == quality){
                quality = i;
                name = name.replace(qualities[i].name + " ", "");
                break;
            }
        }
    }
    // Get if the item is australium
    if (name.includes("Australium")){
        name = name.replace("Australium ", "");
        australium = 1;
    } else {
        australium = -1;
    }
    // Get if the item is killstreak
    if (name.includes("Killstreak")){
        if (name.includes("Specialized Killstreak")){
            name = name.replace("Specialized ", "");
            killstreak = 2;
        } else if (name.includes("Professional Killstreak")){
            name = name.replace("Professional ", "");
            killstreak = 3;
        } else {
            killstreak = 1;
        }
        name = name.replace("Killstreak ", "");
    } else {
        killstreak = 0;
    }
    console.log(`The name is ${name}`);
    console.log(`The quality is ${quality}`);
    console.log(`The craftable stat is ${craftable}`);
    console.log(`The australium stat is ${australium}`);
	console.log(`The killstreak stat is ${killstreak}`);
	
	//adding the button
	var x = document.getElementsByClassName("price-boxes");
	x[0].innerHTML += `<a target="_blank" class="price-box" href="http://localhost/additem/?name=${name}&quality=${quality}&craftable=${craftable}&australium=${australium}&killstreak=${killstreak}" onclick="additem()" style="height:51px;"><div class="icon"><i class="stm stm-steamrep"></i></div><div class="text"><div class="value">Add item</div></div></a>`;

})();
