

	
//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
let date1 = new Date(2012, 1, 20, 3, 12);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let date2 = new Date(2012, 0, 3);  // 3 января 2012 года
function getWeekDay(date) {
	
	let week = ["ВС","ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ" ]
	return week[date.getDay()];
	
}
alert( getWeekDay(date2) );

//День недели в европейской нумерации

let date3 = new Date(2012, 0, 3);  // 3 января 2012 года

function  getLocalDay(date){

 if(date.getDay() == 0){
	return 7
 }  return date.getDay()

}
alert( getLocalDay(date3) );

//Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:


let date = new Date(2015, 0, 2);
function getDateAgo(date, days) {
	let today = date.getTime();
	let ms = days * 24 * 3600 * 1000;
	let newDay = today - ms;
	return new Date(newDay);

}
// ===============ИЛИ============//

function getDateAgo(date, days) {
	let dateCopy = new Date(date);
  
	dateCopy.setDate(date.getDate() - days);
	return dateCopy.getDate();
  }


alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)


// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

function  getLastDayOfMonth(year, month) {
let dateSet = new Date(year, month + 1 );
 dateSet.setDate(0)
 return dateSet.getDate();
}

getLastDayOfMonth(2012, 1)

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

function getSecondsToday() {
let dateToday = new Date();
dateToday.setHours(0, 0, 0, 0);
dateToday.getTime();

let  dateTodayNow = Date.now();
return  Math.round((dateTodayNow - dateToday)/1000);

}
getSecondsToday()



// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

function formatDate(date) {
	let diff = new Date() - date;

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
	// отформатировать дату
  // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
  let d = date;
  d = [
    '0' + d.getDate(),
    '0' + (d.getMonth() + 1),
    '' + d.getFullYear(),
    '0' + d.getHours(),
    '0' + d.getMinutes()
  ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

  // соединить компоненты в дату
  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}