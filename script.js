const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.todoButton');
const todoContainer = document.querySelector('.todoContainer');

    const getTodoDataFromLocalStorage = () =>{
      return JSON.parse(localStorage.getItem("todoItemData")) || [];
    }

    const addTodoDataToLocalStorage = (todo) =>{
      localStorage.setItem("todoItemData", JSON.stringify(todo))
    }
  
    const submitData = (e) => {
      e.preventDefault();
      let newTodo = todoInput.value.trim()
      

      if (newTodo === "") {
        alert('You have to write something to add!');
        return;
      }
  
      const todoItem = document.createElement('div');
      todoItem.classList.add('todoItem');
      if (todoItem) {
        todoItem.style.position = 'relative';
      }
  
      const data = document.createElement('p');
      data.innerText = newTodo;
  
      const deleteBtn = document.createElement('i');
      deleteBtn.classList.add('deletebtn','fas', 'fa-trash-alt');
      deleteBtn.addEventListener('click', () => {
        todoContainer.removeChild(todoItem);
      });
  
      todoItem.appendChild(data);
      todoItem.appendChild(deleteBtn);
  
      todoContainer.appendChild(todoItem);
  
      todoInput.value = '';
    }
  
    todoButton.addEventListener('click', (e) => {
      submitData(e);
    });