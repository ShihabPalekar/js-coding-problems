function fakeBin(x) {
  let newStr = "";
  let arr = x.split("");
  arr.forEach((num) => (num < 5 ? (newStr += 0) : (newStr += 1)));
  return newStr;
}

//  Better Solution
//  return x.split('').map(n => n < 5 ? 0 : 1).join('');
