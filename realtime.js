// realtime.js
import { db } from "./firebase-config.js";
import { ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

// Live Score Update - Admin only
const updateBtn = document.createElement("button");
updateBtn.innerText = "Update Score";
updateBtn.style.display = "block";
updateBtn.style.margin = "12px auto";
document.body.appendChild(updateBtn);

const runInput = document.createElement("input");
runInput.type = "number";
runInput.placeholder = "Enter Runs";
runInput.style.display = "block";
runInput.style.margin = "12px auto";
document.body.appendChild(runInput);

updateBtn.addEventListener("click", () => {
  const runs = runInput.value;
  if (!runs) return alert("Please enter a value!");
  set(ref(db, "score/teamA"), {
    runs: runs,
    updatedAt: Date.now()
  });
});

// Real-time update on page
const liveRunsElem = document.createElement("div");
liveRunsElem.id = "liveRuns";
liveRunsElem.style.textAlign = "center";
liveRunsElem.style.fontSize = "28px";
liveRunsElem.style.color = "#00ff14";
liveRunsElem.style.margin = "10px";
document.body.insertBefore(liveRunsElem, document.body.firstChild);

const scoreRef = ref(db, "score/teamA");
onValue(scoreRef, (snapshot) => {
  const data = snapshot.val();
  liveRunsElem.innerText = data?.runs ?? "0";
});
