/*
// - запилить функционал хранения элементов в массиве и добавления новых элементов в массив
// модель в массиве будет выглядеть примерно так: [{id: 1, title: "тест", done: false}, {id: 2, title: "тест 2", done: true}]
// - запилить функицонал отрисовки html элементов на основе данных из массива
// - запилить функционал добавления элемента в массив по нажатию на кнопку
*/

let modalContainer = document.querySelector('.modal-container');

let modalForm = document.querySelector('.modal-form');

let todoAdd = document.querySelector('.todo__add');

todoAdd.addEventListener("click", (e) =>{
    e.preventDefault();
    modalContainer.classList.add("active");
    
})
document.addEventListener( "click", (e) => {
    if(e.target === modalContainer){
        modalContainer.classList.remove("active");  
    }
})

// let modalButton = document.querySelector('.modal__button');


// function newElement() {
//   let li = document.createElement("li");
//   li.className ="todo__checkbox";

//   let checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   let ulList = document.querySelector('.todo__list')

//   let inputValue = document.getElementById("modal-input").value;

//   let t = document.createTextNode(inputValue);
//   li.appendChild(t);

  
//   ulList.appendChild(li);
//   li.prepend(checkbox);

//  document.getElementById("myInput").value = "";
// todos.push(li);
// }

var todo = {
    
    data : [], // todo list data array
    hAdd : null, // html add item text field
    hTemplate : null, // html item row template
    hList : null, // html to do list
    init : () => {
      
      if (localStorage.todo == undefined) { 
        localStorage.todo = "[]"; 
    }
    //Восстановить предыдущию сессию 
      todo.data = JSON.parse(localStorage.todo);

      todo.hAdd = document.getElementById("modal-input");
      todo.hTemplate = document.getElementById("todo-template").content;
      todo.hList = document.querySelector(".todo__list");
  
      
      document.querySelector(".modal-form").onsubmit = todo.add;
  
      
      todo.draw();
    },
  
    // (B) DRAW TO DO LIST
    draw : () => {
      // перезагрузить ту-ду лист 
      todo.hList.innerHTML = "";
  
      // (B2) LOOP & GENERATE ROWS
      if (todo.data.length > 0) {
         for (let id in todo.data) {
        let row = todo.hTemplate.cloneNode(true);
        row.querySelector(".todo-done").onclick = () => { todo.toggle(id); };
        row.querySelector(".todo-item").textContent = todo.data[id][0];
        
       
        if (todo.data[id][1]) {
          row.querySelector(".todo-item").classList.add("todo__item-done");
        }
        todo.hList.appendChild(row);
      }}
    },
  
    // (C) HELPER - SAVE DATA INTO LOCAL STORAGE
    save: () => {
      localStorage.todo = JSON.stringify(todo.data);
      todo.draw();
    },
  
    // (D) ADD A NEW ITEM TO THE LIST
    add : () => {
      todo.data.push([todo.hAdd.value, false]);
      todo.hAdd.value = "";
      todo.save();
      return false;
    },
  
    // (E) UPDATE TODO ITEM DONE/NOT YET
    toggle: (id) => {
      todo.data[id][1] = !todo.data[id][1];
      todo.save();
    },
  
 
  };
  
  // (G) PAGE INIT
  window.addEventListener("load", todo.init);
  

