const inp = document.getElementById('task_inp');
const list = document.querySelector('.taskList');
const addBtn = document.getElementById('taskAdding__addBtn');
const cleanBtn = document.getElementById('taskList__cleanBtn');
const startMessage = document.getElementById('taskList__startMessage');

function addTask() {
    list.removeChild(startMessage);
    let task = document.createElement('div');
    task.className = "taskItem";
    task.innerHTML = `
    <p>${inp.value[0].toUpperCase() + inp.value.slice(1)}</p>
    <input type="checkbox">
    `;
    list.append(task);
}
/*

function cleanTaskList () {
if (cleanBtn.clicked == true) {
while (list.firstChild) {
    list.removeChild(list.lastChild);
}
list.innerHTML = '<p id="taskList__startMessage">Нет задач</p>';
}
}
*/
