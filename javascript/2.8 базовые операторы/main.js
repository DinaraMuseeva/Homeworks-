"use strict"
// let a=1, b=1;
// let c= ++a;   //2
// let d = b++;   //1


// let a=2;
// let x= 1+(a*=2);
// alert (x)   //5

// ""+1+0 //= '10'
// "" - 1 + 0 //=-1
// true + false //=1
// 6 / "3"//=2
// "2" * "3"//=6
// 4 + 5 + "px"//= "9px"
// "$" + 4 + 5//="$45"
// "4" - 2//=2
// "4px" - 2//=NaN



let a = Number( prompt( "Первое число?", 1));
let b = Number(prompt("Второе число?", 2)); // Либо поставить + вместо Number
 
alert  (a + b); // Можно еще так (+a + +b)