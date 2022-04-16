"use strict"
// prototype - это скрытое свойство объектов, которое либо равно null, либо ссылается на другой объект, который является прототипом для этого объекта (родительсткий объект от которого он наследует методы и свойства)

//_proto_  - является производным от свойства prototype конструктора и обеспечивает в JavaScript связь между экземпляром объекта и его прототипом; является геттером/сеттером для [[Prototype]] (таким образом делая его изменяемым).


//добавьте метод 'capitalize' для всех строк, пример использования:
String.prototype.capitalize = function(){
	alert(this);
};
//'привет'.capitalize() // 'Привет'


//необходимо реализовать класс калькулятора, калькулятор должен поддерживать операции для +,-,/,*: 

class Calculator {
	value = 0; 

	setValue(value) {
		this.value = value;
	}
	constructor() {

	}

	get currentResult(){
		return this.value;
	}
	set currentResult(val){
		throw new Error ("Нельзя присваивать")
	}
	

	suma(...args) {
		
		for (let arg of args) {
			this.value += arg;
		}
		return this.value;;
	}

	multiply(...args) {
		for (let arg of args) this.value = this.value * arg;
		return this.value;
	}

	substr(...args) {
		
		for (let arg of args) this.value = this.value - arg;
		return this.value;
	}

	divide(...args) {
		for (let arg of args) this.value = this.value / arg;
		return this.value;
	}

	clear() {
		this.value = 0;

	}

	addMethod(name, func) {
		return this[name] = func;

	}
	toString() {
		return this.value.toString();
	}

	valueOf(){
		return this.value;
	}


}



class EngineeringCalculator extends Calculator {
	pi = Math.PI;

	static sin(x) {
		return Math.sin(x);  
	}

	cos() {
		return Math.cos(this.currentResult)
	}

	tan() {
		return Math.tan(this.currentResult)
	}

}
const calc1 = new EngineeringCalculator();






//задание от меня - реализовать собственные методы массивов у array, например:

// === myReverse===//
Array.prototype.myReverse = function () {
	
	let arrReverse = [];
	for (let i of this) {
		arrReverse.unshift(i);
	} return arrReverse;
}
//[5, 3, 2].myReverse() 

//========myFind======/
Array.prototype.myFind = function(func){
	for (let i = 0; i < this.length; i++) {
		if (func(this[i])) {
			return (this[i])
		}
	}
};

// [1,2,3,4].myFind((item)=>{
// 	return(item === 3)
// });

// ====myForEach======/
Array.prototype.myForEach = function (func) {
	for (let i = 0; i < this.length; i++){
		return (func(this[i], i, this));
	}
}

// ['a', 'b', 'c'].myForEach((item) => {
// 	return item;
// });


//======myFilter======/
Array.prototype.myFilter = function (func) {
	let arrFilter = [];
	for (let i = 0; i < this.length; i++) {
		if (func(this[i])) {
			arrFilter.push(this[i]);
		}
	}
	 return arrFilter;
};

// [1, 2, 44, 77, 54, 8, 11, 90, 4].myFilter((item)=>{
// 	return item % 2 === 0;
// });



// ======myMap====/
 Array.prototype.myMap = function(func){
	 let arrMap =[];
	 for (let i = 0; i < this.length; i++){
		 
			 arrMap.push( func (this[i]))
		 }
	 
	 return arrMap;
 
}
//  [1, 2, 44, 77, 54 ].myMap((item) => {
// 	 return item * 2;
//  });


//=========Наш прототип счетчика сломан. Можете ли вы определить, что здесь не так?
/*
function Counter() {
  this.value = 0;
}

Counter.prototype.increase() {
  this.value++;
};

Counter.prototype.getValue() {
  return this.value;
};

Counter.prototype.reset() {
  this.value = 0;
};
*/

function Counter() {
	this.value = 0;
}

Counter.prototype.increase = function () {
	this.value++;
};

Counter.prototype.getValue = function () {
	return this.value;
};

