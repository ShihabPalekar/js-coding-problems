function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((num, i) => num + i, 0);
  }
}
