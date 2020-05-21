var listElement = document.querySelector('#app ul[name=listaToDo]');
var inputElement = document.querySelector('#app input[name=input]');
var btnElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderToDos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode(' Remove');

        var position = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteToDos('+position+')');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderToDos();

//func addToDo's
function addToDos(){
    var todoText = inputElement.value;
    todos.push(todoText);

    inputElement.value= '';
    renderToDos();
    saveToStorage();
}

btnElement.onclick = addToDos;

function deleteToDos(position){
    todos.splice(position, 1);

    renderToDos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}