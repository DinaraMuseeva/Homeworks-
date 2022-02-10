"use strict"
//=======1 задача==============
let user = {
	name: "John",
	years: 30
};
//Напишите деструктурирующее присваивание, которое:

//свойство name присвоит в переменную name.
//свойство years присвоит в переменную age.
//свойство isAdmin присвоит в переменную isAdmin(false, если нет такого свойства)

let { name, years: age, isAdmin = false } = user;


//============2 задача================

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};


function topSalary(salaries) {

	let maxSalary = 0;
	let maxName = null;

	for (let [name, salary] of Object.entries(salaries)) {
		if (maxSalary < salary) {
			maxSalary = salary;
			maxName = name;
	}
}
		return maxName;
}