// Exercise 1: Arrays
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => {
    return acc + number;
}, 0);
console.log('The sum is:', sum);

// Exercise 2: Objects
const person = {
    name: 'John',
    age: 30
};
console.log('The person is', person[name], 'and is', person[age], 'years old.');

// Exercise 3: Functions
function greet(name) {
    return 'Hello, ' + name;
}
// The greeting should be displayed on console
greet();

// Exercise 4: Arrow Functions
const multiply = (a, b) => {
    a * b;
};
const result = multiply(2, 3);
console.log('The result is:', result);

// Exercise 5: Callbacks
function processInput(user, callback) {
    callback(user);
}
processInput('Mary', function(name) {
    console.log('Welcome, ' + name);
});
// The welcome should be displayed in the console

// Exercise 6: Variable Scope
function counter() {
    for (var i = 0; i < 5; i++) {
        // some code
    }
    console.log(i); // Should print 5
}
counter();

// Exercise 7: Default Parameters
function divide(a, b = 1) {
    return a / b;
}
const divisionResult = division(4);
console.log('Division result:', divisionResult);

// Exercise 8: Template Literals
const user = {
    firstName: 'Alice',
    lastName: 'Smith'
};
console.log('User: ${user.firstName} ${user.lastName}');

// Exercise 9: Array Methods
const fruits = ['apple', 'banana', 'orange'];
const upperFruits = fruits.map(fruit => fruit.toUppercase());
console.log(upperFruits);

// Exercise 10: Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, arr2];
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
Animal.speak(); // Should print 'Dog makes a noise.'

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

