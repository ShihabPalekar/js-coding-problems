//ChatGPT
const isValidBraces = (str) => {
  const stack = [];
  const matchingBraces = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.length === 0 || stack.pop() !== matchingBraces[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
