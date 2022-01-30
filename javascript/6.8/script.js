"use strict"
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.


//Используя setInterval.
function printNumbers(from, to) {
let i = from;
	let timerId = setInterval(function (){
		if (i <= to) {
			alert (i);
		}else {
			clearInterval(timerId);
		}
     i++
	}, 1000);
}

printNumbers(2, 5)
//Используя рекурсивный setTimeout.function printNumbers(from, to) {


function printNumbers(from, to){
	let i = from;
	setTimeout(function next() {
		alert(i);
		if (i < to) {
			setTimeout(next, 1000);
		}
		i++;
	}, 1000);
}

