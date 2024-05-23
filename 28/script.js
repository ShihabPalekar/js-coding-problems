function getSum(a, b) {
  if (a === b) {
    return a;
  } else {
    let lowestNum = a < b ? a : b;
    let highestNum = a > b ? a : b;
    let sum = 0;
    for (let i = lowestNum; i <= highestNum; i++) {
      sum += i;
    }
    return sum;
  }
}
