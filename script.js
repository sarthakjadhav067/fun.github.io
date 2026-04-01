// LIVE STATUS BLINK
const liveStatus = document.getElementById("liveStatus");

setInterval(() => {
  liveStatus.style.opacity = liveStatus.style.opacity === "0" ? "1" : "0";
}, 800);


// DARK/LIGHT MODE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  toggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
});


// ALERT DATA (SIMULATED)
const alertsData = [
  { message: "Accident on Main St - Delayed" },
  { message: "Heavy congestion on Highway 5" },
  { message: "Roadwork on 3rd Avenue" }
];

const alertsList = document.getElementById("alertsList");

function loadAlerts() {
  alertsList.innerHTML = "";

  alertsData.forEach(alert => {
    const li = document.createElement("li");
    li.textContent = alert.message;
    alertsList.appendChild(li);
  });
}

loadAlerts();
