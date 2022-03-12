"use strict"


//Напишите код, который выведет каждый элемент списка <li>:

//Какой в нём текст (без поддерева) ?
//Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
let test = document.querySelectorAll('li');
for (let li of test) {

	let animal = li.firstChild.data;

	let animal_count = li.querySelectorAll('li').length;
	
	console.log(`${animal}:${animal_count}`);
	
}