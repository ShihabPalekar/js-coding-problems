const getMiddle = (s) => {
  if (s.length === 1) {
    return s;
  } else if (s.length % 2 === 0) {
    return `${s.charAt((s.length / 2) -1)}${s.charAt(s.length / 2)}`;
  } else if (s.length % 2 === 1) {
    return s.charAt(s.length - Math.round(s.length / 2));
  }
};

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("a"))

// Better Solution
// return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
