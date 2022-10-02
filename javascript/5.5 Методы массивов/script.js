"use strict"
//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

function camelize (str){
return str
.split('-')
.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
.join('');

}

camelize("background-color") == 'backgroundColor';




// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный

let arr = [5, 3, 8, 1];
function filterRange(arr, a, b){
    let newArr = arr.filter(item => item >= a && item <= b );
    return newArr
}


filterRange(arr, 1, 4);


// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.


let array  = [5, 3, 8, 1, 2];
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
          }
    }
}

filterRangeInPlace(array, 1, 4); // удалены числа вне диапазона 1..4

alert( array ); // [3, 1]



//Сортировать в порядке по убыванию

let arrSort = [5, 2, 1, -10, 8];

arrSort.sort((a,b) => b - a );

alert( arr ); // 8, 5, 2, 1, -10



// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.

let arrAy = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arrAy);

function copySorted (arr){
   return  arr.slice().sort() 
}
alert( sorted ); // CSS, HTML, JavaScript
alert( arrAy );



// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.



let vasya1 = { name: "Вася", age: 25 };
let petya1 = { name: "Петя", age: 30 };
let masha1 = { name: "Маша", age: 28 };

let users1 = [ vasya1, petya1, masha1 ];

let names = users1.map(item => item.name);

alert( names ); // Вася, Петя, Маша




// Трансформировать в объекты

// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.



let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

let users2 = [ vasya2, petya2, masha2 ];

let usersMapped = users2.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) 




// Отсортировать пользователей по возрасту

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.



let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 28 };

let arr4 = [ vasya3, petya3, masha3 ];

function sortByAge(users){
    users.sort ((a, b ) => a.age > b.age ? 1:-1);
    

}
sortByAge(arr4);

// теперь: [vasya, masha, petya]
alert(arr4[0].name); // Вася
alert(arr4[1].name); // Маша
alert(arr4[2].name); // Петя


//Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr5 = [ vasya, petya, masha ];

function getAverageAge(users) {
  
    let result = users.reduce((sum, item) => sum + item.age, 0);
    return result / users.length;
}

alert( getAverageAge(arr5) ); // (25 + 30 + 29) / 3 = 28



// Оставить уникальные элементы массива
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.


function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}

let strings = ["кришна", "кришна", "харе", "харе","харе", "харе", "кришна", "кришна", ":-O"];

alert( unique(strings) ); // кришна, харе, :-O


// Перемешайте массив
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. 

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }  
  
  let arr7 = [1, 2, 3];
  shuffle(arr7);
  alert(arr7);



//   Создайте объект с ключами из массива
//   Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
  
//   Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.


  let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);
  
  function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }