"use strict"

//Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.

function f() {
	alert("Hello!");
}

Function.prototype.defer = function(ms) {
	setTimeout (this, ms);
};

f.defer(1000); // выведет "Hello!" через 1 секунду




//Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

