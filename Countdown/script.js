const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minsel = document.getElementById("mins");
const secondsel = document.getElementById("seconds"); 


const eve = "25 December 2021";

function countdown () {
    const holidayDate = new Date(eve);
    const currentDate = new Date();
    const ms = holidayDate - currentDate;
    var day, hour, mins, seconds;
    seconds = Math.floor(ms / 1000);
    mins = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(mins / 60);
    mins = mins % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    
    daysel.innerHTML = day;
    hoursel.innerHTML = formatTime(hour);
    minsel.innerHTML = formatTime(mins);
    secondsel.innerHTML = formatTime(seconds);

}

function formatTime (time) {
    return time < 10 ? (`0${time}`) : time;
}

setInterval(() => {
    countdown();
}, 1000);

