const todoInput = document.querySelector('.todoInput');
const todoForm = document.querySelector('.todo-form');
// const todoButton = document.querySelector('.todoButton');
const todoContainer = document.querySelector('.todoContainer');

// get data from local storage
const getTodoDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todoItemData")) || [];
}

let localTodo = getTodoDataFromLocalStorage() || [];

// create new todo element
const creatTodoElements = (newTodo) => {
  const todoItem = document.createElement('div');
  todoItem.classList.add('todoItem');
  if (todoItem) {
    todoItem.style.position = 'relative';
  }

  const data = document.createElement('p');
  data.innerText = newTodo;

  // create delete button and remove todo
  const deleteBtn = document.createElement('i');
  deleteBtn.classList.add('deletebtn', 'fas', 'fa-trash-alt');
  deleteBtn.addEventListener('click', () => {
    todoContainer.removeChild(todoItem);
    removeTodo(newTodo);
  });

  todoItem.appendChild(data);
  todoItem.appendChild(deleteBtn);

  // todoContainer.appendChild(todoItem);
  todoContainer.insertBefore(todoItem, todoContainer.children[0]);

  todoInput.value = '';
}

// remove todo from local storage
const removeTodo = (todoText) => {
  localTodo = localTodo.filter(item => item !== todoText);
  localStorage.setItem("todoItemData", JSON.stringify(localTodo));
}

const submitData = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value.trim();

  // send data to local storage
  localTodo.push(newTodo)
  localStorage.setItem("todoItemData", JSON.stringify(localTodo));

  if (newTodo === "") {
    alert('You have to write something to add!');
    return;
  }
  creatTodoElements(newTodo);
}

// display data from local storage
const displayTodo = () => {
  localTodo.forEach((item) => {
    creatTodoElements(item)
  })
}

displayTodo()
todoForm.addEventListener('submit', (e) => {
  submitData(e);
});