Counter.prototype.reset = function () {
	this.value = 0;
};


	//========Создайте функцию, вызываемую reverseдля прототипа String, которая обеспечит следующие функции:

String.prototype.reverse = function () {
	let arrFromStr = this.split('');
	let arrReverse = [];

	for (let i of arrFromStr) {
		arrReverse.unshift(i);
	} return arrReverse.join('');
};


//"String".reverse();



//В этом ката ваша задача — создать словарь класса, в который вы можете добавлять слова и их записи. 

class Dictionary {
	constructor() {
		this.col = new Map();
	}


	newEntry(key, value) {
		this.col.set (key, value);
	}

	look(key) {
		if( this.col.has(key)){
			return this.col.get(key);
		} else{
			return `Can't find entry for ${key}`;
		}
	
	}};

let d = new Dictionary();

// d.newEntry("Apple", "A fruit that grows on trees");
// d.newEntry('Soccer', 'A sport');
// d.look("Apple")



//Ruby и Javascript позволяют повторно открывать классы, чтобы вы могли добавлять новые функции к существующим классам и объектам.
//Чтобы продемонстрировать это, вам нужно будет добавить новый метод myNewMethodJS в Stringкласс, который просто вызывает upcaseмет од(toUpperCase()в Javascript), чтобы:

String.prototype.myNewMethod = function () {
	return this.toUpperCase();
};

//"abc".myNewMethod(); ///ABC



//Что-то не так с нашим классом воина. Метод удара работает некорректно. Ниже показан пример использования этого кода:

let Warrior = function (name) {
	this.name = name;
	this.health = 100;
}
let ninja = new Warrior('Ninja');
let samurai = new Warrior('Samurai');

Warrior.prototype.strike = function (enemy, swings) {
 	return enemy.health = Math.max(0, enemy.health - (swings * 10));  
}


//samurai.strike(ninja, 3);
// ninja.health should == 70




//Включите арифметические операции над массивами, где значение массива определяется суммой его элементов. PS: из-за внутренней неопределенности пустых массивов в этом ката пустой массив рассматривается как 0.
//Примеры:
 [1,2,3] + 4 // = 10
[1, 1, 1] - 3// = 0
['a', 'b'] + 'c'// = 'abc'


Array.prototype.valueOf = function () {
	let arr = this;
	let sum;

	if (typeof arr[0] == "string") {
		sum = "";
	} else {
		sum = 0;
	}

	for (i = 0; i < arr.length; i++) {

		sum += arr[i]
	}
	return sum;
}



/*Создайте класс HallOfFame(size, players)со listсвойством и addметодом.

listдать список size playersв виде «Имя: балл», отсортированный по баллу в порядке убывания и имени в порядке возрастания в случае одинакового балла.

add( player )Давайте. . . добавить игрока в список.

a playerпредставляет собой массив из двух элементов:[name, score]
если scoreменьше последнего игрока в списке, то игрок не добавляется.
если nameон еще находится в списке, scoreэтот игрок обновляется , если новый счет лучше, чем предыдущий , и другие игроки могут оставаться в списке .
если добавляется новый игрок или изменяется счет, список следует пересортировать
наконец, addметод возвращает сам объект (чтобы разрешить цепочку методов).
HallOfFameконструктор может иметь 2 аргумента: sizeи players.

size(по умолчанию 5) определяет максимальный размер list( listне может принимать больше sizeигроков)
playersесли они предоставлены, их следует добавить в список.
Если нет игроков (или их недостаточно), «пустые слоты» должны возвращать пустые строки.
*/


class HallOfFame {

	constructor(size = 5, players = []) {
		this.size = size;
		this.players = players;
	}

	sortArray(array) {
		array.sort(function (a, b) {
			

			if (a[1] < b[1] && a[0] !== b[0]     
				|| a[1] === b[1] && a[0] > b[0]) {    
				return 1;
			}
			else {
				return -1;
			}

		});

	}


	listPlayers(array) {
		let result = [];
		for (let i = 0; i < this.size; i++) {
			if (array[i] === undefined) {     
				result.push('');    
			}
			else {     
				result.push(array[i].join(': ') );    
			}
		}
		return result;
	}

