"use strict"

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// берем первый символ под индексом 0 и меняем его на верхний регистр + прибовляем оставшуюся часть слова начиная со второго символа, который находитмя под индексом 1
function ucFirst(str) {
	str = str.charAt(0).toLocaleUpperCase() + str.substr(1)
	return str;
}




// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.  str.toLocaleUpperCase();

function checkSpam(str) {
	str = str.toLocaleUpperCase();
	let strKey1 = 'viagra';
	let strKey2 = 'XXX';

	if (str.includes(strKey1.toLocaleUpperCase()) || str.includes(strKey2.toLocaleUpperCase())) {
		return true;
	} return false;

}

/*
function checkSpam(str) {
 
  str = str.toLocaleLowerCase();
	if(str.includes( 'xxx') || str.includes( 'viagra')) {
	return true;
  }  return false;

}
 здесь работает, если сразу заменить "XXX" на "xxx" в if, но тогда условия задачи меняются 
*/




// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.


function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 1) + '…';
	} return str;

}

function truncate(str, maxlength) {
	if(str.length > maxlength ){
		return str.substr(0, maxlength - 1) + "…";
	} return str
}

// Есть стоимость в виде строки "$120". Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

function extractCurrencyValue(str) {
	let currencyValue = str.slice(1)
	return +currencyValue;
}
