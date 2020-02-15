document.addEventListener("DOMContentLoaded", function () {
    var t = 70;
    var s = 5;
    var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    document.getElementById("windChill").innerHTML = f.toFixed(0);
});