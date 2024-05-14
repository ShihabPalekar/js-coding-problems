function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((num, i) => num + i, 0);
  }
}

//other approach
function sumB(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
