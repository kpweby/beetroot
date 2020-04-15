"use strict";


alert('Task-1')
const name = prompt("What is your name?");
alert(`Hi, ${name}`);

alert('Task-2')
const YEAR = 2020;
const birthDate = prompt("What is the year of your birth?");
alert("Your age:" + (YEAR - birthDate));

// const birthDate1 = prompt("What is the year of your birth?");
// const YEAR1 = 2020;
// const age = YEAR1 - birthDate1;
// alert(`Your age ${age}`);

alert('Task-3')
const length = prompt("Side length of a square");
alert("Square = " + (length * 4))

// const length1 = prompt("Side length of a square");
// const square1 = length1 * 4
// alert(`Asd ${square1}`)

alert('Task-4')
const radius = prompt('What is your circle radius?');
const PI = 3.1415;
alert("S = " + PI * Math.pow(radius, 2));

alert('Task-5')
const km = prompt("What is the distance between cities (km)?");
const hour = prompt("How much time are you willing to spend (hours)?");
const speed = km / hour
alert(`You need to move at a speed of ${speed} km/hour in order to be on time`);


alert('Task-6')
const dollar = prompt("How much $ you want to exchange?");
const EURO = 0.91
alert("You'll get " + dollar * EURO + " EURO");

alert('Task-7')
const gb = prompt("What is the amount of flash drive in GB?");
alert((gb * 1024 / 820).toFixed() + "files - 820 MB files fit on a USB flash drive");

alert('Task-8')
const money = prompt("How much money do you have?");
const chocolatePrice = prompt("What is the price for one chocolate bar?");
const quantity = Math.floor(money / chocolatePrice)
const costChocolate = Math.floor(quantity * chocolatePrice)
const surrender = Math.floor(money - costChocolate)
alert("You can buy " + quantity + " chokolodki and " + surrender.toFixed(2) + " dollars will remain")

alert('Task-9')
const NUM = prompt("Any 3 numbers!");
alert(`${NUM.split("").reverse().join("")} your number`);

alert('Task-10')
const deposit = prompt("Deposit amount");
const depositPeriod = prompt("For what period (month)?");
const RATE = 0.05;
const MONTHS = 12;
alert(`${deposit * RATE / MONTHS * depositPeriod + deposit} you will receive at the end`)






