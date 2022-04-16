"use strict"


//Таблицу с id = "age-table".
document.getElementById('age-table');
document.querySelector('table');

//Все элементы label внутри этой таблицы(их три).
document.querySelectorAll("#age-table label");


//Первый td в этой таблице(со словом «Age»).
document.querySelector('td')
document.querySelectorAll("td")[0];
table.getElementByTagName('td')[0];

//Форму form с именем name = "search".
document.querySelector('form');
document.querySelectorAll("form")[0]
document.getElementsByName('search')[0]

//Первый input в этой форме.
document.querySelector('input')
document.querySelectorAll('input')[0]
document.getElementsByTagName('input')[0];


//Последний input в этой форме.
let form = document.getElementsByName('search')[0];
let test = form.querySelectorAll("input");
test[test.length-1]
