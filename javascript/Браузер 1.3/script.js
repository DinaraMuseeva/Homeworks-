"use strict"

// <Браузер 1.3 
document.body.firstElementChild //div
document.body.lastElementChild // выдает skript

document.body.children[0]  //div 
document.body.children[1] //ul

document.body.childNodes[1]  //div 
document.body.childNodes[3]  //ul

document.body.childNodes[3].lastElementChild;  // li "Пит"
document.body.children[1].lastElementChild; // li "Пит"



//Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
//Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

let table = document.body.firstElementChild;

 for (let i = 0; i < table.rows.length; i++) {
	let row = table.rows[i];
	row.cells[i].style.backgroundColor = 'red';
}

