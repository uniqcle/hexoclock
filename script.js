let clock = document.getElementById("clock");
let color = document.getElementById("color");

function oclock(){
    let date = new Date();
    let h = (date.getHours() % 12).toString();
    let m = date.getMinutes().toString();
    let s = date.getSeconds().toString();

    if( h.length < 2 )  h = '0' + h;
    if( m.length < 2 )  m = '0' + m;
    if( s.length < 2 )  s = '0' + s;

    let clockString = h + ':' + m + ':' + s;
    let colorString = '#' + h + m + s;

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.background = colorString;
}

oclock();
setInterval(oclock, 1000);
