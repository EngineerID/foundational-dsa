//This script contains practice code for the WEB700 course

/*
Contents

1. Object Literal Notation
2. Creating Objects (“class” keyword)
3. Advanced JavaScript / ES6 Feautres
4. Error / Exception Handling
5. Throwing Errors
6. Promises
7. Resolve & Then
8. Adding Data
9. Reject & Catch
10. Chaining Promises
11. Arrow Functions
12. Implicit "return statement"
13. Lexical "this"

*/

// 1. Object Literal Notation

/*
var architect = {
    name: "Joe",
    age: 34,
    occupation: "Architect",
    setName: function (newName) { this.name = newName },
    setAge: function (newAge) { this.age = newAge },
    getName: function () { return this.name },
    getAge: function () { return this.name },
};

console.log(architect.name);
console.log(architect.getName());
*/

// 2. Creating Objects


/*

class architect {

    constructor(setName, setAge) {
        this.name = setName;
        this.age = setAge;
        this.occupation = "architect";
    }

    setName(newName) { this.name = newName }

    setAge(newAge) { this.age = newAge }

    getName() { return this.name; }

    getAge() { return this.age; }

}

// define new "architect objects using the "new" keyword with the "architect" class

var architect1 = new architect("Joe", 34);
var architect2 = new architect("Mary", 49);

// samples of accessing properties and methods on both objects

console.log(architect1.name); // "Joe"

console.log(architect1.getName()); // "Joe"
console.log(architect2.getName()); // "Mary"
*/

// 3. Advanced JavaScript / ES6 Features

/*
for(var i =0; i < 5; i++){
    // ...
  }
      
console.log(i);


for(let j=0; j < 5; j++){
    // ...
  }
      
console.log(j);

for(const k=0; k < 5; k++){ // TypeError: Assignment to constant variable.
    // ...
  }
      
  console.log(k);
*/

// 4. Elegently handling errors

/*
let x = "twenty";

let y = parseInt(x);

if(isNaN(y)){
    console.log("x cannot be converted to a number");
}else{
    console.log("success! the numeric value of x is: " + y);
}


let x = 30, y = 0;

let z = x / y;

if(isFinite(z)){
  console.log("success! " + x + "/" + y + "=" + z);
}else{
  console.log(x + " is not divisible by " + y);
}



function divide(x,y){
    if(y == 0){
    throw new Error("Division by Zero!");
    }
    return x / y;
}

let a = 3, b = 0, c;

try{
    c = divide(a,b);
}catch(ex){
    console.log("uh oh, an error occurred: " + ex.message); 
    // outputs: uh oh, an error occurred: Division by Zero!
    c = NaN;
}

console.log(a + " / " + b + " = " + c); // 3 / 0 = NaN
*/

// 6. Promises

/*
// output "A" after a random time between 0 & 3 seconds
function outputA(){
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    setTimeout(function(){
        console.log("A");
    },randomTime);
}

// output "B" after a random time between 0 & 3 seconds
function outputB(){
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    setTimeout(function(){
        console.log("B");
    },randomTime);
}

// output "C" after a random time between 0 & 3 seconds
function outputC(){
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    setTimeout(function(){
        console.log("C");
    },randomTime);
}

// invoke the functions in order

outputA();
outputB();
outputC();
*/


// output "A" after a random time between 0 & 3 seconds
function outputA(){
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    return new Promise(function(resolve, reject){ // place our code inside a "Promise" function
        setTimeout(function(){
            console.log("A");
            resolve(); // call "resolve" because we have completed the function successfully
        },randomTime);
    });   
}

// call the outputA function and when it is "resolved", output a confirmation to the console

outputA().then(function(){
    console.log("outputA resolved!");
});
