const textInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const temTexto = textInput.value.trim();

  if (temTexto !== '') {

    const taskToAdd = document.createElement('li');

    taskToAdd.innerHTML = `
      <span>${temTexto}</span> 
      <button onclick="editar(this)">✍️</button>
      <button onclick="remover(this)">❌</button>
      <button onclick="concluir(this)">fodase</button>
    `;

    taskList.appendChild(taskToAdd);

    textInput.value = '';
  }
}

function remover(button){
  const itemRemove = button.parentElement;
  taskList.removeChild(itemRemove)
}
function concluir(button){
  const itemToMark = button.parentElement;
  itemTomark.classList = 'completed';
}

