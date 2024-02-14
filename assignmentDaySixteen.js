// map

const numbers = [10,20,30];
numbers.map((number)=>10+number);

const sumOfNumbers = (array)=> {
    let sum = 0;
    for (let iter = 0; iter < array.length; iter++) {
        sum+=array[iter];
    }
    return sum;
}

const maps = (sumOfNumbers,array) => {
    return sumOfNumbers(array);
}

console.log(maps((array)=>{
    let result = []
    for(const value in  array){
        result.push(array[value] **2);
    }
    return result;
},numbers));

//reduce

const multiplyAll = (array)=>{
    let finalResult = 1;
    for(let iter = 0; iter < array.length; iter++){
        finalResult *= array[iter];
    }
    return finalResult;
}

const reduce = (reduceFunction,array)=>{
    return reduceFunction(array);
}

console.log(reduce(multiplyAll,numbers));

// filter

const checkAge = (array)=>{
    let ages = [];
   for(const age of array){
    if(age > 18){
        ages.push(age);
    }
   }
   return ages;
}

const filterFunction = (filterFunction,array) => {
    return filterFunction(array);
} 

console.log(filterFunction(checkAge, [1,2,3,4,19,29,34]));

console.log(filterFunction((numbers)=>{
    let result = [];
    for(const number of numbers){
        if(number % 2 === 0){
            result.push(number);
        }
    }
return result;
}
,numbers));