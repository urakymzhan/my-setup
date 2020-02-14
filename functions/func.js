 // A function is just an object that can be called.


// // ------ 1


// function getSentence(num) {
//     console.log("This is my first function!");
// }

// getSentence();


// ------------------------------------------
// ----- 2
// function getFullName(firstN, lastN) {

//     var fullName = firstN + " " + lastN;

//     console.log(fullName);
// }

// var firstName = "Ulan";

// var lastName = "Rakymzhan";


// getFullName(firstName, lastName);

// var age = 30;

// if (age >= 35) {
//   console.log('You can vote AND run for President!');
// } else if (age >= 30) {
//   console.log('You can vote AND run for the Senate!');
// } else if (age >= 18) {
//   console.log('You can vote!');
// } else {
//   console.log('You can\'t vote, but you can write your representatives.');
// }


  
// if ("condition") {
//   // do something
// } else if ("condition") {
//   // do something
// } else if ("condition") {
//   // do something
// } else {
//   // do something
// }        

// ------------------------------------------
// ----- 3
// function getFullName(firstN, lastN) {
//     var fullName = firstN + " " + lastN;
//     return fullName;
// }
// var firstName = "Ulan";
// var lastName = "Rakymzhan";

// var myFullName = getFullName(firstName, lastName);
// console.log(myFullName);




// ------------------------------------------
// // analogy of function
// // nouns -> bread, salmon, lettuce are all inputs (arguments)
// // verb -> makeSandwich 
// function makeSandwich (bread, salmon, lettuce) {
//     var sandwich = bread + salmon + lettuce;
//     console.log(sandwich);
// }
// makeSandwich("bread and ", "salmon and ", "lettuce");

// ------------------------------------------
// // argument and parameter difference

// The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values.
// var foo = function( a, b, c ) {}; // a, b, and c are the parameters
// foo( 1, 2, 3); // 1, 2, and 3 are the arguments
// foo(5, 7, 9);

// var makeTea = function (water, milk, teabag) {
//     var tea = water + milk + teabag;
//     console.log(tea);
// }

// var makeTea2 = function (water, milk, teabag, sugar) {
//     var tea2 = water + milk + teabag + sugar;
//     console.log(tea2);
// }

// makeTea("hotwater and ", "almondmilk and ", "blackTeaBag");
// makeTea2();

// ------------------------------------------
// // passing global varibale to function
// function myCar(car){
//   var newCar = car;
//   console.log('You now have a ' + newCar);
// }
// // Declare variables
// var mercedes = "Mercedes-AMG GT 63 S";
// var subaru = "Subaru WRX STI";
// // Use them in functions
// myCar(mercedes);
// myCar(subaru);

// ------------------------------------------
// Dont forgt default parameters
// function getFullName(firstN="Ulan", lastN="Rakymzhan") {
//     var fullName = firstN + " " + lastN;
//     console.log(fullName);
// }
// getFullName("NotUlan");

// ------------------------------------------
// Return a value

// function square(num) {
//   return num * num;
// }
// console.log(square(4));       // '16'
// var squareOfFive = square(5); 
// console.log(squareOfFive); // 25

// ----- scope

// global scope
// var globl = "global variable";

// function scope() {
//     // local scope
//     var local = "local variable";
//     console.log(globl);
// }
// scope();
// // console.log(local);

// ------------------------------------------
// scope difference in dec/exp

// f();
// function f() {
//     console.log("declaration");
// }

// f2();
// var f2 = function() {
//     console.log("expression");
// }


// ------------------------------------------
// CONTROL FLOW

// if ("condition") {
//   // statements to execute
// }

// ------------------------------------------
// example 1
// var age1 = 14;

// if (age1 <= 16) {
//   console.log('You are not allowed to drive!');
// }
// ------------------------------------------
// example 2

// var temperature = 30;

// if (temperature < 50) {
//   console.log('Cold outside, put on a coat!');
// }
// ------------------------------------------
// else example
// var age2 = 14;
// if (age2 >= 16) {
//   console.log('Yay, you can drive!');
// } else {
//   console.log('Sorry, you have ' + (16 - age2) +
//   ' years until you can drive.');
// }
// ------------------------------------------
// else if example
// var age3 = 30;
// if (age3 >= 35) {
//   console.log('You can vote AND run for President!');
// } else if (age3 >= 30) {
//   console.log('You can vote AND run for the Senate!');
// } else if (age3 >= 18) {
//   console.log('You can vote!');
// } else {
//   console.log('You can\'t vote, but you can write your representatives.');
// }
// ------------------------------------------
// Let's Develop It
// var temp = 29;

// var age = 30;

// if (age >= 0 && age <= 20) {
//     console.log('do somehting');
// } 

// if (age >= 0 || age <= 20) {
//     console.log('do somehting else');
// }

// var age = 30; // = 30
// var yearsAsCitizen = 30; // > 9

// if (age >=30 && yearsAsCitizen > 9) {
//   console.log('You can run for the Senate!');
// } else {
//   console.log('You are not eligible to run for the Senate');
// }


// ------------------------------------------
// Let's Develop It
// var temp = 30;

// if (temp <= 0) {
//     console.log('Freezing outside, stay inside');
// } else if (temp > 0 && temp <= 30) {
//     console.log('Cold outside, wear a coat and a hat');
// } else if(temp > 30 && temp <= 50) {
//     console.log('Cold outside, put on a coat!');
// } else {
//     console.log('Wonderful weather, wear whatever you wish!');
// }

// ------------------------------------------

// const a = 3;
// const b = -2;

// console.log(a > 0 && b > 0);
// // expected output: false

// console.log(a > 0 || b > 0);
// // expected output: true

// console.log(!(a > 0 || b > 0));
// // expected output: false



// ------------------------------------------
// OOP in JavaScript

// function createNewPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function() {
//     alert('Hi! I\'m ' + obj.name + '.');
//   };
//   return obj;
// }
// const salva = createNewPerson('Salva');
// salva.name;
// salva.greeting();

// ------------------------------------------
// OOP in JavaScript

// function Person(name) {
//   this.name = name;
//   this.greeting = function() {
//     alert('Hi! I\'m ' + this.name + '.');
//   };
// }
// let person1 = new Person('Bob');
// let person2 = new Person('Sarah');
// person1.name
// person1.greeting()
// person2.name
// person2.greeting()



