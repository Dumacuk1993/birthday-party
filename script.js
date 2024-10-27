window.addEventListener("DOMContentLoaded", () => {
    const targetDate = new Date('2024-11-23 16:00:00').getTime();

    function updateTimer() {
        const currentDate = new Date().getTime();
        const timeRemaining = targetDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.querySelector('.number_day').textContent = days < 10 ? `0${days}` : days;
        document.querySelector('.number_hours').textContent = hours < 10 ? `0${hours}` : hours;
        document.querySelector('.number_minute').textContent = minutes < 10 ? `0${minutes}` : minutes;
        document.querySelector('.number_second').textContent = seconds < 10 ? `0${seconds}` : seconds;

        if (timeRemaining < 0) {
            clearInterval(timerInterval);
            document.querySelector('.number_day').textContent = "00";
            document.querySelector('.number_hours').textContent = "00";
            document.querySelector('.number_minute').textContent = "00";
            document.querySelector('.number_second').textContent = "00";
        }
    }

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();    
})