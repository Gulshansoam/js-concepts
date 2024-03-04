// 'var' DataType
// If var has number, string, boolean then it is a primitive datatype in js.

// ***********************open****************************
// var a = 10; // it can be number
// var b = "my name is john doe"; // it can be string too
// var c = true; // it can be boolean too

//---------------------------------------------------------

// var can be reassign and redeclare

// ***********************open****************************

// var a = 20; // o/p:- 20
// a = "i am a string now";
// console.log(a); //o/p:- i am a string now
// var a = 50;
// console.log(a); //o/p:- 50
//---------------------------------------------------------

// hoisting can be achieved in var keyword
// Ques Arise here :- What is hoisting?

// Answer:- Hoisting is default behavior of javascript which moves all declaration on top of the program

// ***********************open****************************
// data(); //o/p:- john
// person = "john";
// console.log(person); //o/p: john
// function data() {
//   var person = "john";
//   console.log(person);
// }
// var person;
// console.log(person); //o/p:- john

//---------------------------------------------------------

// *******************Non-Primitive Datatype Declared Using 'var'*********************************//

var employ = {
  employName: "John",
  age: 34,
  fromOffice: true,
};

console.log(employ);

var arr = ["Doe", 31, false];

console.log(arr[0]); //o/p:- Doe
