
"use strict"


const user = {
	name: "Динара",
	surname: "Мусеева",
	birthday: "1996-10-26",
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
		birthdayThisYear = setYearToDate(birthday, (today.getFullYear()+1));
		result = getDateFromMs(birthdayThisYear, today)
		return Math.round(result);
	}

}
// user.getDayForBirthday()






