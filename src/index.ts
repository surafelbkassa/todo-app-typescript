document.querySelector('#addTaskBtn')?.addEventListener('click', addTask);
function addTask() {
    const input = document.getElementById("addTaskinput");
    const li = document.createElement("li");
    const txt = (input as HTMLInputElement).value;
    li.textContent = txt;
    document.getElementById("taskList")?.appendChild(li);
}