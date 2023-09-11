// QUESTION 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings;
let nam: string = "Usman Saeed";
console.log(nam == "Furqan Saeed")

// • Tests using the lower case function;

var nam1: string = "Umar Saeed";
var nam2: string = "umar saeed";
console.log(nam1.toLowerCase() == nam2)


console.log("writing name in lower case and testing it");
console.log(nam === "usman saeed")          // output is false

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 20;
console.log(`sign is greater than                ${num > 30}`);
console.log(`sign is greater than equal to       ${num >= 20}`);
console.log(`sign is less than                   ${num < 10}`)
console.log(`sign is less than or equal to       ${num <= 20}`)

// • Tests using "and" and "or" operators
console.log("Using and operator:");
console.log(num > 15 && num < 20);
console.log("Using or operation");
console.log(num > 10 || num < 10);

// • Test whether an item is in a array
// to find whether an item is in array we basically use .includes((item name or value))
const num4: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num4.includes(4))

// • Test whether an item is not in a array
console.log(!num4.includes(4))                          // simply we use to put ! mark in before array name