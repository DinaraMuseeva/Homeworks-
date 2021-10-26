"use strict"
let calculator = {
	read() {
		this.num1 = +prompt('Введите 1-е число?');
		this.num2 = +prompt('Введите 2-е число?');
	},
	sum(){
		return this.num1 + this.num2;
	},
	mul() {
		return this.num1 * this.num2;
	}

};

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

let ladder = {
	step: 0,
	up() {
		this.step++
		return this;
	},
	down() {
		this.step--
		return this;
	},
	showStep: function () { 
		alert(this.step)
		return this;
	}
};

// ladder.up().up().down().showStep();