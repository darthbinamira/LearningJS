/*jslint browser:true*/

var defaultText = "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.";
var run = false;
var delayStart = 200;
var delay = 75;
var separator = "";

function startScrolling() {
    "use strict";
    var textToType, outputElem, tempText, typeTimer, stopCounter;

    if (!run) {
        run = true;
        textToType = document.getElementById("textarea").value;
        stopCounter = 0;
        tempText = "";
        outputElem = document.getElementById("scroll_output");
        textToType = textToType.length === 0 ? defaultText : textToType;

        typeTimer = setInterval(function () {
            tempText = textToType.substr(stopCounter, textToType.length) + " · " + textToType.substr(0, stopCounter);
            outputElem.textContent = tempText;
            if (stopCounter < textToType.length) {
                ++stopCounter;
            } else {
                stopCounter = 0;
            }
            if (!run) {
                clearInterval(typeTimer);
            }
        }, delay);
    }
}

function stopScrolling() {
    "use strict";
    run = false;
}
