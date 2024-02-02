/*
Day-4 Assignment

1) Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
2) Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
3) Generate a random number between 0 and 100 inclusively.
4) Generate a random number between 50 and 100 inclusively.
5) Use console.log() and escape characters to print the following pattern.
        1 1 1 1 1
        2 1 2 4 8
        3 1 3 9 27
        4 1 4 16 64
        5 1 5 25 125
6) Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

*/


// 1)
let stringData = '10';
let intData = 10

console.log(typeof stringData == typeof intData); // it will generate the output as  false.

stringData = Number(stringData);

console.log(typeof stringData == typeof intData); // it will generate the output as  true.

// 2)
let parseToFloat = parseFloat('9.8');
console.log(parseToFloat); // generates an output of 9.8

parseToFloat = Math.ceil(parseToFloat);
console.log(parseToFloat); // generates an output of 10

// 3)
let randomValueZeroToHundred = Math.random() * 100;
randomValueZeroToHundred = Math.round(randomValueZeroToHundred);
console.log(randomValueZeroToHundred);


// 4)
const MAX = 101;
const MIN = 50;
let randomValueFiftyToHundred = Math.random() * (MAX-MIN) + MIN ;
randomValueFiftyToHundred = Math.round(randomValueFiftyToHundred);
console.log(randomValueFiftyToHundred);

// 5) 

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// 6) 
let base = 10;
let height = 20;
function areaOfTriagle(base, height){
    return 0.5*base*height;
}
console.log(areaOfTriagle(base,height));