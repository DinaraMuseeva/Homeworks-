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
	currentResult = 0; // если не задавать изначально setValue(value), то с методами *,/,-  работать не будет (Нужно ли устанавливать 0 изначально? ) 

	setValue(value) {
		this.currentResult = value;
	}

	getValue() {
		return this.currentResult;
	}

	constructor() {
		this.value;
		this.currentResult;
		this.name;
	}

	suma(...args) {
		this.currentResult;
		for (let arg of args) this.currentResult += arg;
		return this.currentResult;;
	}

	multiply(...args) {
		this.currentResult;
		for (let arg of args) this.currentResult = this.currentResult * arg;
		return this.currentResult;
	}

	substr(...args) {
		this.currentResult
		for (let arg of args) this.currentResult = this.currentResult - arg;
		return this.currentResult
	}

	divide(...args) {
		this.currentResult
		for (let arg of args) this.currentResult = this.currentResult / arg;
		return this.currentResult
	}

	clear() {
		this.currentResult = 0;

	}

	addMethod(name, func) {
		return this[name] = func;

	}
	toString() {
		alert(this.currentResult);
	}


}

// сделайте то же самое и для приведения к числу  - не сделала

const calc = new Calculator();
calc.setValue(2);
calc.suma(3, 2)
calc.currentResult;
calc.clear()
calc.addMethod('max', (a, b) => a > b ? a : b)
calc.max(1, 2)
alert(calc);  // выводит во втором окне undefained (почему?)


class EngineeringCalculator extends Calculator {
	pi = Math.PI;

	static sin(x) {
		return Math.sin(x);  // но в этом случае уже не работает с текущим значением, можно ли сделать как то по другому?
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

//Ruby и Javascript позволяют повторно открывать классы, чтобы вы могли добавлять новые функции к существующим классам и объектам.

//Чтобы продемонстрировать это, вам нужно будет добавить новый метод myNewMethodJS в Stringкласс, который просто вызывает upcaseмет од(toUpperCase()в Javascript), чтобы:

String.prototype.myNewMethod = function () {
	return this.toUpperCase();
};

"abc".myNewMethod(); ///ABC



//В этом ката ваша задача — создать словарь класса, в который вы можете добавлять слова и их записи. Пример:

class Dictionary {
	constructor() {
		// your code
	}

	newEntry(key, value) {
		// your code
	}

	look(key) {
		// your code
	}};

let d = new Dictionary();

d.newEntry("Apple", "A fruit that grows on trees");


//Что-то не так с нашим классом воина. Метод удара работает некорректно. Ниже показан пример использования этого кода:

var Warrior = function (name) {
	this.name = name;
	this.health = 100;
}


Warrior.strike = function (enemy, swings) {
	enemy.health = Math.max(0, enemy.health - (swings * 10));
}

var ninja = new Warrior('Ninja');
var samurai = new Warrior('Samurai');

samurai.strike(ninja, 3);
// ninja.health should == 70

