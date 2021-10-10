"use strict"
// вывести числа от n до m у которых остаток от деления на k равен 0

// let n = prompt('n?');
// let m = prompt('m?');
// let k = prompt ('k?');


function ModOfK(m, n, k) {
	for (; n < m; n++) {
		if (n % k == 1)continue;
		alert(n);
	}
}
//ModOfK(m, n, k)

function ModOfK(m, n, k) {
	do{ 
		if( n % k == 0)
		alert (n);
		n++
	}while (n < m);
}
//ModOfK(m, n, k)



function ModOfK(m, n, k) {
	while (n < m) {
		if (n % 2 == 0) 
		alert(n);
		n++
	}
}
//ModOfK(m, n, k)
