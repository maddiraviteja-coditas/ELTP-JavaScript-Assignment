// DAY -15 ASSIGNMENT  (LOOPS)
// NOTE: You guys can use (for, for of, for in, while, do while loop), whichever you feel is best.
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
// Iterate 0 to 10 using for loop, do the same using while and do while loop
// Iterate 10 to 0 using for loop, do the same using while and do while loop
// Iterate 0 to n using for loop
// 4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
// 5. Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// 5. Use for loop to iterate from 0 to 100 and print only even numbers
// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
// 7. Use for loop to iterate from 0 to 100 and print only prime numbers
// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// 10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]
// 11. Develop a small script which generate array of 5 random numbers
// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
// 13. Develop a small script which generate a six characters random id: //iuyt56
// 14. Develop a small script which generate any number of characters random id.
// 15. Write a script which generates a random hexadecimal number.
// 16. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// 17. Using the above countries array, create an array for countries length
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// 18. Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// 19. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
// 20. Using the above countries array, find the country containing the biggest number of characters.
// 21. Using the above countries array, find the country containing only 5 characters.
// 22. Find the longest word in the webTechs array.
// 23. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
// 25. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
// 26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
// 27. Print all the elements of array as shown below.
//   const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

// OUTPUT: 

//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB


// DAY -15 ASSIGNMENT  (LOOPS)
// NOTE: You guys can use (for, for of, for in, while, do while loop), whichever you feel is best.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// Iterate 0 to 10 using for loop, do the same using while and do while loop

// using for:
for(let index = 0 ; index < 10 ; index++){
console.log(index);
} 

// Using while:
let index = 0;
while(index < 10){
    console.log(index);
    index++;
}
// using do while:
index = 0;
do{
    console.log(index);
    index++;
}while(index < 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let index = 10 ; index > 0 ; index--){
    console.log(index);
}

// Using while:
index = 10;
while(index > 0){
    console.log(index);
    index--;
}

// using do while:
index = 10;
do{
    console.log(index);
    index--;
}while(index > 0);

// Iterate 0 to n using for loop
function iterateZerotoN(n){
    for(let index = 0; index < n ; index++){
        console.log(index);
    }
}
iterateZerotoN(10);

// 4. Write a loop that makes the following pattern using console.log():
//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
 
function printPatttern(n){
    for(let index = 0 ; index < n; index++){
        let pattern = ""
        for(let indexIn = 0 ; indexIn < index ; indexIn++){
            pattern += "*";
        }
           console.log(pattern);
    }
}
printPatttern(10);

// 5. Using loop print the following pattern
//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
const n = 2;
for(let iter = 0 ; iter <= 10 ; iter++){
    console.log(`${iter}\t${iter*iter} \t ${iter**3}`);
}

// 5. Use for loop to iterate from 0 to 100 and print only even numbers
for(let iter = 0; iter < 100; iter++){
    if(iter%2 === 0){
        console.log(iter);
    }
}
// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let iter = 0; iter < 100 ; iter++){
    if(!(iter%2 === 0)){
        console.log(iter);
    }
}
// 7. Use for loop to iterate from 0 to 100 and print only prime numbers

function isPrime(num) {
    let prime = true;
    for (let index = 2; index < num; index++) {
      if (num % index === 0) {
        prime = false;
      }
    }
    return isPrime;
  }
  
  for (let iter = 0;iter <= 100;iter++) {
    if (isPrime(iter)) {
      console.log(iter);
    }
  }
// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumOfNumbers = 0;
for(let iter = 0; iter < 100; iter++){
    sumOfNumbers+=iter;
}
console.log(sumOfNumbers);
// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let odds = [];
let evens = [];

const sum = (list) =>{
    let result = 0;
    for(let iter = 0; iter < list.length; iter++){
        result += list[iter];
    }
    return result;
} 

