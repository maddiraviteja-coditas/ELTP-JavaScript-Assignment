// Create an empty object called cow
// Print the the cow object on the console
// Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"
// Get name, legs, color, age and sound value from the cow object
// Set new properties the cow object: breed, getCowInfo()
// Find the person who has many skills in the users object.
// Count logged in users, count users having greater than equal to 30 points from the following object.
// Find people who are MERN stack developer from the users object
// Set your name in the users object without modifying the original users object
// Get all keys or properties of users object
// Get all the values of users object
// Use the countries object to print a country name, capital, populations and languages.
// Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has 
// totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of 
// incomes and its description and expenses is a set of incomes and its description.
// Imagine you are getting the below users array of objects.
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has 
// already an account.
// Create a function called signIn which allows user to sign in to the application
// The products array has three elements and each of them has six properties.
// Create a function called rateProduct which rates the product
// Create a function called averageRating which calculate the average rating of a product
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.


// Create an empty object called cow
const cow = {};

// Print the the cow object on the console
console.log(cow);

// Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"

cow.name = "Henry";
cow.legs = 4;
cow.color = "White";
cow.age = 10;
const sound = () =>  ("maaah maaah");
cow.sound = sound();
console.log(cow);
// Get name, legs, color, age and sound value from the cow object
const {name:cowName,legs:cowLegs,color:cowColor,age:cowAge,sound:cowSound} = cow;
console.log(cowName, cowLegs, cowColor, cowAge, cowSound);
// Set new properties the cow object: breed, getCowInfo()
cow.breed = "Holstein Friesian"
const getCowInfo = () => "Cow info";
cow.getCowInfo = getCowInfo; 
// Find the person who has many skills in the users object.
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  function maxSkillsIndex(list){
    let result = [];
   for(let iter = 0; iter < (Object.keys(users)).length ; iter++){
       let temp = 0;
       temp = (Object.values(users)[iter].skills).length;
       result.push(temp);
   }
   let index = result.indexOf(Math.max(...result));
   return index;
   }
   console.log(Object.keys(users)[maxSkillsIndex(users)]);

// Count logged in users, count users having greater than equal to 30 points from the following object.
function loggedInUsersCount(list){
    let result = [];
    let count = 0;
   for(let iter = 0; iter < (Object.keys(users)).length ; iter++){
      if(Object.values(users)[iter].isLoggedIn === true && (Object.values(users)[iter].points >= 30)){
        count+=1;
      }
   }
   return count;
}
// Find people who are MERN stack developer from the users object
let mern = ["MongoDb","Express","React","Node"];

// Set your name in the users object without modifying the original users object
users["Raviteja"] = {
      email: 'maddi.ravteja@coditas.com',
      skills: ['HTML', 'CSS', 'JavaScript', "Python","Java"],
      age: 21,
      isLoggedIn: true,
      points: 50
}


// Get all keys or properties of users object
let userKeys = Object.keys(users);
// Get all the values of users object
let userValues = Object.values(users);
// Use the countries object to print a country name, capital, populations and languages.
const countries = {
  India: {
    capital: "New Delhi",
    population: 647336738,
    language: ["hindi, english, marathi"],
  },
  USA: {
    capital: "Washington D.C.",
    population: 150922309,
    language: ["english"],
  }
};
for(const country in countries){
  console.log(`Country : ${country} \n capital :${countries[country].capital} \n population : ${countries[country].population}`);
  console.log(`Languages: ${countries[country].language.join(",")}`);
}
// Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has 
// totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of 
// incomes and its description and expenses is a set of incomes and its description.
let addIncome = (income, variableAmount)=> income+variableAmount;
let addExpense = (expense, variableAmount)=> expense+variableAmount;
let accountInfo = (accountId) => accountId;
let accountBalance = (accountId) => accountBalance;
let personAccount = {
  firstName : "Raviteja",
  lastName : "Maddi",
  incomes : {
    totalIncome : 8080809,
    crypto : 72634,
    stocks : 293748
  },
  expenses : {
    totalExpense : 700000,
    rent: 3075,
    electricityBill : 8000,
  },
  totalIncome: function () {
    let total = 0;
    for (const income of Object.values(this.incomes)) {
      total += income;
    }
    return total;
  },
  totalExpenses: function () {
    let total = 0;
    for (const expense of Object.values(this.expenses)) {
      total += expense;
    }
    return total;
  },
  accountInfo: function () {},
  addIncome: function () {},
  addExpense: function () {},
  accountBalance: function () {},
};
// Imagine you are getting the below users array of objects.
// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has 
// already an account.
function signUp(users, userName){
  for(let key of Object.keys(users)){
    if (key.toLowerCase() === userName.toLowerCase())
      return "User exists";
  }
  users.userName = userName;

}
// Create a function called signIn which allows user to sign in to the application
function signIn(userName, password){
  for(const key of Object.keys(users) ){
    if(key.toLowerCase() === userName.toLowerCase()){
      return "Login sucess";
    }
  }
  return "Invalid credentials";
}
// The products array has three elements and each of them has six properties.
const newProducts = [
  {
    _id: 1100,
    name: "PC",
    description: "Apple studio",
    price: 2400,
    ratings: [
      { userId: "Vijay", rate: 4 },
      { userId: "Sandeep", rate: 3.5 },
    ],
    likes: ["vijay", "sandeep"],
  },
  {
    _id: "1200",
    name: "Samsun galaxy",
    description: "Samaung galaxy s24 ultra",
    price: 1800,
    ratings: [],
    likes: ["vijay"],
  },
  {
    _id: "1201",
    name: "Buds",
    description: "Nothing buds",
    price: 350,
    ratings: [{ userId: "kumar", rate: 4.5 }],
    likes: [],
  },
];

// Create a function called rateProduct which rates the product
function rateProduct(productId, userId, rating) {
  for (const product of newProducts) {
    const { _id } = product;
    if (_id === productId) {
      const { ratings } = product;
      ratings.push({ userId: userId, rate: rating });
    }
  }
}
rateProduct("kiran", "1200", 4.5);
console.log(newProducts);
// Create a function called averageRating which calculate the average rating of a product
function averageRating(productId) {
  for (const product of newProducts) {
    const { _id } = product;
    if (_id === productId) {
      const { ratings } = product;
      let sumOfRatings = 0;
      const totalRatings = ratings.length;
      for (const rating of ratings) {
        const { rate } = rating;
        sumOfRatings += rate;
      }
      return sumOfRatings / totalRatings;
    }
  }
}
console.log(averageRating("1100"));
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(productId, userId) {
  for (const product of newProducts) {
    const { _id } = product;
    if (_id === productId) {
      const { likes } = product;
      if (likes.includes(userId)) {
        const userIdToRemove = likes.indexOf(userId);
        likes.splice(userIdToRemove, 1);
      } else {
        likes.push(userId);
      }
      console.log(newProducts);
    }
  }
  console.log(newProducts);
}