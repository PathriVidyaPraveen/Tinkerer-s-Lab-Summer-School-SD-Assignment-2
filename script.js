const toggleBtn = document.getElementById("toggle-btn");

toggleBtn.onclick = () => {
  document.body.classList.toggle("dark-mode");

  
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
};

const timerElement = document.getElementById("timer");
if (timerElement) {
  const eventDate = new Date("2025-07-10T09:00:00").getTime();

  const updateTimer = () => {
    const now = new Date().getTime();
    const gap = eventDate - now;

    if (gap <= 0) {
      timerElement.textContent = "Event Started!";
      return;
    }

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  updateTimer();
  setInterval(updateTimer, 1000);
}
