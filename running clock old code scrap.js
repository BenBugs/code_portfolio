function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (hour < 10) {
        hour = '0' + hour;
    }

    if (minute < 10) {
        minute = '0' + minute;
    }

    if (second < 10) {
        second = '0' + second;
    }

    let currentTime = `${hour}:${minute}:${second}`;
    $("#currentTime").text(currentTime);

    // this increments the clock live
    setTimeout(showTime, 1000);
}

// day of week 
function weekDays() {
const date = new Date();
const day = date.getDay();
let weekDays = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'];
const setDay = weekDays[day];
const dayDate = date.getDate();

let todaysDate = `${setDay} ${dayDate}`;
$('#day-of-week').text(todaysDate);


weekDays = ['Mon' , 'Tue' , 'Wed' , 'Thu' , 'Fri' , 'Sat' , 'Sun']; 
const today = weekDays[day]; // connect this to tiles

console.log(today);
}


// call date and time functions
showTime();
weekDays();