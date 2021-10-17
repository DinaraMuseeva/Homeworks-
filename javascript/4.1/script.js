"use strict"
/*
// 1.Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта

//let user ={};
 let user = new Object;

user.name = "John";
user.surname = "Smith";

user.name = "Pete";
delete user.name;

*/

/* 
// 2.Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

let schedule = {};
schedule["8:30"] = "get up";

// function isEmpty() {
// 	if (["8:30"] in schedule ) {
// 		alert (true);
// 	} else {
// 		alert (false);
// 	}
// }                   тут проверяется только на наличие одного определенного свойства 

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}
alert(isEmpty(schedule));

*/


// 3.Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
	
}
	

let sum = 0;
for (let key in salaries) {
  sum = sum + salaries[key];
}

//alert(sum);


// 4.Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
const menu = {
	width: 200,
	height: 300,
	title: "My menu",

};

function multiplyNumeric(menu) {
	for (let key in menu) {
		if (typeof menu[key] === 'number') {
			(menu[key] *= 2);
		}
	}
}