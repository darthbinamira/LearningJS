// 90's Style Teletype.
// Ever since I started creating my own web pages back in 1998, I always used
// these neat little trick. It was cool back then. I had no idea what I was
// doing, I merely copied the script from hackers.com. This is an effort to redo
// that and be cool once again! :D

var run = false;
var delay = 75;

function startTyping() {
    if (run) {
        return;
    }
    "use strict";
    run = true;
    var textToType = document.getElementById("textarea").value;
    var outputElem = document.getElementById("teletype_output");
    var tempText = "";

    var typeTimer = setInterval(function () {
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

function stopTyping() {
    "use strict";
    run = false;
}

