function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
}

    if (taskInput.value === '') {
        alert('Please enter a task!');
        return;
    }

    let task = document.createElement('li');
    task.textContent = taskInput.value;

    let deleteButton = document.createElement('button');
    deleteButton.textContent= 'Delete';
    deleteButton.onclick = function () {
        task.parentNode.removeChild(task);
    };

    task.appendChild(deleteButton);
    taskList.appendChild(task);

    taskInput.value = '';
    
