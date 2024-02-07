/*

Day-11 Assignment
1. Declare an empty array;
2. Declare an array with more than 5 number of elements
3. Find the length of your array
4. Get the first item, the middle item and the last item of the array
5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
6. Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
7. Print the array using console.log()
8. Print the number of companies in the array
9. Print the first company, middle and last company
10. Print out each company
11. Change each company name to uppercase one by one and print them out
12. Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
14. Filter out companies which have more than one 'o' without the filter method
15. Sort the array using sort() method
16. Sort the array by country name length without sort;___
17. Reverse the array using reverse() method
18. Slice out the first 3 companies from the array
19. Slice out the last 3 companies from the array
20. Slice out the middle IT company or companies from the array
21. Remove the first IT company from the array
22. Remove the middle IT company or companies from the array
23. Remove the last IT company from the array
24. Remove all IT companies
24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
25. In the following shopping cart add, remove, edit items
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
    add Gulabjamun at the end of you shopping cart if it has not been already added
    remove 'Honey' if you are allergic to honey
    modify Tea to 'Green Tea'
26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.
27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
28. Concatenate the following two variables and store it in a fullStack variable.
    const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    const backEnd = ['Node','Express', 'MongoDB']

    console.log(fullStack)
29. The following is an array of 10 students ages:
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    Sort the array and find the min and max age
    Find the median age(one middle item or two middle items divided by two)
    Find the average age(all items divided by number of items)
    Find the range of the ages(max minus min)
    Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
30. Find the middle countries in the countries array.
31. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
ARRAYS:
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'India',
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


*/

// 1. Declare an empty array;
let emptyArray = [];

// 2. Declare an array with more than 5 number of elements
let primeNumbers = [2,3,5,7,11];
// 3. Find the length of your array
console.log(primeNumbers.length);
// 4. Get the first item, the middle item and the last item of the array
console.log(primeNumbers[0]);
console.log(primeNumbers[Math.ceil((primeNumbers.length-1)/2)]);
console.log(primeNumbers[primeNumbers.length - 1]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.
//  The array size should be greater than 5
let mixedDataTypes = [2,2.0,5n,"hello",["welcome","to","js"],true];
console.log(mixedDataTypes.length);
// 6. Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Coditas", "Google", "Microsoft", "Apple", "IBM", "Oracle" ,"Amazon"]
// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length);
// 9. Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.ceil((itCompanies.length-1)/2)]);
console.log(itCompanies[itCompanies.length-1]);

// 10. Print out each company
for(let iter = 0 ; iter < itCompanies.length;iter++){
    console.log(itCompanies[iter]);
}
// 11. Change each company name to uppercase one by one and print them out
for(let iter = 0 ; iter < itCompanies.length;iter++){

    console.log(itCompanies[iter].toUpperCase());

}
// 12. Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(",") + " are big companies");
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function doCompanyExist(companyName,itCompaniesList){
    if(itCompaniesList.includes(companyName)){
        return companyName;
    }
    return "Company not found";
}
// 14. Filter out companies which have more than one 'o' without the filter method
function filterOutCompanies(itCompaniesList, letter){
    let result = [];
    for (let iter =0 ; iter < itCompaniesList.length; iter ++){
        let count = 0;
        for(let iterIn = 0; iterIn < itCompaniesList[iter].length ; iterIn++){
            if(letter === itCompaniesList[iter][iterIn]){
                count +=1;
            }
        }
        result.push(count);
    }
    let filteredResult = [];
    for(let filterIter = 0; filterIter < result.length; filterIter++){
        if(result[filterIter] > 1){
            filteredResult.push(itCompaniesList[filterIter])
        }
    }
    return filteredResult;
}

console.log(filterOutCompanies(itCompanies,"o"));

// 15. Sort the array using sort() method
itCompanies.sort();
// 16. Sort the array by country name length without sort;
itCompanies.sort((a,b) => a.length - b.length);
// 17. Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 18. Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3));

// 19. Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length));
// 20. Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.ceil((itCompanies.length-1)/2),Math.ceil((itCompanies.length-1)/2)+1));
// 21. Remove the first IT company from the array
console.log(itCompanies.splice(0,1));
// 22. Remove the middle IT company or companies from the array
console.log(itCompanies.splice(Math.ceil((itCompanies.length-1)/2),1));
// 23. Remove the last IT company from the array
console.log(itCompanies.splice((itCompanies.length-1),1));
// 24. Remove all IT companies
itCompanies.splice(0,itCompanies.length);
// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
//     let text =
//     'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
text = text.replaceAll(",", "");
text = text.replaceAll(".","");
text = text.split(" ");
console.log(text.length);

// 25. In the following shopping cart add, remove, edit items
//     const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
//     add Gulabjamun at the end of you shopping cart if it has not been already added
//     remove 'Honey' if you are allergic to honey
//     modify Tea to 'Green Tea'

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
function addItemIfAbsent(item, list,atBegin){
    for(let iter = 0 ; iter < list.length ; iter++){
        if(item === list[iter]){
            return "Item already added to the cart"
        }
    }
    if(atBegin){
    shoppingCart.unshift(item);
    }else{
    shoppingCart.push(item)
    }
}
addItemIfAbsent("Rasmalai",shoppingCart,true);
addItemIfAbsent("Gulanjamun",shoppingCart,false);
function removeItem(item, list, areYouAllergic){
    if(areYouAllergic){
        list.splice(list.indexOf(item),1);
    }
}
removeItem("Honey",shoppingCart,true);
shoppingCart[2] = "Green Tea";

// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'India',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

let doExist = countries.includes("India") ? countries[countries.indexOf('India')].toUpperCase() : countries.push('India');
console.log(doExist);
// 27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'.
//  If it does not exist add Sass to the array and print the array.
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  if(webTechs.includes('Sass')){
    console.log("Sass is a CSS preprocess")
  }else{
    webTechs.push("Sass");
  }


// 28. Concatenate the following two variables and store it in a fullStack variable.
//     const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//     const backEnd = ['Node','Express', 'MongoDB']
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)

