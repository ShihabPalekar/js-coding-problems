//ChatGPT
const arr = [1, 2, "b", "d", 5, "x"];

const sumOfNumbers = arr.reduce((num, item) => typeof item === 'number' ? num + item : num, 0);