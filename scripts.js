document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    // Add Task
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-button');
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';

        // Mark as Completed
        li.addEventListener('click', function (event) {
            if (event.target !== editButton && event.target !== deleteButton) {
                li.classList.toggle('completed');
            }
        });

        // Edit Task
        editButton.addEventListener('click', function () {
            const newTaskText = prompt('Edit your task:', span.textContent);
            if (newTaskText !== null) {
                span.textContent = newTaskText;
            }
        });

        // Delete Task
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(li);
        });
    });
});
