"use strict"

//Покажите заметку рядом с элементом

function positionAt(anchor, position, elem) {
	let coords = anchor.getBoundingClientRect();
	console.log(coords);
	elem.style.position = "absolute"

	if (position === "top-out")  {
		elem.style.left = coords.left + "px";
		elem.style.top = coords.top - elem.offsetHeight + "px";
	}

	if (position === "bottom-out") {
		elem.style.left = coords.left + "px";
		elem.style.top = coords.bottom + "px";
	}

	if (position === "right-out") {
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

showNote(blockquote, "top-out", "note above");
showNote(blockquote, "right-out", "note at the right");
showNote(blockquote, "bottom-out", "note below");
showNote(blockquote, "top-in", "note top-in");
showNote(blockquote, "bottom-in", "note right-out");
showNote(blockquote, "right-in", "note bottom-in");


