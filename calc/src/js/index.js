"use strict";


function say_go() {
    var pname = document.getElementById('price').value.replace(/,/, '.');
    var lname1 = document.getElementById('1').value.replace(/,/, '.');
    var lname2 = document.getElementById('2').value.replace(/,/, '.');
    var lname3 = document.getElementById('3').value.replace(/,/, '.');
    var lname4 = document.getElementById('4').value.replace(/,/, '.');
    var lname5 = document.getElementById('5').value.replace(/,/, '.');
    var comiss = pname * 1.15
    var srValue = (Number(lname1) + Number(lname2) + Number(lname3) + Number(lname4) + Number(lname5)) / 5
    var colorSumm = Number(srValue) - Number(comiss)
    var end = Number(srValue) - 0.01



    var resultElem = document.getElementById('result');
    // resultElem.innerHTML = 'с комкой =  ' + comiss + 'среднее с 5 =  ' + srValue;
    resultElem.innerHTML = Number(end).toFixed(2);
    switch (true) {
        case colorSumm > 0:
            return resultElem.style.backgroundColor = "#3EFF1F";

        case colorSumm < 0:
            return resultElem.style.backgroundColor = "#f00";
        default:

    }
}
document.getElementById('say').addEventListener('click', say_go);
