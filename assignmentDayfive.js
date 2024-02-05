/*

1) Declare a variable and assign a value 'Easy JavaScript Assignments'.
2) Print the length of the string.
3) Change all the string characters to capital letters using toUpperCase() method
4) Change all the string characters to lowercase letters using toLowerCase() method
5) Slice out the first word of the string using substr() and substring() method
6) Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
7) Check if the string contains a word Script using includes() method
8) Split the string into an array using split() method
9) Split the string 'Easy JavaScript Assignments' at the space using split() method
10) 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
11) Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
12) What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
13) What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
14) Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
15) Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
16) Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
17) Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
18) Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
19) Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
20) Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
21) Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
22) Use match() method to find all the a’s in 'Easy JavaScript Assignments'
23) Use concat() and merge 'Easy' and 'JavaScript' to a single string.
24) Use repeat() method to print 'Easy JavaScript' 3 times.
25)* 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
26) Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
27) Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    const sentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y;
28)  Calculate the total annual income of the person by extracting the numbers from the following text. 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'

*/

// 1) Declare a variable and assign a value 'Easy JavaScript Assignments'.
const valueAssignment = 'Easy JavaScript Assignments';

// 2) Print the length of the string.
console.log(valueAssignment.length);

// 3) Change all the string characters to capital letters using toUpperCase() method
console.log(valueAssignment.toUpperCase());

// 4) Change all the string characters to lowercase letters using toLowerCase() method
console.log(valueAssignment.toLowerCase());

// 5) Slice out the first word of the string using substr() and substring() method
console.log(valueAssignment.substr(0,4));
console.log(valueAssignment.substring(0,4));

// 6) Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(valueAssignment.slice(5));

// 7) Check if the string contains a word Script using includes() method
console.log(valueAssignment.includes("Script"));

// 8) Split the string into an array using split() method
let splitArray = valueAssignment.split("");
console.log(splitArray);

// 9) Split the string 'Easy JavaScript Assignments' at the space using split() method
console.log(valueAssignment.split(" "))

// 10) 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const eltpBatchThree = "ELTP, BATCH, THREE";
console.log(eltpBatchThree.split(","));

// 11) Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.

let splitArraySpace = valueAssignment.split(" ");
 splitArraySpace[1] = "Python";
console.log(splitArraySpace.join(' '));

// 12) What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(valueAssignment[20]);

// 13) What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(valueAssignment.charCodeAt(0));

// 14) Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(valueAssignment.indexOf('a'));

// 15) Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(valueAssignment.lastIndexOf('a'));

// 16) Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log("Easy JavaScript Assignments, Easy Easy".indexOf("Easy"));

// 17) Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.lastIndexOf("Easy"));

// 18) Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log('Easy JavaScript Assignments, Easy Easy'.search("Easy"));

// 19) Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
console.log('       Easy JavaScript Assignments, Easy Easy             '.trim());

// 20) Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log('Easy JavaScript Assignments'.startsWith("Easy"));

// 21) Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log('Easy JavaScript Assignments'.endsWith("Assignments"));

// 22) Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log('Easy JavaScript Assignments'.matchAll('a')); 

// 23) Use concat() and merge 'Easy' and 'JavaScript' to a single string.
console.log('Easy'.concat('JavaScript'));

// 24) Use repeat() method to print 'Easy JavaScript' 3 times.
console.log('Easy JavaScript'.repeat(3));

// 25) 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
console.log('Javascript is Easy, too Easy, too Easy, Easy to learn'.match("Easy"));

// function count(array, searchStr){
//     for(let iter = 0 ; iter < array.length){

//     }
// }

// 26) Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
console.log('Javascript is Easy, too Easy, too Easy, Easy to learn'.match("Easy"));

// 28)  Calculate the total annual income of the person by extracting the numbers from the following text.
//  'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'

let stringValue = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';
let splitString = stringValue.split(",");
let numberValues = stringValue.split(",");
for(let iter = 0 ; iter < splitString.length;iter++){
    numberValues[iter] = splitString[iter].match(/\d+/);
}

console.log(+numberValues[0] + +numberValues[1]+ +numberValues[2]+ +numberValues[3]);