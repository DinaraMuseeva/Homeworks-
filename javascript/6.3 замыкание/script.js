"use strict"
//Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.
function sum(a){
	return function sum (b){
		return a + b;
	}
} 
sum(1)(2);

//Фильтрация с помощью функции

let arr8 = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
	return function (item) {
		return item >= a && item <=b;
	}
}
arr8.filter(inBetween(3, 6));

let arr = [1, 2, 3, 4, 5, 6, 7];
function inArray(arr){
	return function (item) {
		return arr.includes(item);
	}
}

arr.filter(inArray([1, 2, 10]));

//Сортировать по полю

let users = [
	{ name: "John", age: 20, surname: "Johnson" },
	{ name: "Pete", age: 18, surname: "Peterson" },
	{ name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort((a, b) => a.age - b.age );

function byField(field){
	return function(a,b){
		return a[field] - b[field];
	}

}

users.sort(byField('age'));


// Армия функций

function makeArmy() {
	let shooters = [];

	let i = 0;
	while (i < 10) {
		let j = i;
		let shooter = function () { 
			
			alert(j); 
		};
		shooters.push(shooter);
		i++;
	}

	return shooters;
}

let army = makeArmy();

army[0](); 
army[5]();