"use strict"
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок - н - ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// 	Вставьте «Рэп» и «Регги» в начало массива.

let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

styles[Math.floor((styles.length - 1) / 2)] = "Классика";

alert(styles.shift());

styles.unshift('Рэп', 'Регги');


// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// 	P.S.Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
 function sumInput() {


const array = [];
let num;

 do {
 	num = prompt("введите число");
	 if (num === "" || num === null || !isFinite(num)) break;
 	array.push(+num);

} while (true);


	let sum = 0;
	 for ( num of array) {
		sum += num;
	}
	return sum;
}

//  На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// 	Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // для каждого элемента массива
    partialSum += item; // добавляем значение элемента к partialSum
    maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
    if (partialSum < 0) partialSum = 0; // ноль если отрицательное
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11