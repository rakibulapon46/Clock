let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let m = document.getElementById('m');
let date = document.getElementById('date');

let time = () => {
    let currentTime = new Date();
    hours.innerHTML = (currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours());
    minutes.innerHTML = (currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes());
    seconds.innerHTML = (currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds());
    m.innerHTML = (currentTime.getHours() >= 12) ? "PM" : "AM";

    if (currentTime.getHours() == 0) {
        hours = 12;
    } else if (currentTime.getHours() > 12) {
        hours = currentTime.getHours() - 12;
    } else {
        hr = currentTime.getHours();
    }

    let myDay = ["Sunday", "Monday", "Tuesday", "Wednesday", " Thursday", "Friday", "Saturday"];
    let myMonth = ["January","February","March","April", "May", "June", "July", "August", "September",
    "October", "November", "December"];
    let day = currentTime.getDate();

    let myDate = myDay[currentTime.getDay()] + ", " + myMonth[currentTime.getMonth()] + " " + day;
    date.innerHTML = myDate;


}

setInterval(() => {
    time();
}, 1000);