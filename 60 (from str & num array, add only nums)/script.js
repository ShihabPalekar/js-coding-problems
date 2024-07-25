//ChatGPT
const arr = [1, 2, "b", "d", 5, "x"];

//solution 1
const sumOfNumbers = arr.reduce((num, item) => typeof item === 'number' ? num + item : num, 0);

//soution 2
const ans = arr.reduce((num,i) => num + (typeof(i) === "number" ? i : 0), 0) ;
