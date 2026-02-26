document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("addTaskinput");
    const button = document.getElementById("addTaskBtn");
    const list = document.getElementById("taskList");

    if (!input || !button || !list) {
        return;
    }

    const addTask = () => {
        const txt = input.value.trim();
        if (!txt) {
            return;
        }
        const li = document.createElement("li");
        li.textContent = txt;
        list.appendChild(li);
        input.value = '';
    };

    button.addEventListener('click', addTask);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});