	filterPlayer() {
		const result = [];
		for (let i = 0; i < this.players.length; i++) {
			for (let j = i + 1; j < this.players.length; j++) {
				
				if (this.players[j][0] === this.players[i][0]) {
					if (this.players[i][1] < this.players[j][1]) {
						this.players.splice(i, 1);
					}
					else {
						this.players.splice(j, 1);
					}
					result.push(this.players);
				}
			}
		}
		return result;
	}

	
	get list() {
		this.sortArray(this.players); 
		return this.listPlayers(this.players);
	}

	add(player) {
		this.players.push(player); 
		return this;  
	}
}

var top3 = new HallOfFame();
console.log(top3);

/*В шифре с ключевыми словами повторяющиеся буквы в ключевом слове удаляются, а алфавит перестраивается таким образом, что буквы в ключевом слове появляются первыми, а затем остальные буквы в алфавите в их обычном порядке.

Например, для латинского алфавита в верхнем регистре с ключевым словом "KEYWORD":

A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z

становится:

K|E|Y|W|O|R|D|A|B|C|F|G|H|I|J|L|M|N|P|Q|S|T|U|V|X|Z

так что:

cipher.encode('ABCHIJ') == 'KEYABC'
cipher.decode('KEYABC') == 'ABCHIJ'
Все буквы в ключевом слове также будут в алфавите. Для целей этого ката следует использовать только первое вхождение буквы в ключевом слове. Любые символы, не предусмотренные в алфавите, должны быть оставлены на месте при кодировании или декодировании.
*/



class KeywordCipher {
	constructor(keyword) {
		this.alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
		this.cyphAlphabet = [];
		this.keyword = keyword;
	}

	initCypher() {
		let alphabet = [...this.alphabet];
		for (let char of this.keyword) {
			alphabet.splice(alphabet.indexOf(char), 1)
		}
		this.cyphAlphabet = alphabet;
		const res = this.keyword.split('').concat(this.cyphAlphabet);
		this.cyphAlphabet = res;
	}

	decode(word) {
		return this.changeWord(this.alphabet, this.cyphAlphabet, word);
	}

	encode(word) {
		return this.changeWord(this.cyphAlphabet, this.alphabet, word);
	}

	changeWord(cyphAlphabet, alphabet, word) {
		const w = [];
		for (let i = 0; i < word.length; i++) {
			const index = alphabet.indexOf(word[i]);
			const letter = cyphAlphabet[index];

			w.push(letter);

		}

		return w.join('');
	}
}
// const cypher = new Cypher('keyword');
// cypher.initCypher();

// console.log(cypher.encode('abchij'))
// console.log(cypher.decode('keyabc')

function KeywordCipher(abc, key) {
	this.alphabet = Array.from(abc);
	this.ciphAlphabet = [];
	//this.keyword = keyword;



	this.encode = function (str) {
		let alphabet = [...this.alphabet];
		for (let char of key) {
			alphabet.splice(alphabet.indexOf(char), 1)
		}
		this.ciphAlphabet = alphabet;
		const res = key.split('').concat(this.ciphAlphabet);
		this.ciphAlphabet = res;


		const w = [];
		for (let i = 0; i < str.length; i++) {
			const index = this.alphabet.indexOf(str[i]);
			const letter = this.ciphAlphabet[index];

			w.push(letter);

		}

		return w.join('');
	}


	this.decode = function (str) {

		let alphabet = [...this.alphabet];
		for (let char of key) {
			alphabet.splice(alphabet.indexOf(char), 1)
		}
		this.ciphAlphabet = alphabet;
		const res = key.split('').concat(this.ciphAlphabet);
		this.ciphAlphabet = res;

		const w = [];
		for (let i = 0; i < str.length; i++) {
			const index = this.ciphAlphabet.indexOf(str[i]);
			const letter = this.alphabet[index];

			w.push(letter);

		}

		return w.join('');
	}


}