"use strict"
//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

//С использованием цикла.
function sumTo(n){
	let sum = 0;
	for (let i = 1; i <=n; i++) {
		sum += i;

	}
	return sum;
}

//Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

function sumTo(n){
	if (n == 1){
		return n;
	} else {
		return n + sumTo(n-1)
	}
	}
	
//С использованием формулы арифметической прогрессии.

function sumTo(n) {
	return n * (n + 1) / 2;
}


//написать функцию factorial(n), которая возвращает n!, используя рекурсию.

function factorial(n) {
	if (n==1) return 1;
	let fac = 1; 
	for (let i = 1; i <= n; i++) {
		fac = i * factorial(n - 1);

	}
	return fac;
}


//Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

function fibonacci(n){
	if (n == 1 || n == 0) return 1;
	
	return fibonacci(n - 1) + fibonacci(n - 2);
}


//Напишите функцию printList(list), которая выводит элементы списка по одному.

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

function printList(list) {

	alert(list.value); 

	if (list.next) {
		printList(list.next); 
	}

}

printList(list);

// через цикл
function printList(list) {
	let tmp = list;

	while (tmp) {
		alert(tmp.value);
		tmp = tmp.next;
	}

}

printList(list)


//Вывод односвязного списка в обратном порядке
function printReverseList(list) {

	if (list.next) {
	  printReverseList(list.next);
	}
  
	alert(list.value);
  }

// через цикл
  function printReverseList(list) {
	let arr = [];
	let tmp = list;
  
	while (tmp) {
	  arr.push(tmp.value);
	  tmp = tmp.next;
	}
  
	for (let i = arr.length - 1; i >= 0; i--) {
	  alert( arr[i] );
	}
  }