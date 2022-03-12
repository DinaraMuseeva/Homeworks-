"use strict"

//  2.Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
function clear(elem) {
	elem.remove()
}

//clear(elem); // очищает список

//  4.Напишите интерфейс для создания списка.
/*
Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент < li > и добавляйте его к < ul >.
Процесс прерывается, когда пользователь нажимает Esc или вводит пустую строку.
Все элементы должны создаваться динамически.

Если пользователь вводит HTML - теги -– пусть в списке они показываются как обычный текст.

  */
while (true) {
	let ul = document.querySelector('ul');

	let li = document.createElement('li');

	//li.textContent = prompt("Введите данные");

	if (li.textContent == "") break;

	ul.append(li);
}


// 6.Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.



let ul = document.querySelectorAll('li'); //NodeList(16) [li, li, li, li, li, li, li, li, li, li, li, li, li, li, li, li]
for (let li of ul) {

	let count = li.querySelectorAll('li').length;
	if (count == 0) continue;
	li.firstChild.data += ' [' + count + ']';
}


// 9. Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

let li2 = document.createElement('li');
li2.id = "tree";
li2.innerHTML = 2;
let li3 = document.createElement('li');
li2.id = "four";
li3.innerHTML = 3;

//ul.insertBefore(li2, ul.children[1]);

//ul.insertBefore(li3, ul.children[2]);


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

	for (let key of Object.keys(obj)) {
		let ul = document.createElement('ul');
		ul.className = "type";
		ul.innerHTML = key;
		container.append(ul)
	}

}

//createTree(document.getElementById('tree'), data);



// 8.Создайте цветные часы как в примере ниже:



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
//ArrayFromTrList[0].children[0].innerHTML