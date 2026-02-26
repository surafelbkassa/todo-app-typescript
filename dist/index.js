"use strict";
// document.querySelector('#addTaskBtn')?.addEventListener('click', addTask);
// function addTask() {
//     const input = document.getElementById("addTaskinput");
//     const li = document.createElement("li");
//     const txt = (input as HTMLInputElement).value;
//     li.textContent = txt;
//     document.getElementById("taskList")?.appendChild(li);
// }
Object.defineProperty(exports, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("addTaskinput");
    const button = document.getElementById("addTaskBtn");
    const list = document.getElementById("taskList");
    button?.addEventListener('click', () => {
        const txt = input.value.trim();
        if (!txt)
            return; // Prevent adding empty tasks
        const li = document.createElement("li");
        li.textContent = txt;
        list?.appendChild(li);
        input.value = ''; // Clear input after adding task
    });
});
//# sourceMappingURL=index.js.map