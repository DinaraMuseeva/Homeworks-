"use strict"

const array =[];
let  num;

do {num = prompt ("Введите число");
	if (isNaN(num)) {
		array.push(" Чел, это не число!");
	} else {
		array.push(num);
	}
} 
while (num); 

for (let i = 0; i < array.length; i++){
alert(array[i]);
} 