//my solution
const isPalindrome = (str) => {
  return str.toLowerCase() === str.toLowerCase().split("").reverse().join("");
};
