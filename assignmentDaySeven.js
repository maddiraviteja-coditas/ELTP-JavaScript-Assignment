/*

1. If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
Enter your age: 30
You are 5 years older than me.
3. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 
'myAge is less than yourAge'. Try to implement it in to ways.
4. Check, if a number is even or not.
5. Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F
6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Rainy.
December, January or February, the season is Winter.
March, the season is Spring
 April, May, June, July or August, the season is Summer
7. Check if a day is weekend day or a working day. Your script will take day as an input.
8. Write a program which tells the number of days in a month.
9. Write a program to check whether the year is leap year or not.
10. Write a JavaScript ternary expression that checks the following conditions:
If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.
11. What will be the result of the following nested ternary expression:
let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
console.log(result);


*/


// 1. If user is 18 or older , give feedback: 'You are allowed to Marry' but 
// if not 18 console feedback stating to wait for the number of years he needs to turn 18.

let userAge = 15;
let isReadyToMarry = userAge > 18 ? "You are allowed to Marry." : "Wait for "+(18-userAge)+" more years.";
console.log(isReadyToMarry);

// 2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
//          Enter your age: 30
//          You are 5 years older than me.

function compareAges(myAge, yourAge){
    if(myAge > yourAge){
        console.log("I'm elder than you around "+(myAge-yourAge)+" Years.");
    }else{
        console.log("You are elder than me around "+(yourAge-myAge)+" Years.");
    }
}
compareAges(18,21);

// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 
// 'myAge is less than yourAge'. Try to implement it in to ways.

// method 1 using unary operators:

let yourAge = 16;
let myAge = 20;
let whoIsElder = myAge > yourAge ? "myAge is greater than yourAge." : "yourAge is greater than me.";
console.log(whoIsElder);

// method 2 using the if else blocks:
// Here i have used functions as the returning value need to be logged to the console.
function isElder(myAge,yourAge){
if(myAge > yourAge){
    return "myAge is greater than yourAge";
}else {
    return "yourAge is greater than myAge";
}
}
console.log(isElder(myAge,yourAge));

// 4. Check, if a number is even or not.

function isEven(number){
  if(parseInt(number)){ // additionally functionality to check whether the given number is int or not as we can only check the number is even or not only if it is integer.
    if(number  % 2 == 0){
        return true;
        }
    return false;
    }
  return "check the number (:";
}

// 5. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let marks = 80;

switch(Boolean(marks)){
    case marks >= 80 && marks <= 100:
        console.log("A");
        break;
    case marks >= 70 && marks <= 79:
        console.log("B");
        break;
    case marks >= 60 && marks <= 69:
        console.log("C");
        break;
    case marks >= 50 && marks <= 59:
        console.log("D");
        break;
    case marks >= 0 && marks <= 49:
        console.log("F");
        break;
    default: console.log("I think there's a mistake in the marks");
}

// 6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer

function checkSeason(month){
    let lowerCaseMonth = month.toLowerCase();
    if(lowerCaseMonth === "september" || lowerCaseMonth === "october" || lowerCaseMonth === "november" ){
        return "Rainy";
    }else if(lowerCaseMonth === "december" || lowerCaseMonth === "january" || lowerCaseMonth === "february"){
        return "Winter";
    }else if(lowerCaseMonth === "march"){
        return "spring";
    }else{
        return "Summer";
    }
}
console.log(checkSeason("JANUARY"));

// 7. Check if a day is weekend day or a working day. Your script will take day as an input.

let dayOfWeek = "monday"
if(dayOfWeek.toLowerCase() !== "sunday" || dayOfWeek.toLowerCase() != "saturday" ){
    console.log("Not a weekend.");
}else{
    console.log("It's a weekend.");
}

// 8. Write a program which tells the number of days in a month.
let monthCode = 10;

function noOfDays(month){
    let monthHasThirtyOneDays = [1,3,5,7,8,10,12];
    let montHasThirtyDays = [4,6,9,11];
    let monthHasTwentyEightDays = [2];
    if(monthHasThirtyOneDays.includes(month)){
        console.log("The month has 31 days.");
    }else if(montHasThirtyDays.includes(month)){
        console.log("Month has thirty days.");
    }else if(monthHasTwentyEightDays.includes(month)){
        console.log("Month has either 28 or 29 days.");
    }else{
        console.log("Enter valid month");
    }
}
noOfDays(monthCode);

// (or)
let year = 2012;
console.log(`the month ${monthCode} has ${new Date(monthCode,year,0).getDate()} days`);

// 9. Write a program to check whether the year is leap year or not.

function isLeapYear(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
           if(year % 400 == 0){
                return true;
           }
           return false;
        }
        return true;
    }
    return false;
}
console.log(isLeapYear(2001));

// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition 
//      (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). 
//          If condition3 is true, set the result to 'C', otherwise set it to 'D'.

// lets take the value stored in the variable marks here. marks = 80.
let nestedTernaryOperations = marks >= 80 ? (marks >= 81 && marks <= 85 ? 
    "The marks lies between 81 and 85": "The marks does not lie between 81 and 85") : 
    (marks <= 80 &&  marks <= 70 ? "The marks lie between the range of 70 and 80" : "The marks are lesser than 70.");

console.log(nestedTernaryOperations);

// 11. What will be the result of the following nested ternary expression:
let result = true ? 
false ? 
true ? 'A' : 'B' : 
false ? 'C' : 'D' 
: 'E';
console.log(result); // D

// The conditional statements goes in this way
if(true){
    if(false){
        if(true){
            console.log('A');
        }else{
            console.log('B');
        }
    }

}else{
    if(false){
        console.log('c');
    }else{
        console.log('D');
    }
    console.log('E');
}
