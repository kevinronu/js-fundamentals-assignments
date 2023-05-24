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

// Pow
const pow = (x, n) =>
  n === 0 ? 1 : n > 0 ? x * pow(x, n - 1) : pow(x, n + 1) / x;
console.log(pow(2, -2));

// Regular Ball Super Ball
let Ball = function (input) {
  this.ballType = input || "regular";
};
let ball1 = new Ball();
let ball2 = new Ball("super");
console.log(ball1.ballType);
console.log(ball2.ballType);

// Fix my method
// function myFunction() {
//   var MyObject = {
//     objProperty: "string"
//     objMethod: function() {
//       return myObject.objProperty;
// 		}
//   }

//   return myObject.Objmethod();
// };
function myFunction() {
  let MyObject = {
    objProperty: "string",
    objMethod: function () {
      return MyObject.objProperty;
    },
  };
  return MyObject;
}
console.log(myFunction());

// Convert Hash To An Array
function convertHashToArray(hash) {
  let array = Object.entries(hash);
  // for (const [key, value] of Object.entries(hash)) {
  //   array.push([key, value]);
  // }
  // array.sort((a, b) =>
  //   a[0].localeCompare(b[0], "fr", { ignorePunctuation: true })
  // );
  return array.sort();
}
// function convertHashToArray(hash){
//   return Object.entries(hash).sort();
// }
console.log(
  convertHashToArray({ name: "Jeremy", age: 24, role: "Software Engineer" })
);

// Who likes it?
function likes(names) {
  let [name1, name2, name3, ...rest] = names;
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${name1} likes this`;
    case 2:
      return `${name1} and ${name2} like this`;
    case 3:
      return `${name1}, ${name2} and ${name3} like this`;
    default:
      return `${name1}, ${name2} and ${names.length - 2} others like this`;
  }
}
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// Abbreviate a Two Word Name
function abbrevName(name) {
  return name
    .split(" ")
    .map((e) => e[0].toUpperCase())
    .join(".");
}
console.log(abbrevName("Kevin Robles"));

// You only need one - Beginner
function check1(array, x) {
  let boolean = false;
  for (const element of array) {
    if (element == x) {
      boolean = true;
    }
  }
  return boolean;
}
console.log(check1(["what", "a", "great", "kata"], "kat"));

// No Loops 2 - You only need one
const check2 = (array, x) => array.includes(x);
console.log(check2(["what", "a", "great", "kata"], "kat"));

// Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));

// By 3, or not by 3? That is the question . . .
function divisibleByThree(str) {
  return str.split("").reduce((a, b) => Number(a) + Number(b)) % 3 == 0;
}
console.log(divisibleByThree("1"));

// List Filtering
function filter_list(l) {
  // let result = [];
  // for (const e of l) {
  //   if (typeof e == "number") {
  //     result.push(e);
  //   }
  // }
  // return result;
  return l.filter((v) => typeof v == "number");
}
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));

// Find the unique number
// function findUniq(array) {
//   let result = [];
//   for (const element of array) {
//     let other = [];
//     let count = 0;
//     const index = array.indexOf(element);
//     other = array
//       .slice(0, index)
//       .concat(array.slice(index + 1, array.length + 1));
//     for (const iterator of other) {
//       if (element == iterator) {
//         count += 1;
//       }
//     }
//     if (count == 0) {
//       result.push(element);
//     }
//   }
//   return result;
// }
function findUniq(arr) {
  let result = [];
  result.push(arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n)));
  return result;
}
console.log(findUniq([0, 0, 1, 0, 4]));

// Next katas

// Welcome!
const languages = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};
// function greet(language) {
//   let msg = null;
//   for (const [key, value] of Object.entries(languages)) {
//     if (language == key) {
//       msg = value;
//     }
//   }
//   return msg == null ? "Welcome" : msg;
// }
const greet = (language) => languages[language] || languages["english"];
console.log(greet("spanish"));

// The Office II - Boredom Score
const scores = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  "pissing about": 25,
};

// function boredom(staff) {
//   let sum = 0;
//   for (const value of Object.values(staff)) {
//     console.log(sum);
//     sum = sum + scores[value];
//   }
//   if (sum <= 80) {
//     return "kill me now";
//   } else if (sum > 80 && sum < 100) {
//     return "i can handle this";
//   } else if (sum >= 100) {
//     return "party time!!";
//   }
// }

function boredom(staff) {
  sum = Object.values(staff)
    .map((e) => scores[e])
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum <= 80
    ? "kill me now"
    : sum < 100
    ? "i can handle this"
    : "party time!!";
}

console.log(
  boredom({
    tim: "IS",
    jim: "finance",
    randy: "pissing about",
    sandy: "cleaning",
    andy: "cleaning",
    katie: "cleaning",
    laura: "pissing about",
    saajid: "regulation",
    alex: "regulation",
    john: "accounts",
    mr: "canteen",
  })
);

// Sum of a sequence
// const sequenceSum = (begin, end, step) => {
//   if (begin <= end) {
//     return begin + sequenceSum(begin + step, end, step);
//   } else {
//     return 0;
//   }
// };
const sequenceSum = (b, e, s) => (b <= e ? b + sequenceSum(b + s, e, s) : 0);
console.log(sequenceSum(1, 5, 1));

// Array Deep Count
function deepCount(input) {
  let count = input.length;
  for (const element of input)
    if (typeof element == "object") count += deepCount(element);
  return count;
}
console.log(deepCount([1, 2, [3, 4, [5]]]));

// Merged Objects.
function objConcat(array) {
  // let object = {};
  // for (const element of array) Object.assign(object, element);
  // return object;
  return Object.assign({}, ...array);
}
let a = { 1: "1", 2: "2", 3: "3" },
  b = { 3: "4", 5: "6", 6: "7", 7: "8" },
  c = { 5: "9", 8: "9", 6: "12", 23: "35" },
  o = [a, b, c];
console.log(objConcat(o));

// Lazily executing a function
function makeLazy(callback, ...args) {
  return function () {
    // callback(...args);
    return callback(...args);
  };
}
function add(a, b) {
  return a + b;
}
let lazy_value = makeLazy(add, 2, 3);
console.log(lazy_value());
