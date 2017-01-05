var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    mili = 0, seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    mili++;
    if(mili >= 99) {
        mili = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + ":" + (mili ? (mili > 9 ? mili : "0" + mili) : "00");

    timer();
}
function timer() {
    t = setTimeout(add, 10);
}
timer();

start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}
clear.onclick = function() {
    h1.textContent = "00:00:00:00";
    mili = 0; seconds = 0; minutes = 0; hours = 0;
}