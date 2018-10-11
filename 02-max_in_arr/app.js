"use strict";

// 1) сумма чисел от n до n, и только четные
function askFirstNumber(){
    var firstNum = Number(prompt("Enter first number: "));
    if(isNaN(firstNum)) {
        while(isNaN(firstNum)){
            firstNum = Number(prompt("This is not a number. Enter first NUMBER: "));
        }
    }
    return firstNum;
}

function askSecondNumber(){
    var secondNum = Number(prompt("Enter second number: "));
    if(isNaN(secondNum)) {
        while(isNaN(secondNum)){
            secondNum = Number(prompt("This is not a number. Enter second NUMBER: "));
        }
    }
    return secondNum;
}

function calcSumOfNumbers() {
    
    var totalSum = 0;
    var leftNumber = askFirstNumber();
    var rightNumber = askSecondNumber();

    if(rightNumber < leftNumber) {
        alert("Error! Second numder can not be smaller then first number. Try again. ");
        return;
    } else {
        for(var i=leftNumber; i<=rightNumber; i++) {
            if(i%2 === 0){
                totalSum = totalSum + i;
            }
        }
        alert(totalSum);
    }
}

calcSumOfNumbers();


// 2)
var durtyArray = [13,110,12,650,45,6,200,1,78];
var min,
    max;
    min = durtyArray[0];
    max = durtyArray[0];

for(var i=1; i < durtyArray.length; i++){
    if(min > durtyArray[i]) {
        min = durtyArray[i];
    }  
    if(max < durtyArray[i]) {
        max = durtyArray[i];
    }
}
console.log(min, max);