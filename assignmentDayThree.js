/*

1) Create a file and declare variables and assign string, boolean, undefined and null data types
2) Create file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

*/

// 1)
let stringData = "Raviteja";
let booleanData = true;
let undefinedData;
let nullData = null;

// 2)
console.log(typeof stringData);
console.log(typeof booleanData);
console.log(typeof undefinedData);
console.log(typeof nullData);

let bigintData = 165263523236822637638626663263626378629626372532735263872538n;
let arrayData = ["Raviteja", 21, false, undefined, null, function returnName(userName){return userName}, ["Vaagdevi College of Engineering", "Telangana","Warangal",{
    "Stream": "Computer Science and Engineering",
    "Affiliation" : "Jawaharlal nehuru technological university"
}]];

const functionData =  (userName) => {
return "hello "+userName
};

let symbolDataWelcome = Symbol("Hello");
let numberData = 100.234;

console.log(typeof bigintData);
console.log(typeof arrayData);
console.log(typeof functionData);
console.log(typeof symbolDataWelcome);
console.log(typeof numberData);