for(let iter = 0; iter < 100 ; iter++){
    if(iter%2 === 0){
        evens.push(iter);
    }else{
    odds.push(iter);
    }
}
const sumOfOddsAndEvens = sum(odds) + sum(evens);
console.log(sumOfOddsAndEvens);
// 10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]
for(let iter = 0; iter < 100 ; iter++){
    if(iter%2 === 0){
        evens.push(iter);
    }else{
    odds.push(iter);
    }
}
const sumOfEvensAndOdds = [sum(evens),sum(odds)]; 
console.log(sumOfEvensAndOdds);
// 11. Develop a small script which generate array of 5 random numbers
let randomArray = [];
for(let iter = 0; iter < 5; iter++){
    randomValue = Math.random()*100;
    randomArray.push(Math.floor(randomValue));
}
console.log(randomArray);
// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomNumbersArray = [];
for(let iter = 0; iter < 5 ;iter++){
    let randomValue = Math.floor(Math.random()*100);
    if(randomNumbersArray.includes(randomValue)){
        iter--;
    }else{
        randomNumbersArray.push(randomValue);
    }
}
// 13. Develop a small script which generate a six characters random id: //iuyt56
const randomStrings = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let result = "";
for(let iter = 0 ; iter < 6; iter++){
    let randomValue = Math.ceil(Math.random()*randomStrings.length); 
    result =result+ randomStrings[randomValue];
}
console.log(result);
// 14. Develop a small script which generate any number of characters random id.
const MAX_LENGTH = 6;
result = "";
for(let iter = 0 ; iter < 6; iter++){
    let randomValue = Math.ceil(Math.random()*randomStrings.length); 
    result =result+ randomStrings[randomValue];
}
console.log(result);
// 15. Write a script which generates a random hexadecimal number.
const hexDigits = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let hexNumber = "0x";
const Max_HEX_LENGTH = Math.floor(Math.random()*hexDigits.length);
console.log(Max_HEX_LENGTH);
for(let iter = 0; iter < Max_HEX_LENGTH; iter++){
    hexNumber += hexDigits[ Math.floor(Math.random()*hexDigits.length)];
}
console.log(hexNumber);

// 16. Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let upperCaseCountries = [];
for(const country of countries){
    upperCaseCountries.push(country.toUpperCase());
}
console.log(upperCaseCountries);
// 17. Using the above countries array, create an array for countries length
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
let countriesLength = [];
for(const country of countries){
    countriesLength.push(country.length);
}
console.log(countriesLength);
// 18. Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
countries.push("Iceland");

let countriesArrayOfArray = [];
for(const country of countries){
    let countryDetail = [];
    console.log(country);
    countryDetail.push(country.toUpperCase(),country.slice(0,3),country.length );
    countriesArrayOfArray.push(countryDetail);
}
console.log(countriesArrayOfArray);

// 19. In above countries array, check if there is a country or countries containing the word 'land'. 
// If there are countries containing 'land', print it as array. If there is no country containing the word 'land', 
// print 'All these countries are without land'.
// ['Finland','Ireland', 'Iceland']
let countriesWithLand = [];
for(const country of countries){
    if(country.includes("land")){
        countriesWithLand.push(country);
    }
}
if(!(countriesWithLand)){
    console.log("All these countries are without land");
}
console.log(countriesWithLand);
// 20. Using the above countries array, find the country containing the biggest number of characters.
let maxCountriesLength = [];
for(const country of countries){
    maxCountriesLength.push(country.length);
}
console.log(countries[Math.max(...maxCountriesLength)]);
// 21. Using the above countries array, find the country containing only 5 characters.
let lengthFiveCountries = [];
for(const length in maxCountriesLength){
    if(maxCountriesLength[length] === 5){
    lengthFiveCountries.push(countries[length]);
    }
}
console.log(lengthFiveCountries);
// 22. Find the longest word in the webTechs array.
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

let webTechLength = [];
for(const tech of webTechs){
    webTechLength.push(tech.length);
}

console.log(webTechs[webTechLength.indexOf(Math.max(...webTechLength))]);
// 23. Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let webTechsLengths = [];
for(const tech of webTechs){
    let webTechAndLength = [tech,tech.length];
    webTechsLengths.push(webTechAndLength)
}
console.log(webTechsLengths)
// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym 
// MERN by using the array mernStack
// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
let mern = "";
for(tech of mernStack){
    mern += tech.slice(0,1);
}
console.log(mern);
// 25. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for 
// loop or for of loop and print out the items.
const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(const tech in techs){
    console.log(tech);
}

for(let techIndex = 0; techIndex < techs.length; techIndex++){
    console.log(techs[techIndex]);
}
// 26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruits = ['banana', 'orange', 'mango', 'lemon']
let reverseFruitArray = [];
for(let fruitIndex = fruits.length;fruitIndex >= 0 ; fruitIndex-- ){
    reverseFruitArray.push(fruits[fruitIndex]);
}
// 27. Print all the elements of array as shown below.
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

for(const techs in fullStack){
    for(const tech of fullStack[techs]){
        console.log(tech);
    }

}

// OUTPUT: 

//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
