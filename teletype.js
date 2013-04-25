/*jslint browser:true*/

var defaultText = "90's Style Teletype. Ever since I started creating my own web pages back in 1998, I always used this neat little trick. It was cool back then. I had no idea what I was doing, I merely copied the script from hackers.com (http://web.archive.org/web/19981206230622/http://hackers.com/). This is an effort to redo that and be cool once again! :D";
var run = false;
var delay = 75;

function startTyping() {
    "use strict";
    var textToType, outputElem, tempText, typeTimer;

    if (!run) {
        run = true;
        textToType = document.getElementById("textarea").value;
        outputElem = document.getElementById("teletype_output");
        tempText = "";

        if (textToType.length === 0) {
            textToType = defaultText;
        }

        typeTimer = setInterval(function () {
            outputElem.textContent = tempText;
            if (textToType.length > tempText.length) {
                tempText = textToType.substr(0, tempText.length + 1);
            } else {
                run = false;
            }
            if (!run) {
                clearInterval(typeTimer);
            }
        }, delay);
    }
}

function stopTyping() {
    "use strict";
    run = false;
}
