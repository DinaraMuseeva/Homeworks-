"use strict"

// запрашивать числа через prompt, пока пользователь не отправит пустое число или не нажмет "Отмена", затем вывести эти числа`


const array = [];
let num;

do {
	num = prompt("Введите число");
	if (isNaN(num) || num === "" || num === null)  {
		array.push(" Чел, это не число!");
	} else {
		array.push(num);
	}
}
while (num !== "" && num !== null);


function OutPutNum() {
	for (let i = 0; i < array.length; i++) {
		
		alert(array[i]);
	}
}
//OutPutNum()


// запрашивать числа через prompt, пока пользователь не отправит пустое число или не нажмет "Отмена", затем вывести true для четных чисел и false для нечетных чисел

function getTrueOrFalse() {
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 == 0) {
			alert( true);
		} else {
			alert(false);
		}
	}
}
//getTrueOrFalse()


//запрашивать числа через prompt, пока пользователь не отправит пустое число или не нажмет "Отмена", затем выводить сколько разрядов в числе ( 0 < n < 10 - один разряд , 9 < n < 100 - два разряда,  99 < n < 1000 - три разряда, и т.д


function getNumberRank() {
	for (let i = 0; i < array.length; i++) {

		if ((array[i] >= 0) && (array[i] < 10)) {
			alert(1);
		} else if ((array[i] >= 10) && (array[i] <= 99)) {
			alert(2);
		} else if ((array[i] > 99) && (array[i] <= 1000)) {
			alert(3);
		} else if (array[i] === "" || array[i] === null || isNaN(array[i])) {
			alert("Не число")
		} else {
			alert("Оч большое число, не хочу считать разряд")
		}

	}
}
//getNumberRank()

function getNumberRank2() {
	
	for (let i = 0; i < array.length; i++) 
	 {
		const j = num;
		switch (true) {
			case j >= 0 && j < 10 :
				alert(1);
				break;

			case j >= 10 &&j <= 99:
				alert(2);
				break;1

			case j > 99 && j <= 1000:
				alert(3);
				break;
			case j === "" || j === null || isNaN(j):
				alert("Не число")
				break;
			default:
				alert("Оч большое число, не хочу считать разряд")
		}
	}
}

//getNumberRank2()





//запрашивать числа через prompt, и сразу же показывать результат их деления на числа в массиве [1, 2, 3] до тех пор пока пользователь не нажмет "Отмена" или не отправит пустую строку


/*
const array = [1, 2, 3];
let num;

do {
	num = prompt("Введите число");
	if (isNaN(num) || num === "" || num === null) {
		alert(" Чел, это не число!");
	} else {
		for (let i = 1; i <= array.length; i++) {
			alert(num / i)
		}
	}
}
while (num !== "" && num !== null);
*/
