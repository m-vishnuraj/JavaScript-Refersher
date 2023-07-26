// var let const

// ! var
// * re declaration and reassign is possible
// var name;

// name = "Vishnu";

// var name = "Ram";
// console.log(name);

// ! let
// * re declaration not possible and reassign is possible

// let name;
// name = "Vishnu";
// name = "Ram";
// console.log(name);

// ! const
// * re declaration and reassign is not possible
// const name = "Vishnu";

// ! CONDITIONAL STATEMENTS

// * if else

// const age = 18;

// if (age > 18) {
//   alert("You are eligible");
// } else {
//   alert("You are not eligible");
// }

// ! TERNARY OPERATOR
// const age = 18;

// age > 17 ? alert("You are eligible") : alert("You are not eligible");

// ! MAP METHOD

// const numbers = [1, 2, 3, 4, 5];

// const double = numbers.map((numbers) => {
//   return numbers * 2;
// });

// console.log(double);

// ! FILTER METHOD

// const ages = [18, 19, 20, 21, 22, 23, 24, 25];

//* above 20

// const above20 = ages.filter((age) => {
//   return age >= 20;
// });

// console.log(above20);

// !SPREAD OPERATOR

const names = ["Vishnu", "Ram", "Krishna"];

const newNames = [...names, "Rama", "Krishna"];

console.log(newNames);

const numbers = [1, 2, 3, 4, 5];

const newNumbers = [...numbers, 6, 7, 8, 9, 10];

console.log(newNumbers);

// ********** OBJECTS **********

const person = {
  name: "Vishnu",
  age: 18,
};

const newPerson = {
  ...person,
  place: "Kerala",
};

console.log(newPerson);

// ! REST OPERATOR

const user = (name, age, ...hobbies) => {
  console.log(name, age, hobbies);
};
user("Vishnu", 18, "Coding", "Reading", "Writing");
