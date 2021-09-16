const todoFormElem = document.querySelector('#todoForm');
const todoInput = todoFormElem.querySelector('input');
const todoUl = document.querySelector('#todoList');
//[{ id: Length+1, value:input.value},{id: , value:input,value},,,,,]
// id: Date.now()
const TODOLIST_KEY = 'todos';
let toDos = [];

const saveToDostorage = () =>{
  const strTodo = JSON.stringify(toDos);
  localStorage.setItem(TODOLIST_KEY,strTodo);
}

const saveToDo = (num, text) => {
  const newObj = { 
    id : num,
    value : text
  };
  toDos.push( newObj );
  saveToDostorage();
}

const deleteBtnEvent = (event) =>{ 
  const delObj = event.target.parentElement;
  const delId = delObj.id;
  delObj.remove();
  toDos = toDos.filter( (item) => {
    return item.id !== delId;
  });
  saveToDostorage();
}
const addTodoList = (id, text) =>{
  const li = document.createElement("li");
  li.id = id;
  const span = document.createElement("span");
  span.innerText = text;
  const btn = document.createElement("button");
  btn.innerText = '❌';
  li.appendChild(btn);
  li.appendChild(span);
  todoUl.appendChild(li);
  btn.addEventListener('click', deleteBtnEvent );
  saveToDo( li.id, text );
}

const todoSubmitEvent = (event) =>{
  event.preventDefault();
  // console.log('submit event');
  const value = todoInput.value;
  todoInput.value = "";
  addTodoList(Date.now(), value);
}

const loadTodoStorage = () =>{
  const loadTodos = localStorage.getItem(TODOLIST_KEY);
  if( loadTodos ){
    const objTodos = JSON.parse(loadTodos);
    objTodos.forEach( (item) => {
      addTodoList( item.id, item.value );
    });
  }
}
loadTodoStorage();
todoFormElem.addEventListener('submit', todoSubmitEvent );