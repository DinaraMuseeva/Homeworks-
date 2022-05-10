"use strict"




//  4.Напишите интерфейс для создания списка.
/*
Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент < li > и добавляйте его к < ul >.
Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
Все элементы должны создаваться динамически.

Если пользователь вводит HTML - теги -– пусть в списке они показываются как обычный текст.

 */
let ulList = document.createElement('ul');
document.body.append(ulList);

while (true) {
	
	let li = document.createElement('li');

	//li.textContent = prompt("Введите данные");

	if (li.textContent == "") break;
	ulList.append(li);
}
 
// 5.Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

let data = {
	"Рыбы": {
		"форель": {},
		"лосось": {}
	},

	"Деревья": {
		"Огромные": {
			"секвойя": {},
			"дуб": {}
		},
		"Цветковые": {
			"яблоня": {},
			"магнолия": {}
		}
	}
};


function createTree(container, obj) {
	container.append(createElementTree(obj));
}

function createElementTree(obj) {

	let ulTree = document.createElement('ul');

	for (let key in obj) {
		let li = document.createElement('li');
		li.innerHTML = key;

		let nextLi = createElementTree(obj[key]);
		if (nextLi) li.append(nextLi);

		ulTree.append(li);


	}
	return ulTree;
}

createTree(document.getElementById('container'), data);




/*

const container = document.querySelector('.container');

function createTree(container, data) {
	let ul = document.createElement('ul');
	container.append(ul);


	for (let key in data) {
		let li = document.createElement('li')
		li.innerHTML = key;

		ul.append(li);

		if (Object.keys(data[key]).length) {
			createTree(li, data[key])

		}
	}
}

createTree(container, data);
*/






// 8.Создайте цветные часы как в примере ниже:

function runTimer(){
  
  let hour = document.getElementById('hour');
  let min = document.getElementById('min');
  let sec = document.getElementById('sec');


  let date = new Date();
  let hours = date.getHours();
  hour.innerHTML = hours;

  let minutes = date.getMinutes();
  min.innerHTML = minutes;

  let seconds = date.getSeconds();
  sec.innerHTML = seconds;

}
let timer;

function clockStart() { 
  timer = setInterval(runTimer, 1000);
  runTimer(); 
}

function clockStop() {
  clearTimeout(timer);
 
}



// 9. Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');



//10.Напишите код для сортировки по столбцу "name".

let trList = document.querySelectorAll('tr'); 
let table = document.querySelector('table');


let ArrayFromTrList = Array.from(trList);
let thElem = ArrayFromTrList.shift();


ArrayFromTrList.sort((a, b) => {
	if (a.children[0].innerHTML > b.children[0].innerHTML) return -1; 
	if (a.children[0].innerHTML == b.children[0].innerHTML) return 0; 
	if (a.children[0].innerHTML < b.children[0].innerHTML) return 1;
	
});



ArrayFromTrList.forEach(function (item) {
	thElem.after(item);
});


// 7.Напишите функцию createCalendar(elem, year, month).Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

//Календарь должен быть таблицей, где неделя – это < tr >, а день – это < td >.У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

//createCalendar(cal, 2012, 9)


function createCalendar(  year, month){

	const lastDayOfTheMonth = new Date(year, month, 0 );
	const day = lastDayOfTheMonth.getDate();
	const dayArray =[];
	for (let d = 1; d <= day; d++){
		dayArray.push(d);

	}

	const firstDayOfTheMonth = new Date (year, month-1);

	

	function getLocalDay(firstDayOfTheMonth) {

		const day = firstDayOfTheMonth.getDay();

		if (day == 0) { 
			day = 7;
		}

		return day;
	}

	const weekDay = getLocalDay(firstDayOfTheMonth); 
	const emptyTd =  weekDay -1 ;

	const weekDayLAst = getLocalDay(lastDayOfTheMonth);
	const emptyTdAtTheEnd = 7 - weekDayLAst;

	const table = document.createElement('table');
document.body.append(table);

let tr = document.createElement('tr');
table.append(tr);

let week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
function getListContent() {
	let fragment = new DocumentFragment();
	

	for (let i = 0; i < week.length; i++) {
		let th = document.createElement('th');
		
		th.append(week[i]);
		fragment.append(th);
	}

	return fragment;
}

tr.append(getListContent()); 

	let trTd;

	trTd = document.createElement('tr');
	table.append(trTd);

	for (let i = 0; i < emptyTd; i++) {
		let tdEmpty = document.createElement('td');

		trTd.prepend(tdEmpty);
	}


	let counter = emptyTd;

	for (let i = 1 ; i <= dayArray.length ; i++) {
		
		if (counter == 0) {
			trTd = document.createElement('tr');
			table.append(trTd);
			
		} 
		
		let td = document.createElement('td');
		td.append(i);
		trTd.append(td);

		counter++;

		if (counter == 7) {
			counter = 0;
		}
	}

	for (let i = 0; i < emptyTdAtTheEnd; i++) {
		let tdEmpty = document.createElement('td');

		tdEmpty.append();
		trTd.append(tdEmpty);
	}
	

}
createCalendar(2012, 11);

