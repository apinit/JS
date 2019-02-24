var h = document.getElementById('hr');
var m = document.getElementById('mins');
var s = document.getElementById('secs');

setInterval(function(){
    var now = new Date();
    var hr = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();

    h.innerHTML = get2Digit(hr);
    m.innerHTML = get2Digit(mins);
    s.innerHTML = get2Digit(secs);
}, 1000);

function get2Digit(x){
    if(x < 10) return "0" + x;
    else return x;
}