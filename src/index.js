"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.querySelector('#addTaskBtn')?.addEventListener('click', addTask);
function addTask() {
    const input = document.getElementById("addTaskinput");
    const li = document.createElement("li");
    const txt = input.value;
    li.textContent = txt;
    document.getElementById("taskList")?.appendChild(li);
}
//# sourceMappingURL=index.js.map