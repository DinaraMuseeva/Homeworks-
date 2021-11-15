"use strict"

//1.Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

function camelize(str) {
	return str
		.split('-')
		//.map((item, index) => index == 0 ? item : item[0].toUpperCase() + word.slice(1))
		.map((item, index) => {
			if (index == 0) {
				return item;
			} return item[0].toUpperCase() + item.slice(1)
		})
		.join('');

}



//2.Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.Функция должна возвращать новый массив и не изменять исходный.

let arr2 = [5, 3, 8, 1];

function filterRange(arr, a, b) {
	return arr.filter((item) => {
		return item >= a && item <= b
	})
}

let filtered = filterRange(arr2, 1, 4);



//3.Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна изменять принимаемый массив и ничего не возвращать.

let arr3 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {

	for (let i = 0; i < arr.length; i++) {
		let val = arr[i];


		if (val < a || val > b) {
			arr.splice(i, 1);
			i--;
		}
	}

}



//4.Сортировать в порядке по убыванию

let arr4 = [5, 2, 1, -10, 8];

arr4.sort((a, b) => {
	return b - a
})


//5. Скопировать и отсортировать массив. У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arr5 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr5);

function copySorted(arr) {
	return arr
		.slice()
		.sort()
}



//6.Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.Задание состоит из двух частей.

//Во - первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат.Метод должен понимать плюс + и минус -.

//Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.Например, давайте добавим умножение *, деление / и возведение в степень **:

function Calculator() {


	this['+'] = function (a, b) {
		return Number(a) + Number(b);
	}
	this['-'] = function (a, b) {
		return Number(a) - Number(b);
	}

	this.calculator = function (string) {
		const array = string.split(' ');

		const a = array[0];
		const b = array[2];

		const method = array[1];
		return this[method](a, b);

	}
	this.addMethod = function(method, func) {
		this[method] = func;
	}
}

let calc = new Calculator;
calc.calculator("3 + 7")

//7.У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => {
	return item.name
})


//8.У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map((item) => {
	return {
		fullName: `${item.name} ${item.surname}`,
		id: item.id
	}


})



//9.Отсортировать пользователей по возрасту.  Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

arr.sort((a, b) => {
	return a.age - b.age
})




//10. Перемешайте массив. Напишите функцию shuffle(array), которая перемешивает(переупорядочивает случайным образом) элементы массива.
//Многократные прогоны через shuffle могут привести к разным последовательностям элементов.

let arr = [1, 2, 3];

function shuffle(array) {
	array.sort(() => Math.random() - 0.5);
}

function random(min, max) {
	return min + Math.random() * (max - min);
}

function shuffle(array) {
	for (let index = 0; index < array.length; index += 1) {
		const randomIndex = random(0, array.length - 1);


		const a = array[index];

		array[index] = array[randomIndex];
		array[randomIndex] = a;
	}
}


//11.Получить средний возраст.Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
//Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(users) {
	let averageAge = 0;
	users.forEach((item) => {
		averageAge += item.age

	})
	return averageAge / arr.length
}



//12. Оставить уникальные элементы массива. Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

function unique(arr) {
	let result = [];

	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}

	return result;
}



