"use strict"








// 8.Создайте цветные часы как в примере ниже:

function runTimer(){
  
  let hour = document.getElementById('hour');
  let min = document.getElementById('min');
  let sec = document.getElementById('sec');


  let date = new Date();
  let hours = date.getHours();
  hour.innerHTML = hours;

  let minutes = date.getMinutes();
  min.innerHTML = minutes;

  let seconds = date.getSeconds();
  sec.innerHTML = seconds;

}
let timer;

function clockStart() { 
  timer = setInterval(runTimer, 1000);
  runTimer(); 
}

function clockStop() {
  clearTimeout(timer);
 
}



// 9. Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');



//10.Напишите код для сортировки по столбцу "name".

let trList = document.querySelectorAll('tr'); 
let table = document.querySelector('table');


let ArrayFromTrList = Array.from(trList);
let thElem = ArrayFromTrList.shift();


ArrayFromTrList.sort((a, b) => {
	if (a.children[0].innerHTML > b.children[0].innerHTML) return -1; 
	if (a.children[0].innerHTML == b.children[0].innerHTML) return 0; 
	if (a.children[0].innerHTML < b.children[0].innerHTML) return 1;
	
});



ArrayFromTrList.forEach(function (item) {
	thElem.after(item);
});



