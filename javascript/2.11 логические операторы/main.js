 "use strict"

/* Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

 «Включительно» означает, что значение переменной age может быть равно 14 или 90.


 if (age >= 14 && age <=90)

*/



/*Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

if (age < 14 || age > 90)  
if ((!age >=14) && (!age <=90) )  (Можно ли каждое сравнение поместить в одтельную скобку?)
*/





let login = prompt ('Кто там?');
if (login === "Админ"){

	let password = prompt ('Пароль?');

	if (password === "Я главный"){
		alert("Здравствуйте!")
	} else if (password == " " || null){
		alert("Отменено");
	}else {
		alert ("Неверный пароль");
		}

} else if (login == " " ||  null){
	alert ("Отменено");
} else {
	alert ("Я вас не знаю");
}