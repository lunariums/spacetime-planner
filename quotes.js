document.querySelector(".quote").innerText = todayQuote();

function setView(view) {
  const calendar = document.getElementById("calendar");
  if (view === "day") calendar.innerHTML = generateDay();
  if (view === "week") calendar.innerHTML = generateWeek();
  if (view === "month") calendar.innerHTML = generateMonth();
}

function generateDay() {
  return "<h2>Bugün</h2>";
}

function generateWeek() {
  return "<h2>Bu Hafta</h2>";
}

function generateMonth() {
  return "<h2>Bu Ay</h2>";
}

function addTask() {
  const inp = document.getElementById("taskInput");
  if (!inp.value) return;
  const li = document.createElement("li");
  li.textContent = inp.value;
  document.getElementById("taskList").appendChild(li);
  inp.value = "";
}

function analyzeDay() {
  const tasks = document.getElementById("taskList").children.length;
  const result = `
    Bugün ${tasks} görev kaydedildi.
    1 yıl boyunca devam edersen:
    • Yaklaşık ${tasks * 365} görev tamamlarsın.
    • Disiplin ve düzen alışkanlığın üst seviyeye çıkar.
    • Planlama becerilerin ciddi şekilde gelişir.
  `;
  document.getElementById("analysisResult").innerText = result;
}

let timer;
function startTimer() {
  let mins = parseInt(document.getElementById("timerMinutes").value);
  let secs = mins * 60;
  timer = setInterval(() => {
    secs--;
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    document.getElementById("timerDisplay").innerText = m + ":" + (s<10?"0"+s:s);
    if (secs <= 0) clearInterval(timer);
  }, 1000);
}
