var tasks = [
    {id: 1, description: 'Tarea 1', completed: false},
    {id: 2, description: 'Tarea 2', completed: false},
    {id: 3, description: 'Tarea 3', completed: false}
];

var taskId = tasks.length;
var totalTasks = tasks.length;
var completedTasks = tasks.filter(task => task.completed).length;

function addTask() {
    var taskText = document.getElementById('newTask').value;
    if (taskText === '') return;
    tasks.push({id: ++taskId, description: taskText, completed: false});
    document.getElementById('newTask').value = '';
    document.getElementById('total').innerText = ++totalTasks;
    updateTable();
}

function updateCount(checkbox, index) {
    tasks[index].completed = checkbox.checked;
    completedTasks += checkbox.checked ? 1 : -1;
    document.getElementById('completed').innerText = completedTasks;
}

function deleteTask(index) {
    if (tasks[index].completed) {
        completedTasks--;
        document.getElementById('completed').innerText = completedTasks;
    }
    tasks.splice(index, 1);
    totalTasks--;
    document.getElementById('total').innerText = totalTasks;
    updateTable();
}

function addTaskToTable(task, index) {
    var table = document.getElementById('taskTable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = task.id;
    cell2.innerHTML = task.description;
    cell3.innerHTML = '<input type="checkbox" ' + (task.completed ? 'checked' : '') + ' onchange="updateCount(this, ' + index + ')">';
    cell4.innerHTML = '<button onclick="deleteTask(' + index + ')">X</button>';
}

function updateTable() {
    var table = document.getElementById('taskTable');
    table.innerHTML = '<tr><th>ID</th><th>Tarea</th></tr>';
    tasks.forEach(addTaskToTable);
}

window.onload = updateTable;