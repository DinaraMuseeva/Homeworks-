"use strict"
// вывести четные числа от 0 до 10
// c While
function getEvenNumbersFrom0to10() {
	let i = 0;
	while (++i < 10) {
		if (i % 2 == 0) alert(i);
}
}
//getEvenNumbersFrom0to10();



// c do While
function getEvenNumbersFrom0to10() {
	let i = 0;
	do {
		if (i % 2 == 0)
		alert(i); i++
	} while (i < 10);
}
 //getEvenNumbersFrom0to10();


// c FOR
function getEvenNumbersFrom0to10() {
	for (let i = 0; i < 10; i++) { 
		if ( i % 2 == 1)continue;
		alert(i); }
}
 //getEvenNumbersFrom0to10();

//вывести числа от m до n (при условии что m > n)

;