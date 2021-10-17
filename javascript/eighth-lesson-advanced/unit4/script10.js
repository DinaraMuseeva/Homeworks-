"use strict"

// Нужно определить, является ли строка, поданная на вход через prompt, палиндромом.Если да, то вывести через alert слово "ПАЛИНДРОМ", если нет - вывести "НУ ТЫ И НЕУДАЧНИК"

// Палиндром - это слово, которое читается в обе стороны одинаково.Например: "довод", "казак".

// 	Важно: мы можем ходить по строке в цикле так же, как по массиву, обращаясь отдельно к каждому символу по индексу.Пример на прикрепленном фото.


/*
const str = prompt("Введите слово Палиндром");

function checkIsPalindrom(str) {
	for (let i = 0,  j = str.length - 1; i < j; i++, j--) {
      
	    if (str[i] !== str[j]) 
			return "НУ ТЫ И НЕУДАЧНИК";
      }
	   return "ПАЛИНДРОМ";
   }

//console.log(checkIsPalindrom(str));
	*/		

const str = prompt("Введите слово Палиндром");


function checkIsPalindrom(str) {
	let i = 0;
	let j = str.length - 1;
	while (++i < j--);{
		if (str[i] !== str[j])
			return "НУ ТЫ И НЕУДАЧНИК";
	}
	return "ПАЛИНДРОМ";
	
}

console.log(checkIsPalindrom(str));