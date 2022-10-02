"use strict"


function Rabbit() { }
Rabbit.prototype = {
	eats: true
};

let rabbitе= new Rabbit();

alert(rabbitе.eats); // true



// ДобавляемЖ

Rabbit.prototype = {};
alert(rabbit.eats); // true, т.к. новое свойство у Rabbit.prototype не влияет на прототип уже существующих объетов 

Rabbit.prototype.eats = false;
alert(rabbit.eats); // false, т.к объкты присваиваются по ссылке;


delete rabbit.eats;
alert(rabbit.eats); // true, Операция delete применяется к свойствам конкретного объекта, на котором она вызвана. Здесь delete rabbit.eats пытается удалить свойство eats из объекта rabbit, но его там нет. Таким образом, просто ничего не произойдёт.

delete Rabbit.prototype.eats;
alert(rabbit.eats); // undefined. Свойство eats удалено из прототипа, оно больше не существует.


//8.2
function Rabbit(name) {
	this.name = name;
	alert(name);
}

let rabbit = new Rabbit("White Rabbit");

let rabbit2 = new rabbit.constructor("Black Rabbit");  // rabbit.name = Black Rabbit


Rabbit.prototype = {}; // Если перезаписать Rabbit.prototype и не создать новый конструктор   rabbit.name  будет undefined


