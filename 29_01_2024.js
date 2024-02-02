// useage and working of the let, var, and const 

// let demonstration
console.log("let Demonstration...\n")

let firstName = "Raviteja";
console.log(firstName);

// let firstName = "Ravi"; generate an error syntactically, as redecleration of the same variable.
// console.log(firstName);

{
    // firstName = "Raviteja Maddi";  the value is not being updated, as let is not possesing the globl scope.
    // console.log(firstName);  outputs the updated global variable value as output.

    let firstName = "Ravi"; // local scope variable 
    console.log(firstName); // local variable output.
    let lastName = "Maddi"; // decleration of local variable
}
    // console.log(lastName);  generates an error, as the lastName variable is in the block scope.
// console.log("The let can only possess the local scope, the variable with the let decleration in the global scope cannot be accessed with in the block scope.")
console.log("\n..-----....\n")

// var demonstration
console.log("Var demonstration...");
var nameVar = "Raviteja"; // global value for the variable nameVar.
console.log(nameVar); // output for the nameVar variable

var nameVar = "Raviteja Maddi"; // value is beign reassigned with in the global scope, and the variable is also recreated as not worked in let.
console.log(nameVar); // output for the updated variable 

{ 
    console.log(nameVar); // output of the latest data of the global variable.
    nameVar = "Raviteja goud Maddi"; // updating the value of the global variable, in block scope. 
    console.log(nameVar); // output the updaed value of the globl value in the block scope. 
    var nameVar = "Teja"; // the variable can also be redeclared in the block scope.
    console.log(nameVar); // output of the block scope variable.
    var lastName = "Maddi"; // declearing the local scope variable 
}

console.log(lastName); // accessing the local scope variable, it generates the output as var type variables can be acessed anywhere in the code i.e., they possess global type of scope.


console.log("\n...---...\n");


// const demonstration

console.log("Const demonstration..");
// const fullName; constant variable must be assigned a value at the time if decleration.

const fullName = "Raviteja Maddi";
console.log(fullName);

// fullName = "Raviteja goud Maddi";  we cannot reassign the values to the constant variables.

{
    const fullName = "Raviteja goud Maddi"; // The const variables can be declared with sam e identifier in the block scope.
    console.log(fullName);
    const lastName = "Maddi";
}

console.log(lastName); // the variables with the local scope can also be accessed out of the local scope.

console.log("---...---")


