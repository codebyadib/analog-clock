const hourHand = document.getElementById("hourHand");
const minuteHand = document.getElementById("minuteHand");
const secondHand = document.getElementById("secondHand");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  secondHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) translateY(-100%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// 🌗 Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const toggleCircle = document.getElementById("toggleCircle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleCircle.textContent = "🌙";
  } else {
    toggleCircle.textContent = "⛅";
  }
});
