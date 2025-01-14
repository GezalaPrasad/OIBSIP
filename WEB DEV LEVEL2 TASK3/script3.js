let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            addedAt: new Date().toLocaleString(),
            completedAt: null
        };

        tasks.push(task);
        taskInput.value = '';  

        renderTasks();
    }
}

function toggleTaskCompletion(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = !task.completed;
        if (task.completed) {
            task.completedAt = new Date().toLocaleString();
        } else {
            task.completedAt = null;
        }
    }
    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(t => t.id !== taskId);
    renderTasks();
}

function editTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        const newText = prompt('Edit task:', task.text);
        if (newText !== null && newText.trim() !== '') {
            task.text = newText.trim();
        }
    }
    renderTasks();
}

function renderTasks() {
    const pendingTasksContainer = document.getElementById('pending-tasks');
    const completedTasksContainer = document.getElementById('completed-tasks');
    pendingTasksContainer.innerHTML = '';
    completedTasksContainer.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.textContent = `${task.text} (Added at: ${task.addedAt})`;

        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';
        completeButton.className = 'complete';
        completeButton.onclick = () => toggleTaskCompletion(task.id);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => deleteTask(task.id);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.onclick = () => editTask(task.id);

        taskElement.appendChild(completeButton);
        taskElement.appendChild(editButton);
        taskElement.appendChild(deleteButton);

        if (task.completed) {
            taskElement.textContent += ` (Completed at: ${task.completedAt})`;
            completedTasksContainer.appendChild(taskElement);
        } else {
            pendingTasksContainer.appendChild(taskElement);
        }
    });
}
