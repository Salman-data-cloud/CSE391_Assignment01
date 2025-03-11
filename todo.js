document.addEventListener("DOMContentLoaded", loadTasks);

function addTask(){
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();
    if (taskText){
        let taskList = document.getElementById("task-list");
        let li = document.createElement("li");
        li.innerHTML = `
        <input type = "checkbox" onclick="toggleTask(this)">
        <span>${taskText}</span>
        <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        saveTasks();
        taskInput.value = "";
    }
}

function toggleTask(checkbox) {
    let taskText = checkbox.nextElementSibling;
    taskText.style.textDecoration = checkbox.checked ? "line-through" : "none";
    saveTasks();
}


function removeTask(button) {
    button.parentElement.remove();
    saveTasks();
}


function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#task-list li").forEach(li => {
        tasks.push({
            text: li.children[1].innerText,
            completed: li.children[0].checked
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let taskList = document.getElementById("task-list");
        let li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} onclick="toggleTask(this)">
            <span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">${task.text}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
    });
}