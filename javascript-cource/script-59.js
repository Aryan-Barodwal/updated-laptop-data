console.log("This is date and time tutorial");
// pimitive and reference data type..

function displayTime() {
    time = new Date();
    console.log(time);

    document.getElementById('time').innerHTML = time;
}
setInterval(displayTime, 1000);
