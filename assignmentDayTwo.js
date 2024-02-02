/*

DAY-2 Assignment

Declare four variables without assigning values : let variables.
Declare four variables with assigned values : const variables.
Declare variables to store your first name, last name, marital status, country and age in multiple lines: var type variables.
Declare variables to store your first name, last name, marital status, country and age in a single line: const type variables.
Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

*/
// 1)
let primeNumber;
let evenNumber;
let oddNumber;
let naturalNumber;
let wholeNumber;

// 2)
// These variables are declared constant as we need to assign some value at decleration, 
const noOfPlanets = 8;
const earthPosition = 3;
const lastPlanet = "Neptune";
const largestPlanet = "Jupiter"; 

// 3)
// the let variables
let firstName = "Raviteja";
let lastName = "Maddi";
let martialStatus = "Unmarried";
let age = 21;

// we are creating a function to create local scope for the variables as it is not possible to create the variables with same identifier with in the same scope.
// declaring the const variables.
function localScopeVariables(){
const firstName = "Raviteja", lastName = "Maddi", martialStatus = "Unmarried", age = 21;
}

// 4)
const myAge = 21;
const yourAge = 25;
console.log(myAge);
console.log(yourAge);