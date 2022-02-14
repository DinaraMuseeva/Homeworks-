"use strict"
// prototype - это скрытое свойство объектов, которое либо равно null, либо ссылается на другой объект, который является прототипом для этого объекта (родительсткий объект от которого он наследует методы и свойства)

//_proto_  - является производным от свойства prototype конструктора и обеспечивает в JavaScript связь между экземпляром объекта и его прототипом; является геттером/сеттером для [[Prototype]] (таким образом делая его изменяемым).


//добавьте метод 'capitalize' для всех строк, пример использования:
String.prototype.capitalize = function(){
	alert(this);
};
'привет'.capitalize() // 'Привет'


//необходимо реализовать класс калькулятора, калькулятор должен поддерживать операции для +,-,/,*: 

class Calculator {
	value = 0; 

	setValue(value) {
		this.value = value;
	}
	constructor() {

	}

	get currentResult(){
		return this.value;
	}
	set currentResult(val){
		throw new Error ("Нельзя присваивать")
	}
	

	suma(...args) {
		
		for (let arg of args) {
			this.value += arg;
		}
		return this.value;;
	}

	multiply(...args) {
		for (let arg of args) this.value = this.value * arg;
		return this.value;
	}

	substr(...args) {
		
		for (let arg of args) this.value = this.value - arg;
		return this.value;
	}

	divide(...args) {
		for (let arg of args) this.value = this.value / arg;
		return this.value;
	}

	clear() {
		this.value = 0;

	}

	addMethod(name, func) {
		return this[name] = func;

	}
	toString() {
		return this.value.toString();
	}

	valueOf(){
		return this.value;
	}


}



class EngineeringCalculator extends Calculator {
	pi = Math.PI;

	static sin(x) {
		return Math.sin(x);  
	}

	cos() {
		return Math.cos(this.currentResult)
	}

	tan() {
		return Math.tan(this.currentResult)
	}

}
const calc1 = new EngineeringCalculator();

calc1.multiply(3, 2)
calc1.setValue(3);
calc1.sin() + calc1.pi // ~3.2827126616
calc1.clear();

EngineeringCalculator.sin(3)




//задание от меня - реализовать собственные методы массивов у array, например:

// === myReverse===//
Array.prototype.myReverse = function () {
	
	let arrReverse = [];
	for (let i of this) {
		arrReverse.unshift(i);
	} return arrReverse;
}
[5, 3, 2].myReverse() 

//========myFind======/
Array.prototype.myFind = function(item){
	for (let i = 0; i < this.length; i++) {
		if (item(this[i])) {
			alert(this[i])
		}
	}
};

[1,2,3,4].myFind((item)=>{
	return(item === 3)
});

// ====myForEach======/
Array.prototype.myForEach = function (func) {
	for (let i = 0; i < this.length; i++){
		alert (func(this[i]));
	}
}

['a', 'b', 'c'].myForEach((func) => {
	return(func);
});


//======myFilter======/
Array.prototype.myFilter = function (func) {
	let arrFilter = [];
	for (let i = 0; i < this.length; i++) {
		if (func(this[i])) {
			arrFilter.push(this[i]);
		}
	} return arrFilter;
};

[1, 2, 44, 77, 54, 8, 11, 90, 4].myFilter((func)=>{
	return func % 2 === 0;
});



// ======myMap====/
 Array.prototype.myMap = function(func){
	 let arrMap =[];
	 for (let i = 0; i < this.length; i++){
		 if(func(this[i])){
			 arrMap.push( func (this[i]))
		 }
	 }return arrMap;
 
}
 [1, 2, 44, 77, 54 ].myMap((func) => {
	 return func * 2;
 });


//=========Наш прототип счетчика сломан. Можете ли вы определить, что здесь не так?
/*
function Counter() {
  this.value = 0;
}

Counter.prototype.increase() {
  this.value++;
};

Counter.prototype.getValue() {
  return this.value;
};

Counter.prototype.reset() {
  this.value = 0;
};
*/

function Counter() {
	this.value = 0;
}

Counter.prototype.increase = function () {
	this.value++;
};

Counter.prototype.getValue = function () {
	return this.value;
};

Counter.prototype.reset = function () {
	this.value = 0;
};


	//========Создайте функцию, вызываемую reverseдля прототипа String, которая обеспечит следующие функции:

String.prototype.reverse = function () {
	let arrFromStr = this.split('');
	let arrReverse = [];

	for (let i of arrFromStr) {
		arrReverse.unshift(i);
	} return arrReverse.join('');
};


"String".reverse();



//В этом ката ваша задача — создать словарь класса, в который вы можете добавлять слова и их записи. Пример:

class Dictionary {
	constructor() {
		this.col = new Map();
	}


	newEntry(key, value) {
		this.col.set (key, value);
	}

	look(key) {
		if( this.col.has(key)){
			return this.col.get(key);
		} else{
			return `Can't find entry for ${key}`;
		}
	
	}};

let d = new Dictionary();

d.newEntry("Apple", "A fruit that grows on trees");
d.newEntry('Soccer', 'A sport');
d.look("Apple")

//Ruby и Javascript позволяют повторно открывать классы, чтобы вы могли добавлять новые функции к существующим классам и объектам.

//Чтобы продемонстрировать это, вам нужно будет добавить новый метод myNewMethodJS в Stringкласс, который просто вызывает upcaseмет од(toUpperCase()в Javascript), чтобы:

String.prototype.myNewMethod = function () {
	return this.toUpperCase();
};

"abc".myNewMethod(); ///ABC




//Что-то не так с нашим классом воина. Метод удара работает некорректно. Ниже показан пример использования этого кода:

var Warrior = function (name) {

	this.name = name;
	this.health = 100;
}


Warrior.prototype.strike = function (enemy, swings) {

	enemy.health = Math.max(0, enemy.health - (swings * 10));
}

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70





//Включите арифметические операции над массивами, где значение массива определяется суммой его элементов. PS: из-за внутренней неопределенности пустых массивов в этом ката пустой массив рассматривается как 0.
//Примеры:
 [1,2,3] + 4 // = 10
[1, 1, 1] - 3// = 0
['a', 'b'] + 'c'// = 'abc'

Array.prototype.sum = function () {
	var s = 0;
	for (i = 0; i < this.length; i++) {
		s += Number(this[i])
	}
	return s
}

function MyNumberType(n) {
	this.number = n;
}

MyNumberType.prototype.valueOf = function () {
	return this.number;
};