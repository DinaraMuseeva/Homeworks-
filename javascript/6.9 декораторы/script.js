"use strict"



// Декоратор-шпион
//Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.Каждый вызов должен сохраняться как массив аргументов.

function work(a, b) {
	alert(a + b); // произвольная функция или метод
}

function spy(func){

function wrapper (...args){
	
	wrapper.calls.push(args);
	return func.apply(this, arguments);
}
	wrapper.calls = [];

	return wrapper;
}



work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
	alert('call:' + args.join()); // "call:1,2", "call:4,5"
}




//Задерживающий декоратор

//Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд.
//Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
//В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.

function f(x) {
	alert(x);
}

function delay(f, ms){
	return function () {
		setTimeout(() => f.apply(this, arguments), ms);
	};
}
// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс



