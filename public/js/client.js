var socket = io.connect('http://10.0.0.100'); //set this to the pi address

/* clock */
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

startTime();

/* end clock */

/* temp and humidity */
socket.on('THupdate', function(data){
    console.log(data);
    humidity = data.humidity;
    temp = data.temp;
    fTemp = temp * 9/5 + 32;
    document.getElementById('temp').innerHTML = temp + "C / " + fTemp + "F";
    document.getElementById('humidity').innerHTML = humidity + " %";
  });

  /*temperature*/


/* end temp and humidity */

/* water monitor */

socket.on('h2oMon', function (data){
    waterStatus= "The soil is wet";
    document.getElementById('waterLevel').innerHTML = waterStatus;

 });

socket.on('h2oMoff', function (data){
    waterStatus= "The soil is dry";
    document.getElementById('waterLevel').innerHTML = waterStatus;
 });

/* end water monitor */

/* light Mon */
socket.on('lighton', function (data){
    lightStatus= "Light is on";
    document.getElementById('lightLevel').innerHTML = lightStatus;
 });

socket.on('lightoff', function (data){
    lightStatus= "Light is off";
    document.getElementById('lightLevel').innerHTML = lightStatus;
 });
