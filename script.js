

document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    const createTaskElement = (taskText, taskTime) => {
        const task = document.createElement("div");
        task.classList.add("task");

        const details = document.createElement("div");
        details.classList.add("details");

        const text = document.createElement("span");
        text.textContent = taskText;

        const time = document.createElement("span");
        time.textContent = taskTime;
        time.classList.add("time");

        details.appendChild(text);
        details.appendChild(time);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            const newText = prompt("Edit Task", taskText);
            if (newText) {
                text.textContent = newText;
                time.textContent = getCurrentTime();
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Complete";
        deleteButton.addEventListener("click", () => {
            task.remove();
        });

        task.appendChild(details);
        task.appendChild(editButton);
        task.appendChild(deleteButton);

        return task;
    };

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const taskTime = getCurrentTime();
            const taskElement = createTaskElement(taskText, taskTime);
            taskList.appendChild(taskElement);
            taskInput.value = "";
        }
    });
});
