function sumArray(array) {
  return !array
    ? 0
    : array
        .sort((a, b) => b - a)
        .slice(1, -1)
        .reduce((num, i) => num + i, 0);
}

//here i have used !array coz the value passed in the argument can be null
