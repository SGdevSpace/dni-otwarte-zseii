function updateTimer() {
    const target_time = Date.parse('April 22, 2022 15:00:00');
    const current_date = new Date();
    const date_difference = target_time - current_date;

    days_remaining = Math.floor(date_difference / (1000*60*60*24));
    hours_remaining = Math.floor(date_difference / (1000*60*60));
    minutes_remaining = Math.floor(date_difference / (1000*60));
    seconds_remaining = Math.floor(date_difference / 1000);
    countdown_days = days_remaining;
    countdown_hours = hours_remaining - days_remaining * 24;
    countdown_minutes = minutes_remaining - hours_remaining * 60;
    countdown_seconds = seconds_remaining - minutes_remaining * 60;

    document.getElementById('timer-days').innerHTML = countdown_days;
    document.getElementById('timer-hours').innerHTML = countdown_hours;
    document.getElementById('timer-minutes').innerHTML = countdown_minutes;
    document.getElementById('timer-seconds').innerHTML = countdown_seconds;

}
setInterval('updateTimer()', 1000);
