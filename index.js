const prevDate = new Date("1 jan, 2025 00:00:00 ").getTime();

let x  = setInterval(function updateTimer() {
    const now = new Date().getTime();
    const distancePending = now - prevDate

    //caculate days, min, hrs, secs
    //1 day = 24 * 60 * 60 * 1000 ms
    const oneDayInMillis = (24 * 60 * 60 * 1000);
    const oneHourInMillis  = (60 * 60 * 1000);
    const oneMinInMIllis = (60*1000);
    const oneSecondInMillis = (1000);

    const days = Math.floor(distancePending / (oneDayInMillis));

    const hours = Math.floor((distancePending%(oneDayInMillis) / (oneHourInMillis)));

    const minites = Math.floor((distancePending%(oneHourInMillis))/(oneMinInMIllis));

    const seconds = Math.floor((distancePending%(oneMinInMIllis))/(oneSecondInMillis));

    //populate in UI
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minites;
    document.getElementById("seconds").innerHTML = seconds;

    
}
, 1000);