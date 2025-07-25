// let input = document.getElementById('todo-input');
// let addBtn = document.getElementById('add-btn');
// let todoList = document.getElementById('todo-list');

// function addTask() {
//   let task = input.value.trim();
//   if (!task) return;

//   let li = document.createElement('li');
//   li.textContent = task;


//   li.addEventListener('click', () => {
//     li.classList.toggle('completed');
//   });

//   let delBtn = document.createElement('button');
//   delBtn.textContent = 'Delete';
//   delBtn.classList.add('delete-btn');

//   delBtn.addEventListener('click', e => {
//     e.stopPropagation();
//     todoList.removeChild(li);
//   });

//   li.appendChild(delBtn);
//   todoList.appendChild(li);

//   input.value = '';
//   input.focus();
// }

// addBtn.addEventListener('click', addTask);

// input.addEventListener('keypress', e => {
//   if (e.key === 'Enter') {
//     addTask();
//   }
// });






// function addTask() {
// const taskInput = document.getElementById('taskInput');
// const taskText = taskInput.value;

// const li = document.createElement('li');
// li.textContent = taskText;

//   // Click to remove the task
// li.onclick = function () {
//     li.remove();
// };

// document.getElementById('taskList').appendChild(li);
//   taskInput.value = ''; // Clear input
// }