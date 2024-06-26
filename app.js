// DZ 1

let n = +prompt("введите число");
if (n >= 0 && n <= 100) {
  console.log("находится в диапазоне");
} else {
  console.log("не находится в диапазоне");
}

// DZ 2

const engineers = {
  Den: 1000,
  Matt: 5000,
  Steve: 2000,
};

for (const key in engineers) {
  let result = engineers[key];
  console.log(`Заработная плата ${key} составляет ${engineers[key]}`);
}

// DZ 3

const array = ["first", "two", 3, null, true, 2, 5];

for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    console.log(array[i]);
  }
}

// DZ 4

let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

for (let i = 0; i < numbers.length; i++) {
  console.log(`Индексу ${i} соответсвует число ${numbers[i]}`);
}

// DZ 5
let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

for (let i = 0; i < questions.length; i++) {
  questions[i].usersAnswer = null;
}

console.log(questions);

// DZ 6

let numbers = [
  42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70, 71, 43, 654, 44,
];

// 1

for (let key of numbers) {
  console.log(key);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
  console.log(sum);
}

// 3

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum = sum + numbers[i];
    console.log(sum);
  }
}

// 4

max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

5;

max = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers.indexOf(numbers[i]); // indexOf возвращает первый индекс, по которому данный элемент может быть найден в массиве
  }
}
console.log(max);

// DZ 7

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];

let arrpl = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    arrpl.push(arr[i]);
  }
}
console.log(arrpl); // для проверки

// DZ 8

let nums = [5, 4, 3, 8, 0];

let limit = 5;

let arr = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] >= limit) {
    arr.push(nums[i]);
  }
}
console.log(arr);

// DZ 9

const users = [
  { name: "Vasya", age: 23 },
  { name: "Olya", age: 12 },
  { name: "Anna", age: 22 },
  { name: "Alex", age: 18 },
  { name: "Valery", age: 8 },
];

const key = "age";
const item = "name";

for (let i = 0; i < users.length; i++) {
  if (users[i][key] > 15) {
    console.log(users[i][item]);
  }
}

// DZ 10

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

// 1

let arr = [];

for (const key of vegetables) {
  arr.push({ word: key, length: key.length });
}

console.log(arr);

// 2

let arr = [];

for (let i = 0; i < vegetables.length; i++) {
  console.log(`${vegetables[i]} - ${vegetables[i].length}`);
}
