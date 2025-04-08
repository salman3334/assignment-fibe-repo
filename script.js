let taskCount = 6;
let points = 23;

document.querySelectorAll(".complete-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (btn.disabled) return;

    alert("Board updated successfully");

    btn.disabled = true;
    btn.classList.add("btn-disabled");

    // Update task count
    taskCount--;
    document.getElementById("taskCount").textContent = "0" + taskCount;

    // Set point to 0
    points = 0;
    document.getElementById("pointCount").textContent = points;

    // Optional: Add to history
    const log = document.getElementById("activityLog");
    const taskName = btn.parentElement.querySelector("p").textContent;
    const now = new Date().toLocaleTimeString();
    const entry = document.createElement("p");
    entry.textContent = `You have Completed the Task ${taskName} at ${now}`;
    log.appendChild(entry);
  });
});

function clearHistory() {
  document.getElementById("activityLog").innerHTML = "";
}
