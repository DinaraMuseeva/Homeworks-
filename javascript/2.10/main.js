 "use strict"

  

  let javaScriptName = prompt ('Какое "официальное" название JavaScript?', " ");
  if (javaScriptName == "ECMAScript") {
     alert('Правильно!');
  } else {
      alert('Не знаете? ECMAScript!');
 }

 

/* 

if ("0") {
     alert( 'Привет' );       (Ноль в ковычках - это строка (не пустая), поэтому это true
   } 

*/

let addNumber = prompt ('Введите число', " ");
if (addNumber > 1) {
   alert(1);
}  else if (addNumber < 1) {
    alert(-1)
   } else {
    alert(0);
}


//  let result;
// (a + b < 4) ? 
//  result = 'Мало' : result = 'Много';

 


let login = prompt('введите свой логин ', '');

let message = (login == 'Сотрудник')? 'Привет':
(login == 'Директор') ?  'Здравствуйте':
 (login == '') ?  'Нет логина':
 '';

alert( message );