document.getElementById("makeCoffeeBtn").onclick = () => {
  fetch("/on")
    .then(() => showStatus("Coffee is brewing! ☕"))
    .catch(() => showStatus("Failed to send request."));
};

document.getElementById("scheduleBtn").onclick = () => {
  const time = document.getElementById("scheduleTime").value;
  if (!time) {
    showStatus("Please pick a time first.");
    return;
  }

  fetch(`/schedule?time=${encodeURIComponent(time)}`)
    .then(() => showStatus(`Coffee scheduled for ${time}`))
    .catch(() => showStatus("Failed to schedule."));
};

function showStatus(msg) {
  document.getElementById("status").textContent = msg;
}
