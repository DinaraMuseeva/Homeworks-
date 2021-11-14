"use strict"

// Объединить 2 массива: ['a', 'b', 'c'] и[1, 2, 3]

let array1 = ['a', 'b', 'c'];
let array2 = [1, 2, 3];
let arr = array1.concat(array2);

//Добавить в конец массива ['a', 'b', 'c'] буквы 'd', 'e', 'f', (они лежат не в массиве)

array1 = array1.concat('d', 'e', 'f');
//array1.push('d', 'e', 'f');
//array1.splice(3, 0, 'd', 'e', 'f' )


//Добавить в начало массива ['a', 'b', 'c'] буквы 'd', 'e', 'f', (они лежат не в массиве)

array1.unshift('d', 'e', 'f');
//array1.splice(0, 0, 'd', 'e', 'f');


//Превратить массив [1, 2, 3] в [3, 2, 1]

array2.reverse();

//Отсортировать массив [1, 2, 235, 2345356, 3, 2] по возрастанию и по убыванию
const array3 = [1, 2, 235, 2345356, 3, 2];
array3.sort ((a, b) => {
	return a - b;
});

const array4 = [1, 2, 235, 2345356, 3, 2];
array4.sort((a, b) => {
	return b - a;
})

//Дан массив [1, 234, 2345, 234, 234523, 2, 1, 1, 453, 345] необходимо удалить повторяющиеся элементы в массиве
const array5 = [1, 234, 2345, 234, 234523, 2, 1, 1, 453, 345];


let array6 = array5.reduce((result, item) => {
	if (result.includes(item)){
		return result
	}  
	return [...result, item];

}, [])

 let array7 = array5.filter((item, index) =>{
	 return array5.indexOf(item) === index

 });

 //- Дан массив [3, 345, 234, 3452, 2236, 13] необходимо объединить его с массивом [345, 234, 2345, 12, 45, 1, 3] без дублирования элементов

const array8 = [3, 345, 234, 3452, 2236, 13];
const array9 = [345, 234, 2345, 12, 45, 1, 3];


let array10 = array8.concat(array9);

function concateArray(arr) {
	let result = [];

	for (let str of arr) {
		if (!result.includes(str)) {
			result.push(str);
		}
	}

	return result;
}

concateArray(array10);




// Сделать из строки "Не грози южному централу попивая сок у себя в квартале" массив из первых букв т.е. ['Н', 'г', 'ю', 'ц', 'п', 'с', 'у', 'с', 'в', 'к']

const str = "Не грози южному централу попивая сок у себя в квартале";

const arrayFromStr = str.split(" ").map((item) => {
	return item[0]
})

function doArrayFromString (str){
	return str
	.split(" ")
	.map((item) => {
		return item[0]
	})


}




//Дан массив [1, 2345, 'a', 'q', 3, 43, 235, 'a', 'q', 1, 'a'] необходимо вывести самый "популярный" элемент массива


const array11 = [1, 2345, 'a', 'q', 3, 43, 235, 'a', 'q', 1, 'a'];

const counters = {};
array11.forEach((item) => {
	if (counters[item]){
		counters[item] += 1;
	} else {
		counters[item] = 1;
	}
})

let sortedArray = Object.keys(counters).sort((a, b)=>{
	return counters[b] - counters[a]
})
let result = sortedArray[0];


//  Написать свою реализацию методов:
const arr = [1, 2345, 1,'a', 'q', 3];

const result = arr.map( (item, index, array) => {
	return `${item}`
});

const result = arr.reverse();

const result = arr.concat( ["прив", "пок" ]);


const result = arr.filter ((item) => {
	return item > 2
})

const result = arr.find (item => item ==1);

const result = arr.forEach((item)=> {
	alert (item)
})

const result = arr.includes('q')

const result = arr.sort((a,b) => {
	return a- b
})