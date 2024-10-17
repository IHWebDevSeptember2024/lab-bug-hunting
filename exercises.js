// Exercise 1: Arrays
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => {
    return acc + /*number*/ num;  // 'number' had to be 'num', as in the second argument of the callback function
}, 0);
console.log('The sum is:', sum);

// Exercise 2: Objects
const person = {
    name: 'John',
    age: 30
};
console.log('The person is', person['name'], 'and is', person['age'], 'years old.');
// when using bracket notation to refference object properties, they have to be put in quotation marks, otherwise, javascript thinks they are undeclared variables.

// Exercise 3: Functions
function greet(name) {
    /*return*/ console.log ('Hello, ' + name); 
}
// The greeting should be displayed on console
greet('Èric');

// The function returns the result of the expression but it won't print it anywhere (it can be stored in a variable or used in another expression).
// To print it, the console.log() must be implemented.
// I passed a string to the greet function as well because if no argument is passed in the function invocation, the value of 'name' is undefined.

// Exercise 4: Arrow Functions
/* const multiply = (a, b) => {
    a * b;
}; */
const multiply = (a, b) => a * b;
const result = multiply(2, 3);
console.log('The result is:', result);

// The arrow function needed a 'return'
// If the expression is written in one line without curly brackets, the return keyword is not needed (it's implicit)

// Exercise 5: Callbacks
function processInput(user, callback) {
    callback(user);
}
processInput('Mary', function(name) {
    console.log('Welcome, ' + name);
});
// The welcome should be displayed in the console

//This code is ok, it works as expected.


// Exercise 6: Variable Scope
function counter() {
    /*     
    for (var i = 0; i < 5; i++) {
        // some code
    }
    console.log(i); // Should print 5
    */

    let count = 0;
    for (let i = 0; i < 5; i++) {
        count++;
    }
    console.log(count)
}
counter();

// The code works as expected due to the scope of var i but doesn't follow best practices.
// It'd be better to declare te 'i' variable with 'let',
// this way the variable scope would be restricted to the for loop,
// and use the loop to update an outer variable (count).
// Finally, the console.log() should print the updated variable 'count'


// Exercise 7: Default Parameters
function divide(a, b = 1) {
    return a / b;
}
const divisionResult = /* division(4); */ divide(4) // the name of the function is incorrect
console.log('Division result:', divisionResult);
// Also, the name could be refactored to be more accurate and descriptive of the function's purpose: divideBy1()

// Exercise 8: Template Literals
const user = {
    firstName: 'Alice',
    lastName: 'Smith'
};
/* console.log('User: ${user.firstName} ${user.lastName}'); */
console.log(`User: ${user.firstName} ${user.lastName}`);
// To use template literals, backticks are required. Quotation marks don't work here.

// Exercise 9: Array Methods
const fruits = ['apple', 'banana', 'orange'];
const upperFruits = fruits.map(fruit =>/* fruit.toUppercase() */fruit.toUpperCase()); 
console.log(upperFruits);
// The Method is written wrong. "c" in toUppercase should be capital (toUpperCase)

// Exercise 10: Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = /* [...arr1, arr2]; */ [...arr1, ...arr2]; // The second array has to use the spread operator as well
console.log(combinedArr); // Should print [1, 2, 3, 4, 5, 6]

// Exercise 13: Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + ' makes a noise.');
    }
}
const animal = new Animal('Dog');
/* Animal.speak(); */ animal.speak(); // Should print 'Dog makes a noise.'
// The instance is not correctly refferenced. Animal is the class while "animal" is the instance with the speak() method.

// Exercise 14: Error Handling
function parseJSON(jsonString) {
    try {
        return JSON.parse(jsonStr);
    } catch (error) {
        console.error('Invalid JSON', error);
    }
}
parseJSON('{"name": "Bob"}');


// Exercise 15: Conditional Statements
const age = 18;
if (age > 18) {
    console.log('Adult');
} else {
    console.log('Minor');
}
// Should print 'Adult' or 'Minor' depending on the age

