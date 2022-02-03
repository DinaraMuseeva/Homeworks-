
"use strict"
// 1.Создайте скрипт, который запрашивает ввод двух чисел(используйте prompt) и после показывает их сумму.

/*
let num1 = +prompt('Введите число');
let num2 = +prompt('Введите число');
alert(num1 + num2);

let num1 = parseFloat (prompt('Введите число'));
let num2 = parseFloat (prompt('Введите число'));
alert(num1 + num2);
*/


// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

function readNumber() {
	let value;

	do {
		value = prompt('Введите число');
	}
	while (!isFinite(value));

	if (value === "" || value === null) {
		return `Число: ${null}`;
	} else {
		return `Число: ${+value}`;
	};
}

//alert (readNumber());


//  Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).

function random(min, max) {
	return Math.random() * (max - min) + min;
}

// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно). Любое число из интервала min..max должно появляться с одинаковой вероятностью.


function randomInteger(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
