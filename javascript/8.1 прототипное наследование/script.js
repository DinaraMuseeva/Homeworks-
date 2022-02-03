"use strict"

//В приведённом ниже коде создаются и изменяются два объекта.
//Какие значения показываются в процессе выполнения кода ?

let animal = {
	jumps: null
};
let rabbit = {
	__proto__: animal,
	jumps: true
};

alert(rabbit.jumps); //  true 

delete rabbit.jumps;
alert(rabbit.jumps); // null

delete animal.jumps;
alert(rabbit.jumps); // undefinded


//Задача состоит из двух частей.

let head = {
	glasses: 1
};

let table = {
	pen: 3
};

let bed = {
	sheet: 1,
	pillow: 2
};

let pockets = {
	money: 2000
};
//С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся по следующему пути: pockets → bed → table → head. Например, pockets.pen должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;


//У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.

//Когда мы кормим одного хомяка, второй тоже наедается.Почему ? Как это исправить ?

let hamster = {
	stomach: [],

	eat(food) {
		this.stomach.push(food);
	}
};

let speedy = {
	stomach: [],
	__proto__: hamster
};

let lazy = {
	stomach: [],
	__proto__: hamster
};

// Добавили  свой stomach каждому хомяку, либо  методу eat (у hamster) добавить this      
// {this.stomach.push(food);}