"use strict"

let n = prompt('n?');
let m = prompt('m?');
let k = prompt('k?');

	// вывести true, если n и m равны, иначе false
if ( n == m){
	alert (true);
}else {
	alert (false);
}

	// вывести true, если n > m, иначе false

if (n > m) {
	alert(true);
} else {
	alert(false);
}
	// вывести true, если m > n, иначе false
if (m > n) {
	alert(true);
} else {
	alert(false);
}

	// вывести true, если m > n > k, иначе false
if (m > n && n > k) {
	alert(true);
} else {
	alert(false);
}

	//вывести true, если m > n < k, иначе false

if (m > n && n < k) {
	alert(true);
} else {
	alert(false);
}

	// вывести true, если m, n, k четные, иначе false

if ((k % 2 == 0) && (m % 2 == 0) && (n % 2 == 0)) {
	alert(true);
} else {
	alert(false);
}

	//вывести true, если m и n равны, и n < k, иначе false

if (m === n && n < k) {
	alert(true);
} else {
	alert(false);
}

	//вывести true, если m + n равны k, иначе false

if (+m + +n === +k) {
	alert(true);
} else {
	alert(false);
}

	//вывести true, если m + k < n, иначе false

if ((m + k) < n) {
	alert(true);
} else {
	alert(false);
}