const addTask = document.querySelector('#btnCreate');
const newTask = document.querySelector('#txtItem');
const taskList = document.querySelector('#myList');
const clearTask = document.querySelector('#btnClear');


addTask.addEventListener('click', function() {

  if(addTask.value === ' ') {
    alert('Add a task');
  }

 // li element
  const li = document.createElement('li');
  li.className = 'list-group list-group-flush';
  li.appendChild(document.createTextNode(newTask.value));

 // x symbol
  const link = document.createElement('a');
  link.className = 'delete-item';
  link.innerHTML = '<i class="far fa-times-circle"></i>';
  li.appendChild(link);

 // li to ul
  taskList.appendChild(li);

 // clear
  taskList.value = ' ';

  function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
      e.target.parentElement.parentElement.remove();
    }
  }






});

 


