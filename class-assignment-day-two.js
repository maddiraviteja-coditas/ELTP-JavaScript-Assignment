// var, let, const

//console.log(evenNumber); // generates an error
let evenNumber = 2;
console.log(evenNumber);
function changeEvenNumber(){
    // evenNumber = 4; // generates an error as variable cannot be accessed before decleration
    // console.log(evenNumber); // same error is generated
    let evenNumber = 6;
    console.log(evenNumber)
}
changeEvenNumber();
console.log(evenNumber);

// console.log(primeNumber);  generates an error
const primeNumber = 2;
console.log(primeNumber);
function changePrimeNumber(){
    // primeNumber = 5;// generates an error.
    const oddNumber = 1;
    console.log(oddNumber);
}
changePrimeNumber();
console.log(primeNumber);

// var
console.log(planetILive);
var planetILive = "earth";
console.log(planetILive);

function changePlanetILive(){
    planetILive = "Mars";
}
changePlanetILive();
console.log(planetILive);