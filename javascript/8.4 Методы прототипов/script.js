"use strict"

//Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой. Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.

let dictionary = Object.create(null, {
	toString: {
		value() {
			return Object.keys(this).join();
		}
	}
})




dictionary.apple = "Apple";
dictionary.proto = "test";

for (let key in dictionary) {
	alert(key); // "apple", затем "proto"
}


alert(dictionary); // "apple,proto"