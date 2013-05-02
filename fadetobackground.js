/*jslint browser:true*/

var defaultText = "I must not fear.\nFear is the mind-killer.\nFear is the little-death that brings total obliteration.\nI will face my fear.\nI will permit it to pass over me and through me.\nAnd when it has gone past I will turn the inner eye to see its path.\nWhere the fear has gone there will be nothing.\nOnly I will remain.";
var run = false;
var delay = 25;

function startFading() {
    "use strict";
    var textToType, outputElem, tempText, typeTimer, stopCounter, spanElem, fadeStart, tempDouble;

    if (!run) {
        run = true;
        fadeStart = false;
        textToType = document.getElementById("textarea").value;
        stopCounter = 0;
        tempText = "";
        outputElem = document.getElementById("fade_output");
        textToType = textToType.length === 0 ? defaultText.split('\n').reverse() : textToType.split('\n').reverse();

        while (outputElem.firstChild) {
            outputElem.removeChild(outputElem.firstChild);
        }

        typeTimer = setInterval(function () {
            if (!fadeStart) {
                tempDouble = 0.0;
                spanElem = document.createElement('span');
                spanElem.style.opacity = "0.0";
                spanElem.textContent = textToType.pop();
                outputElem.appendChild(spanElem);
                outputElem.appendChild(document.createElement('br'));
                fadeStart = true;
            }
            if (spanElem.style.opacity < 1) {
                tempDouble += 0.01;
                spanElem.style.opacity = tempDouble;
            } else {
                fadeStart = false;
                if (textToType.length === 0) {
                    run = false;
                }
            }
            if (!run) {
                clearInterval(typeTimer);
            }
        }, delay);
    }
}

function stopFading() {
    "use strict";
    run = false;
}
