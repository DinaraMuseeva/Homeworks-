"use strict"
// вывести нечетные числа от 10 до 0

// c While

function getOddNumbersFrom10to0() {
	let i = 10;
	while (i) {
		if (i % 2 == 1);
		alert(i);
		i--
	}
}
//getOddNumbersFrom10to0();


// c do While
function getOddNumbersFrom10to0() {
	let i = 10;
	do {
		if (i % 2 == 0) continue
		alert(i);
		i--
	} while (i);

}
//getOddNumbersFrom10to0();


// c FOR
function getOddNumbersFrom10to0() {
	for (let i = 10; i > 0; i--) { 
		if (i % 2 == 0) continue;
		alert(i); }
}

//getOddNumbersFrom10to0();

