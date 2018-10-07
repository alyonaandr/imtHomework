"use strict";

var client = prompt("Enter your name.");
var age = prompt(`Hello, ${client}. Enter your age, please.`);

if( isNaN(age)) {
    console.log(typeof age);
    alert(`${client}! It's not a number! Try again.`);
} else {
    if(age >= 18 && age < 50) {
        alert(`Good, ${client}. You're with us!`);
    } else if (age > 50) {
        alert(`Sorry, ${client}. You do not suit us.`);
    } else {
        alert("Go Home. You're very young");
    };
};



// Calculator
var number1;
var number2;
var operatop;
var result;

var hello = alert("It is a simple calculator. Press OK and count.");

number1 = prompt("Enter first number");
operatop = prompt("Enter operatop, what you want doing with numbers.\n Expl: + or - or * or / ");
number2 = prompt("Enter second number");

if (isNaN(number1) || isNaN(number2)) {
    alert(`one of this is not a number: ${number1} or ${number2}`)
} else {
    switch(true){
        case (operatop === "+"):
            result = +number1 + +number2;
            alert(`Result is: ${result}`);
            break;
        case (operatop === "-"):
            result = +number1 - +number2;
            alert(`Result is: ${result}`);
            break;
        case (operatop === "*"):
            result = +number1 * +number2;
            alert(`Result is: ${result}`);
            break;
        case (operatop === "/"):
            result = +number1 / +number2;
            alert(`Result is: ${result}`);
            break;
        default:
            alert(`This operator is incorrect - ${operatop}. Try again.`);
    }
}