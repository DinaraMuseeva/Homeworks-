"use strict"
// вывести числа от n до m (при условии что n < m)

let n = prompt ('n?');
 let m = prompt('m?');

function  isNLesserThanM(n, m) {
	for (; n < m; n++) { 
		alert(n); 
	 }
}
//isNLesserThanM(n, m);

function isNLesserThanM(n, m) {
	do {
		alert(n);
		n++
	} while (n < m);
}
//isNLesserThanM(n, m)


function isNLesserThanM(n, m) {
	while (n < m) {
		alert(n);
		n++;
	}
}
 //isNLesserThanM(n, m)


