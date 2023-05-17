// Is n divisible by x and y?
const isDivisible = (n, x, y) => n % x == 0 && n % y == 0;
console.log(isDivisible(12, 4, 3));

// Return Negative
const makeNegative = (num) => (num > 0 ? num * -1 : num);
console.log(makeNegative(3));

// You're a square!
const isSquare = (n) => {
  let i = 0;
  while (i * i < n) {
    i += 1;
  }
  return n == i * i;
};
const isSquare2 = (n) => Number.isInteger(Math.sqrt(n));
console.log(isSquare(5));
console.log(isSquare2(5));

// Grasshopper - Summation
const summation = (num) => (num * (num + 1)) / 2;
console.log(summation(3));

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      console.log("Invalid operation");
  }
}
console.log(basicOp("+", 1, 2));

// Sum of Numbers
let GetSum = function (a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
};
console.log(GetSum(-1, 1));
