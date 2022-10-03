/*
// - запилить функционал хранения элементов в массиве и добавления новых элементов в массив
// модель в массиве будет выглядеть примерно так: [{id: 1, title: "тест", done: false}, {id: 2, title: "тест 2", done: true}]
// - запилить функицонал отрисовки html элементов на основе данных из массива
// - запилить функционал добавления элемента в массив по нажатию на кнопку
*/


// Создаем подложку и модальное окно по крику на  плюсик
let modalContainer = document.querySelector('.modal-container');

let modalForm = document.querySelector('.modal-form');

let todoAdd = document.querySelector('.todo__add');

let modalClose = document.querySelector('.modal-close');

todoAdd.addEventListener("click", (e) => {
	e.preventDefault();
	modalContainer.classList.add("active");

})
document.addEventListener("click", (e) => {
	if (e.target === modalContainer) {
		modalContainer.classList.remove("active");
	}
})
document.addEventListener("click", (e) => {
	if (e.target === modalClose) {
		modalContainer.classList.remove("active");
	}
})


const toDoList = {

	data: [], // масиив
	hAdd: null, // input для ввода задачи 
	hTemplate: null, //  todoitem в template
	hList: null, // список задач
	init: () => {

		if (localStorage.toDoList == undefined) {
			localStorage.toDoList = "[]";
		}
	 
		toDoList.data = JSON.parse(localStorage.toDoList);

		toDoList.hAdd = document.getElementById("modal-input");

		toDoList.hTemplate = document.getElementById("todo-template").content;

		toDoList.hList = document.querySelector(".todo__list");


		document.querySelector(".modal-form").onsubmit = toDoList.add;


		toDoList.draw();
	},

	// создаем ту ду лист
	draw: () => {
		// перезагрузить ту-ду лист 
		toDoList.hList.innerHTML = "";

		// создаем копию блока todo.hTemplate 
		if (toDoList.data.length > 0) {
			for (let title in toDoList.data) {
				let row = toDoList.hTemplate.cloneNode(true);
				row.querySelector(".todo-item").textContent = toDoList.data[title][0];

				row.getElementById("todo-done").onclick = () => {
					toDoList.data[title][1] = !toDoList.data[title][1];
					toDoList.save();
				};

				
				if (toDoList.data[title][1]) {
					row.querySelector(".todo-item").classList.add("todo__item-done");
					
				}
				toDoList.hList.appendChild(row);
			}
		}
	},
	save: () => {
		localStorage.toDoList = JSON.stringify(toDoList.data);
		toDoList.draw();
	},

	// Добавляем задание в массив
	add: () => {
		toDoList.data.push([toDoList.hAdd.value, false]);
		toDoList.hAdd.value = "";
		toDoList.save();
		return false;
	},
};


window.addEventListener("load", toDoList.init);


