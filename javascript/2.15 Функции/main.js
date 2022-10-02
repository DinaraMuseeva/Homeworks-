"use strict"

/*
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор ||

	function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Родители разрешили?');
	}
}

*/

// Используя оператор ?

function checkAge(age) {
	return (age > 18) ?  true :  confirm('Родители разрешили?');
}
let age = prompt("сколько лет");

if (checkAge(age)) {
	alert('Доступ получен');
} else {
	alert('Доступ закрыт');
}

//Используя оператор ||

function checkAge(age) {
	return age > 18 || confirm('Родители разрешили?');
	
}
let age1 = prompt("сколько лет");

if (checkAge(age1)) {
	alert('Доступ получен');
} else {
	alert('Доступ закрыт');
}

// Напишите функцию min(a, b), которая возвращает меньшее из чисел a и b.

function getMin ( a,b) {
	if (a<b){
		return a;
	} else{
		return b
	}
}
let result = getMin(2, 5);
//alert (result);

// Напишите функцию pow(x, n), которая возвращает x в степени n.Иначе говоря, умножает x на себя n раз и возвращает результат.

let x = prompt("x?");
let n = prompt("n?");

function pow (x,n) {
	if (n > 0){
		return x ** n;
	} 
}

let result2 = pow(x,n);
//alert (result);