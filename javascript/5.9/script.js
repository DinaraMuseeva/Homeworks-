"use strict"
//Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function sumSalaries(salaries) {
	let sumSalaries = 0;
	for (let value of Object.values(salaries)) {
		sumSalaries += value;

	}
	return sumSalaries;

}
//Напишите функцию count(obj), которая возвращает количество свойств объекта:
let user = {
	name: 'John',
	age: 30
};

function count(obj) {
	return Object.keys(obj).length;
}