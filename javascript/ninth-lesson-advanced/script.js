"use strict"


const  user = {
	name: "Динара",
	surname: " Мусеева",
	birthday: "1996-01-19",
	email: "museeva@bk.ru",

	user_dog: {
		breed: "French Bulldog",
		fur_color: "Black",
		character: "noisy",
		dogs_birthday: "2003-09-09",

	},

	sayFullName() {
		alert(this.name + this.surname);
	},

	sayInformationAboutTheDog() {
		alert(`Порода: ${user.user_dog['breed']} ,
Цвет шерстки: ${user.user_dog['fur_color']},
Характер: ${user.user_dog['character']},
Дата рождения : ${user.user_dog['dogs_birthday']}`);
	},

	changeDogsBreed() {
		user.user_dog.breed = "dachshund";
	},


}
//user.sayFullName(),user.sayInformationAboutTheDog(),user.changeDogsBreed();




//КЛОНИРОВАНИЕ

let newUser = {};  // Неглубокое клонирование 

	for (let key in user){
		newUser[key] = user [key];
	}

let newUser = Object.assign({}, user); // Неглубокое клонирование 


let newUser = JSON.parse(JSON.stringify(user)); // не копируются функции в обьекте, глубокое клонирование 


let newUser = _.cloneDeep (user); 




// Выведите фамилию пользователя тремя способами - через точку, через скобки[] со строкой внутри, и через[] с переменной внутри

user.surname

user['surname']

let key = 'surname';
user[key];




//  Сделать 2 функции, первая - создает пользователя с данными, переданными в функцию(без собаки), вторая - создает объект собаки с данными переданными в функцию, создать пользователя, поместить объект собаки созданный второй функцией в свойство pet у пользователя
// newUser.name = name,
	
	
function makeUser(name, surname, birthday, email) {
	return {
		name,
		surname,
		birthday,
		email,
	}

};

const newUser = makeUser('Boris', 'Borisovih', '1976-09-04', 'boriska@mail.ru');


function makeDog(breed, fur_color, character, dogs_birthday) {
	return {
		breed,
		fur_color,
		character,
		dogs_birthday,
	}
};
const newDog = makeDog('Poodle', 'white', 'friendly', '2009-12-23');

newUser.pet = newDog;




// Говорить, сколько дней осталось до дня рождения пользователя ***
// - получить текущую дату через new Date(), особенности работы с датой расписаны вот тут https://learn.javascript.ru/date
// - через new Date(...) преобразовать дату пользователя в объект даты
// 	- вычесть из текущей даты дату рождения

let now = new Date();
user.birthday = new Date(1996, 0, 19);