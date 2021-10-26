"use strict"


function Calculator() {
	
		this.read = function() {
			this.num1 = +prompt('Введите 1-е число?');
			this.num2 = +prompt('Введите 2-е число?');
		},
		
		this.sum = function() {
			return this.num1 + this.num2;
		}

		this. mul = function(){
			return this.num1 * this.num2;
		}
	
}

let calculator = new Calculator();

// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());


function Accumulator(startingValue) {
	this.value = startingValue,

	this.read = function(){
		this.value = +prompt('Введите  число?') + this.value  ;
		
	}

}

let accumulator = new Accumulator(1); 

// accumulator.read(); 
// accumulator.read(); 

// alert(accumulator.value); 