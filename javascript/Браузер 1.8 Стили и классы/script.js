"use strict"
function showNotification({ top = 0, right = 0, className, html }) {

	const div = document.createElement('div');
	div.className = "notification";

	document.body.append(div);
	div.classList.add(className);
	div.innerHTML = html

	div.style.top = top + 'px';
	div.style.right = right + 'px';


	setTimeout(() => div.remove(), 1500);
}


let i = 1;
setInterval(() => {
  showNotification({
	top: 10,
	right: 10,
	html: 'Hello ' + i++,
	className: "welcome"
  });
}, 2000);
 
