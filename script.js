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
const name = "Vishnu";

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

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((numbers) => {
  return numbers * 2;
});

console.log(double);

// ! FILTER METHOD

const ages = [18, 19, 20, 21, 22, 23, 24, 25];

// above 20

const above20 = ages.filter((age) => {
  return age >= 20;
});

console.log(above20);
