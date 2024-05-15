function positiveSum(arr) {
  return arr.filter((i) => i >= 0).reduce((num, i) => num + i, 0);
}

//other solution
function positiveSum2(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
