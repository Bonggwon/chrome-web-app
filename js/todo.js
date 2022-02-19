const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

// save to do list
let toDos;
const TODOS_KEY = "todos"

// save object in string format.
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/* Use short hand function def.
function idFilter(item) {
    li.id !== item.id;
}
*/

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // item.id is number and li.id is a string.
    // toDos = toDos.filter(item => item.id !== li.id);
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveToDos();
}

// make function to create todo list. 
// Take one todo argument.
// create li and span inside of li.
function paintToDo(todoObj) {
    const li = document.createElement("li");
    li.id = todoObj.id;
    const span = document.createElement("span");
    span.innerText = todoObj.text;
    // create delete button
    const button = document.createElement("button");
    // emoji : window + .
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handletoDoSubmit(event) {
    event.preventDefault();
    // copy current input value to new variable.
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // create object with id.
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos()
}

toDoForm.addEventListener("submit", handletoDoSubmit);

function sayHello(item) {
    console.log(`hello ${item}`);
}

// get the object in string format.
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
    // bring back string to object.
    const parsedToDos = JSON.parse(savedToDos);
    // restore the old saved to do into current to do list.
    toDos = parsedToDos;
    // run function for each member in array
    parsedToDos.forEach(paintToDo);
} else {
    toDos = [];
}
