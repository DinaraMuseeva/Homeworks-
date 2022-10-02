"use strict"

/*
Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.
*/

function makeCounter() {
	

	function counter() {
		return counter.count++;
	};

	counter.count = 0;
	counter.set = value => counter.count = value;

	counter.decrease = () => counter.count--;

	return counter;
	

}

let counter = makeCounter();



//Напишите функцию sum, которая бы работала следующим образом:
//P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.

function sum(a) {

	let currentSum = a;

	function f(b) {
		currentSum += b;
		return f;
	}

	f.toString = function () {
		return currentSum;
	};

	return f;
}

console.log(+sum(1)(2)(3))

