//ChatGPT
const arr = [1, 2, 3, 4, 5];

// Remove the element at index 2 (value 3)
const element = arr.splice(2, 1)[0];

// Insert the element at the beginning of the array
arr.unshift(element);

console.log(arr); // Output: [3, 1, 2, 4, 5]
