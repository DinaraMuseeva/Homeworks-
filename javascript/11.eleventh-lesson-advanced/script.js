"use strict"
let string1 = "agg";
let string2 =" xda";


let string1 = "aba";
let string2 = "xxx";

let str1 = "abcgo";
let str2 = "xhdll";


function compare(str1, str2) {
	if (str1.length !== str2.length) return false;

	const obj = {};

	for (let i = 0; i < str1.length; i += 1) {
		const key = str1[i];
		const value = str2[i];

		if (key in obj)  {
			if (value in obj) {
				
			}
			if (obj[key] !== value) {
				return false;
			}
		}else {
			obj[key] = value;
		}
	}

	return true;
}
