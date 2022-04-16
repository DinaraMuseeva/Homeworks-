"use strict"

//Найти размер прокрутки снизу

const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

//Узнать ширину полосы прокрутки

const scrollWidth = elem.offsetWidth - elem.clientWidth;

//Поместите мяч в центр поля
const centerY = field.clientWidth / 2;
const centerX = field.clientHeight / 2;

const centerBallY = ball.clientWidth / 2;
const centerBallX = ball.clientHeight / 2;

ball.style.left = centerY - centerBallY + 'px';
ball.style.top = centerX - centerBallX + 'px'