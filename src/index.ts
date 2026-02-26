// document.querySelector('#addTaskBtn')?.addEventListener('click', addTask);
// function addTask() {
//     const input = document.getElementById("addTaskinput");
//     const li = document.createElement("li");
//     const txt = (input as HTMLInputElement).value;
//     li.textContent = txt;
//     document.getElementById("taskList")?.appendChild(li);
// }

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("addTaskinput") as HTMLInputElement;
    const button = document.getElementById("addTaskBtn");
    const list = document.getElementById("taskList");

    const addTask = () => {
        const txt = input.value.trim();
        if (!txt) return; // Prevent adding empty tasks
        const li = document.createElement("li");
        li.textContent = txt;
        list?.appendChild(li);
        input.value = ''; // Clear input after adding task
    };

    button?.addEventListener('click', addTask);
    input?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
