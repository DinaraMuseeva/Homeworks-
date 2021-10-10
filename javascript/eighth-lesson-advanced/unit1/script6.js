"use strict"
//вывести числа от m до n(при условии что m > n)

// let n = prompt('n?');
// let m = prompt('m?');


function isMBiggerThanN(m, n) {
	for (; m > n; m--) {
		alert(m);
	}
}
//isMBiggerThanN(m, n)


function isMBiggerThanN(m,n) {
	do {
		alert(m);
		m--
	} while (m > n);
}
//isMBiggerThanN(m, n)


function isMBiggerThanN(m, n) {
	
	while( m > n){
		alert (m);
		m--;
	}
}
//isMBiggerThanN(m, n)