// 29. The following is an array of 10 students ages:
//     const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     Sort the array and find the min and max age
//     Find the median age(one middle item or two middle items divided by two)
//     Find the average age(all items divided by number of items)
//     Find the range of the ages(max minus min)
//     Compare the value of (min - average) and (max - average), use abs() method 
//     1.Slice the first ten countries from the countries array
function sum(array){
    let sum = 0;
    for(let iter = 0 ; iter < array.length ; iter++){
        sum += array[iter];
    }
    return sum;
}

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort();
console.log(Math.min(...ages));
console.log(Math.max(...ages));
console.log(ages[Math.ceil((ages.length-1)/2)]);
console.log(sum(ages/ages.length));
let averageAge = ages[0] - ages[ages.length-1];
let minMinusAvg = Math.abs(ages[0] - averageAge);
let maxMinusAvg = Math.abs(ages[ages.length-1] - averageAge);
countries.splice(0,10);
console.log(averageAge);
console.log(minMinusAvg);
console.log(maxMinusAvg);
// 30. Find the middle countries in the countries array.
console.log(countries[Math.ceil((countries.length-2)/2)]);

// 31. Divide the countries array into two equal arrays if it is even. If countries array is not even , 
// one more country for the first half
let firstArray = [];
let secondArray = [];

if(countries.length % 2 === 0){
    firstArray = countries.slice(0,Math.ceil((countries.length - 1) / 2));
    secondArray = countries.slice(Math.ceil((countries.length - 1) / 2), (countries.length - 1));
}else{
    firstArray = countries.slice(0,Math.ceil((countries.length - 1) / 2)+1);
    secondArray = countries.slice(Math.ceil((countries.length - 1) / 2)+1, (countries.length - 1));
}
