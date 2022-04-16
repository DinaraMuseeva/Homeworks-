"use strict"
/*
//Найдите координаты точек относительно окна браузера

let coordinates = field.getBoundingClientRect();

// верхний левый, внешний угол (это просто).
let btnLeftTop = [coordinates.left, coordinates.top];

// нижний правый, внешний угол (тоже просто).
let btnRightBottom = [coordinates.right, coordinates.bottom];


// верхний левый, внутренний угол (чуть сложнее).
let btnInnerTopLeft = [coordinates.left + field.clientTop, coordinates.top + field.clientLeft ];

// нижний правый, внутренний угол (есть несколько способов, выберите один).
let btnInnerRightBottom =[ coordinates.right -field.clientTop,  coordinates.bottom - field.clientLeft ];

 let coords = document.getElementById("coords");

 document.onclick = function(e) { 
  coords.innerHTML = e.clientX + ':' + e.clientY;
 };
 coords2.innerHTML = `${btnLeftTop}, ${btnRightBottom},  ${btnInnerTopLeft},  ${btnInnerRightBottom}`

 */



//Покажите заметку рядом с элементом

function positionAt(anchor, position, elem) {
	let coords = anchor.getBoundingClientRect();
	console.log(coords);
	elem.style.position = "absolute"

	if (position === "top") {
		elem.style.left = coords.left + "px";
		elem.style.top = coords.top - elem.offsetHeight + "px";
	}

	if (position === "bottom") {
		elem.style.left = coords.left + "px";
		elem.style.top = coords.bottom + "px";
	}

	if (position === "right") {
		elem.style.left = coords.right + "px";
		elem.style.top = coords.top + "px";
	}
	if (position === "top-in") {
		elem.style.left = coords.left + "px";
		elem.style.top = coords.top + "px";
	}
	if (position === "right-in") {
		elem.style.left = coords.left + "px";
		elem.style.top = coords.bottom - elem.offsetHeight + "px";
	}

	if (position === "bottom-in") {
		elem.style.left = coords.right - elem.offsetWidth + "px";
		elem.style.top = coords.top + "px";
	}

}


// * Показывает заметку с заданным содержимым на заданной позиции
// * относительно элемента anchor.

function showNote(anchor, position, html) {
	let note = document.createElement('div');
	console.log(note);
	note.className = "note";
	note.innerHTML = html;
	document.body.append(note);

	positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "bottom-in", "note right-out");
showNote(blockquote, "right-in", "note bottom-in");


