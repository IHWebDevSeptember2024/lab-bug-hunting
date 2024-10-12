// Exercise 1: Arrays
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => {
	//return acc + number; BUGFIX -> The reference to the argument was wrong, changed to "num"
	return acc + num;
}, 0);
console.log("The sum is:", sum);

// Exercise 2: Objects
const person = {
	name: "John",
	age: 30,
};
// console.log('The person is', person[name], 'and is', person[age], 'years old.'); -
// BUGFIX -> When using bracket notation the property has to be wrapped in quotation marks
console.log(
	"The person is",
	person["name"],
	"and is",
	person["age"],
	"years old."
);

// Exercise 3: Functions
function greet(name) {
	// return 'Hello, ' + name; BUGFIX -> The comma shoule after the single quotation
	return "Hello", +name;
}
// The greeting should be displayed on console
greet();

// Exercise 4: Arrow Functions
const multiply = (a, b) => {
	// a * b; BUGFIX -> Missing return
	return a * b;
};
const result = multiply(2, 3);
console.log("The result is:", result);

// Exercise 5: Callbacks
function processInput(user, callback) {
	callback(user);
}
processInput("Mary", function (name) {
	console.log("Welcome, " + name);
});

// BUGFIX -> It is working but the callback function is not used so not sure what the purpose of the callback is?
// The welcome should be displayed in the console

// Exercise 6: Variable Scope
function counter() {
	// for (var i = 0; i < 5; i++) { BUGFIX -> Use of var is not recommended as it is not exlusive to the function scope, changing to let
	for (let i = 0; i < 5; i++) {
		// some code
	}
	let i = 5;
	//console.log(i); // Should print 5 BUGFIX -> if variable i should have the value 5 it has to be declared and initiated with value 5 - the i present in the for loop should not be accesed/accesible outside the function
	console.log(i); // Should print 5
}
counter();

// Exercise 7: Default Parameters
function divide(a, b = 1) {
	return a / b;
}
// const divisionResult = division(4); BUGFIX -> The function is called with the wrong function name
const divisionResult = divide(4);
console.log("Division result:", divisionResult);

// Exercise 8: Template Literals
const user = {
	firstName: "Alice",
	lastName: "Smith",
};
// console.log('User: ${user.firstName} ${user.lastName}'); BUGFIX -> to concentate a string with template literals it has to be wrapped with backticks
console.log(`User: ${user.firstName} ${user.lastName}`);

// Exercise 9: Array Methods
const fruits = ["apple", "banana", "orange"];
// const upperFruits = fruits.map(fruit => fruit.toUppercase()); BUGFIX -> toUpperCase was not properly called, mising Case with capital letter.
const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(upperFruits);

// Exercise 10: Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// const combinedArr = [...arr1, arr2]; BUGFIX -> Missing the spread operator three dots on the second array
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Should print [1, 2, 3, 4, 5, 6]

// Exercise 13: Classes
class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(this.name + " makes a noise.");
	}
}
const animal = new Animal("Dog");
// Animal.speak(); // Should print 'Dog makes a noise.' BUGFIX -> The class function is called using the classname, it has to be called using the variable name for the new object created with the class, in this case animal starting with lowercase a
animal.speak(); // Should print 'Dog makes a noise.'

// Exercise 14: Error Handling
function parseJSON(jsonString) {
	try {
		// return JSON.parse(jsonStr); BUGFIX -> The argument is not used correclyt inside the funtion, it should be jsonString an not jsonStr
		return JSON.parse(jsonString);
	} catch (error) {
		console.error("Invalid JSON", error);
	}
}
parseJSON('{"name": "Bob"}');

// Exercise 15: Conditional Statements
const age = 18;
// if (age > 18) { BUGFIX -> only using "greater than" will not include the age 18, best solution here would be to use "greater than or equal" - ">="
if (age >= 18) {
	console.log("Adult");
} else {
	console.log("Minor");
}
// Should print 'Adult' or 'Minor' depending on the age
