const textInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function addTask(){
  const temTexto = textInput.value.trim();
  if(temTexto != '')
   const TaskToAdd = document.creatElement('li');
  taskToAdd.innerHTML= `
  <span>${temTexto}</span> 
  <button onclick="">✍️</button>
  <button onclick="">❌ </button>
  <button onclick="">✔️</button>`;
  taskList.appendChild(taskToAdd);
taskList.innerHTML= `<li><span>${textInput.value.trim()}</span></li>`
}
