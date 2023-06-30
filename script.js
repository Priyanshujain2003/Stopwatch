const timerdisplay = document.querySelector(".timer");


var sec = 0;
var min = 0;
var hr = 0;

var stoptime = true;

function start() {
    if (stoptime == true) {
        stoptime = false;
        starttimer()
    }
}

function stop() {
    if (stoptime == false) {
        stoptime = true;
    }
}



function starttimer() {
   
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    if (stoptime == false) {
        sec = sec + 1;

        if (sec == 60) {
            sec = 0;
            min = min + 1;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }



        if (sec < 10) {
            sec = "0" + sec;
        }

        if (min < 10) {
            min = "0" + min;
        }

        if (hr < 10) {
            hr = "0" + hr;
        }

        timerdisplay.innerHTML = hr + ":" + min + ":" + sec;

        setTimeout("starttimer()", 1000)
    }
}

function reset() {
    timerdisplay.innerHTML = `00 : 00 : 00`;
    stoptime = true;
    hr = 0;
    min = 0;
    sec = 0
}