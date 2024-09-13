function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        ${taskText}
        <div>
            <button class="complete" onclick="toggleTask(this)" title="Concluir">✔️</button>
            <button class="remove" onclick="removeTask(this)" title="Remover">❌</button>
        </div>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function toggleTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.classList.toggle('completed');
}

function removeTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.remove();
}
