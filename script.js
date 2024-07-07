function startTimer() {
    const timerElement = document.getElementById('timer');
    function updateTimer() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timerElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateTimer, 1000);
    updateTimer();
}

startTimer();
