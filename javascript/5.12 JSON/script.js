"use strict"
//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.

const date = new Date(2012, 1, 20, 3, 12);
alert(date);


//Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let date1 = new Date(2012, 0, 3);

function getWeekDay(date) {
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

	return days[date.getDay()];
}
alert(getWeekDay(date1));

//В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date

let date2 = new Date(2021, 10, 18);

function getLocalDay(date) {

	let day = date.getDay();

	if (day == 0) {
		day = 7;
	}

	return day;
}

alert(getWeekDay(date2));


// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.


let date3 = new Date(2015, 0, 2);

function getDateAgo(date, days) {

	date.setDate(date.getDate() - days);
	return date.getDate();

}

alert(getDateAgo(date3, 1)); // 1, (1 Jan 2015)

//Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();

}
getLastDayOfMonth(2012, 1);

//Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
//Например, если сейчас 10: 00, и не было перехода на зимнее / летнее время, то:

function getSecondsToday() {
	let now = new Date();

	// создаём объект с текущими днём/месяцем/годом
	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	let diff = now - today; // разница в миллисекундах
	return Math.round(diff / 1000); // получаем секунды
}

alert(getSecondsToday());


function getSecondsToTomorrow(){
	let now = new Date();

	let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);


let diff = tomorrow - now;
return Math.round(diff / 1000);
}


//Форматирование относительной даты

function formatDate(date) {
	let diff = new Date() - date; // разница в миллисекундах

	if (diff < 1000) { // меньше 1 секунды
		return 'прямо сейчас';
	}

	let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

	if (sec < 60) {
		return sec + ' сек. назад';
	}

	let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
	if (min < 60) {
		return min + ' мин. назад';
	}

	
	let d = date;
	d = [
		`0${d.getDate()} `,
		`0${d.getMonth() + 1} `,
		`0${d.getFullYear()}`,
		`0${d.getHours()}`,
		`0${d.getMinutes()}`
	].map(component => component.slice(-2)); 

	
	return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}