"use strict"

//Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
]; 

function unique(arr) {
	let set = new Set(arr)
	return Array.from(set)
}

unique(values)


//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
	let map = new Map();

	for (let word of arr) {
		
		let sorted = word.toLowerCase().split("").sort().join(""); 
		map.set(sorted, word);
	}

	return Array.from(map.values());
}

aclean(arr)



//Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys())


keys.push("more");