"use strict"


const  user = {
name: "Динара",
surname: "Мусеева",
birthday: "1996-01-19",
email: "museeva@bk.ru",

	userDog: {
		breed: "French Bulldog",
		furColor: "Black",
		character: "noisy",
		dogsBirthday: "2003-09-09",

	},

	sayFullName() {
		alert(`${this.name} ${this.surname}`);
	},

	sayInformationAboutTheDog() {
		alert(`Порода: ${this.userDog.breed} ,
Цвет шерстки: ${this.userDog.furColor},
Характер: ${this.userDog.character},
Дата рождения : ${this.userDog.dogsBirthday}`);
	},

	changeDogsBreed(breed) {
		this.userDog.breed = breed;
	
	},


}
//user.sayFullName(),user.sayInformationAboutTheDog(),user.changeDogsBreed();


/*

//КЛОНИРОВАНИЕ

let newUser = {};  // Неглубокое клонирование 

	for (let key in user){
		newUser[key] = user [key];
	}

let newUser = Object.assign({}, user); // Неглубокое клонирование 


let newUser = JSON.parse(JSON.stringify(user)); // не копируются функции в обьекте, глубокое клонирование 


let newUser = _.cloneDeep (user); 
*/

/*

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


function makeDog(breed, furColor, character, dogsBirthday) {
	return {
		breed,
		furColor,
		character,
		dogsBirthday,
	}
};
const newDog = makeDog('Poodle', 'white', 'friendly', '2009-12-23');

newUser.pet = newDog;

*/


// Говорить, сколько дней осталось до дня рождения пользователя ***





user.getDayForBirthday = function () {
	const today = new Date();
	const birthday = new Date(this.birthday);

	const currentMonth = today.getMonth();
	const birthdayMonth = birthday.getMonth();
	const currentDay = today.getDay();
	const birthdayDay = birthday.getDay();

	if (currentMonth === birthdayMonth) {
		if (currentDay === birthdayDay) {
			return 0;
		}
	}


	let birthdayThisYear = setYearToDate(birthday, today.getFullYear());

	function setYearToDate(date, year) {
		const newDate = new Date(+date);
		newDate.setFullYear(year);
		return newDate;
	}

	let result = getDateFromMs(birthdayThisYear, today);

	function getDateFromMs(birthdayThisYear, today) {
		return (birthdayThisYear - today) / (1000 * 60 * 60 * 24);
	}

	if (result > 0) {
		return Math.round(result);
	} else {
		birthdayThisYear = setYearToDate(birthday, (today.getFullYear() + 1));
		result = getDateFromMs(birthdayThisYear, today)
		return Math.round(result);
	}

}
// user.getDayForBirthday()