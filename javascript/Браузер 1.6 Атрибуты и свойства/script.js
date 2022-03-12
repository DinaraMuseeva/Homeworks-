"use strict"

// <div data-widget-name="menu">Choose the genre</div>
let elem = document.querySelector('[data-widget-name]');
elem.getAttribute('data-widget-name')
elem.dataset.widgetName;



//Сделайте все внешние ссылки оранжевыми, изменяя их свойство style. Ссылка является внешней, если: Её href содержит ://,  Но не начинается с http://internal.com.

let links = document.querySelectorAll("a[href]");

for (let link of links) {
	let attr = link.getAttribute("href");
	if (attr.includes("://") && attr != "http://internal.com/test") {
		link.style.color = "orange";
	}
}