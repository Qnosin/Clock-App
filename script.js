let timeSet = () => {
    let date = new Date;
    let hour, minutes, seconds;
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    timeUpdate(hour, minutes, seconds);
}

let timeUpdate = (hour, minutes, seconds) => {
    const places = document.querySelectorAll('.time');
    //hours condition
    if (hour < 10) places[0].textContent = '0' + hour;
    else if (hour >= 10) places[0].textContent = hour;
    //minutes condition
    if (minutes < 10) places[1].textContent = '0' + minutes;
    else if (minutes >= 10) places[1].textContent = minutes;
    //seconds condition
    if (seconds < 10) places[2].textContent = '0' + seconds;
    else if (seconds >= 10) places[2].textContent = seconds;

    //condition to change times
    if (hour !== 24) {
        //seconds
        seconds++;
        if (seconds < 10) places[2].textContent = '0' + seconds;
        else if (seconds >= 10) places[2].textContent = seconds;
        //minutes
        if (seconds == 60) {
            seconds = 0 + '0';
            minutes++;
            places[2].textContent = seconds;
            if (minutes < 10) places[1].textContent = '0' + minutes;
            else if (minutes >= 10) places[1].textContent = minutes;
            //hour
            if (minutes == 60) {
                minutes = 0 + '0'
                hour++;
                places[1].textContent = minutes;
                if (hour < 10) places[0].textContent = '0' + hour;
                else if (hour >= 10) places[0].textContent = hour;
                //default hour
                if (hour == 24) {
                    hour = 0 + '0'
                    places[0].textContent = hour;
                }
            }
        }

    }
}
window.addEventListener('load', () => {
    setInterval(() => {
        timeSet();
    }, 1000);
});