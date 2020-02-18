function startTime() {
    var today = new Date();
    var h = today.getHours();
    var suffix = h >= 12 ? "pm" : "am";
    h = ((h + 11) % 12 + 1);
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('txt').innerHTML =
        h + ":" + m + " " + suffix;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}