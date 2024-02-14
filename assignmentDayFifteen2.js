// DAY 15 Assignment (FUNCTIONS)
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
// 4. Declare a function name swapValues. This function swaps value of x to y.
// 5. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// 6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// //['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
// 7. Write a functions which checks if all items are unique in the array.
// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => length*width; 
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month)=> {
    if(month.toLowerCase() === "september" || month.toLowerCase() === "october" || month.toLowerCase() === "november" ){
        return "Rainy";
    }else if(month.toLowerCase() === "december" || month.toLowerCase() === "january" || month.toLowerCase() === "february"){
        return "Winter";
    }else if(month.toLowerCase() === "march"){
        return "spring";
    }else{
        return "Summer";
    }
}
console.log(checkSeason("january"));
// Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (firstNumber, secondNumber, thirdNumber)=>{
    const maxNumber = (firstNumber > secondNumber) ? firstNumber:
    (secondNumber > thirdNumber) ? (secondNumber) :
    (thirdNumber);
    return maxNumber;
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))
// 4. Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (valueOne, valueTwo) => {
    let swapValue = valueOne;
    valueOne = valueTwo;
    valueTwo = swapValue;
    return [valueOne,valueTwo];
}
console.log(swapValues(10,20));
// 5. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

const hexDigits = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
let hexNumber = "#";
const Max_HEX_LENGTH = 6;
console.log(Max_HEX_LENGTH);
const generateHexColor = ()=>{
for(let iter = 0; iter < Max_HEX_LENGTH; iter++){
    hexNumber += hexDigits[ Math.floor(Math.random()*hexDigits.length)];
}
}

const generateColors = (colorPattern, numberOfColorPatterns)=>{
    if(colorPattern.toLowerCase() === "hexa"){
        let generatedColorPattern = [];
        for(let colorIter = 0 ; colorIter < numberOfColorPatterns; colorIter++){
            generateHexColor();
            generatedColorPattern.push(hexNumber.toLocaleLowerCase());
            hexNumber = "#";
        }
        return generatedColorPattern;
    }else{
        
        let generatedColorPattern = [];
        for(let colorIter = 0 ; colorIter < numberOfColorPatterns; colorIter++){
            let rgbPattern = [];
            for(let generateRGBpattern = 0; generateRGBpattern < 3; generateRGBpattern++){
                let randomRGB = Math.floor(Math.random() * 255);
                rgbPattern.push(randomRGB);
            }
            generatedColorPattern.push(rgbPattern);
        }
        return generatedColorPattern;    
    }
}

console.log(generateColors('RGB',2));

// 6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. 
// If the array length is less than five it return 'item not found'.
const modifyArray = (array)=>{
    if(array.length < 5){
        return "item not found";
    }else{
        array[4] = array[4].toUpperCase();
        return array;
    }
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
// //['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']

// 7. Write a functions which checks if all items are unique in the array.
const checkUnique = (array) => {
for(let itemIndexOut = 0; itemIndexOut < array.length ; itemIndexOut++){
    for(let itemIndexIn = itemIndexOut+1 ; itemIndexIn < array.length; itemIndexIn++){
        if(array[itemIndexOut].toLowerCase() === array[itemIndexIn].toLowerCase()){
            return false;
        }
    }
}
return true;
}
const vegs = ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(checkUnique(vegs));
// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]

const sevenRandomNumbers = () =>{
    let sevenRandoms = [];
    for(let iter = 0; iter < 7; iter++){
        let randomNumber = Math.floor(Math.random()*10);
        if(sevenRandoms.includes(randomNumber)){
            iter--;
        }else{
        sevenRandoms.push(randomNumber);
        }
    }
    return sevenRandoms
}

console.log(sevenRandomNumbers());