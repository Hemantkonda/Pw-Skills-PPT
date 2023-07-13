// Q1

function countWords(text) {
    const words = text.split(' ');
    const wordCount = new Map();

    for (const word of words) {
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        } else {
            wordCount.set(word, 1);
        }
    }

    return wordCount;
}

const text = "You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string";
const wordCountMap = countWords(text);
console.log(wordCountMap);


// Q2

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);


// Q3

function swapValues(x, y) {
  [x, y] = [y, x];
  return [x, y];
}

let a = 5;
let b = 10;
console.log(swapValues(a, b));


// Q4

function extractElements(arr) {
  const [first, second, ...rest] = arr;
  const last = rest.pop();
  return [first, second, last];
}

const numbers = [1, 2, 3, 4, 5];
console.log(extractElements(numbers));


// Q5

function findMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}

const numbers = [5, 2, 7, 1, 9];
console.log(findMinMax(numbers));


// Q6

function extractPersonInfo(person) {
  const { name, address: { street } } = person;
  return { name, street };
}

const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "B8, Block B, Industrial Area",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh"
  }
};

const { name, street } = extractPersonInfo(person);
console.log(name);   // Output: Mithun
console.log(street); // Output: B8, Block B, Industrial Area
