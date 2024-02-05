/*

Day - 9 Assignment

1) Check if type of '70' is equal to 70
2) Check if parseInt('8.8') is equal to 9
3) Boolean value is either true or false.
    a)Write five JavaScript statement which provide falsy value.
    b) Write five JavaScript statement which provide truthy  value.
4) Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    a)5 > 4
    b) 4 >= 3
    c) 4 < 3
    d) 4 <= 3
    e) 5 == 5
    f) 9 === 9
    g) 9 == '9'
    h) 8 === '8'
    i) 4 != 4
    J) 4 !== 4
    k) 4 != '4'
    l) 4 != '4'
    m) 4 !== '4'
    n) Find the length of python and jargon and make a falsy comparison statement.
5) Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   a)  4 > 3 && 10 < 12
    b) 4 > 3 && 10 > 12
    c) 4 > 3 || 10 < 12
    d) 4 > 3 || 10 > 12
    e) !(4 > 3)
    g) !(4 < 3)
    h) !(false)
    i) !(4 > 3 && 10 < 12)
    j) !(4 > 3 && 10 > 12)
    k) !(4 === '4')
    l) There is no 'on' in both dragon and python

*/

// 1)
console.log('70' == 70); //true

// 2)
console.log(parseInt('8.8') == 9); //false

// 3

// 3.a)
console.log(true && 0); // falsy value 0
console.log(true && NaN); // NaN falsy value
console.log(true && false); // false
console.log([] == []); // false
console.log({} == {}); // false

// 3.b)
console.log(true && "true"); // true
console.log(true && !NaN); // true
console.log(10 === 10); // true
let primeNumbers = [2,3,5,7]; // true
let wholeNumbers = [0,1,2,3,4,5]; // true
console.log(primeNumbers[0] === wholeNumbers[2]); // true
console.log("hello" == "hello"); // true


// 4) 
console.log(5>4); // true
console.log(4>= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(5 == 5); // true
console.log(9 === 9); // true
console.log(9 == '9'); // true
console.log(8 === '8'); // false
console.log(4!=4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 !== '4'); // true
console.log("python".length !== "jargon".length); // false

// 5)

console.log(4 > 3 && 10 < 12);  // true
            // true  && true = true
console.log(4 > 3 && 10 > 12); // false
            // true && false = false.
console.log(4 > 3 || 10 < 12); // true
            // true  || true = true
console.log(4 > 3 || 10 > 12); //true
            // true  || false  = true
console.log(!(4 > 3)); // false
            // !(true) = false
console.log(!(4 < 3)); // true
            // !(false) = true
console.log(!(false)); // true
            // !(false) = true
console.log(!(4 > 3 && 10 < 12)); // false
            // !(true && true) = !(true) => false
console.log(!(4 > 3 && 10 > 12)); // true
            // !(true&& false) = !(false) => true
console.log(!(4 === '4')); // true
            // !(false) = true
console.log("drag" == "pyth"); // false