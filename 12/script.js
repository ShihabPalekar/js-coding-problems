function findGreatestNumbers(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let isGreatest = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isGreatest = false;
        break;
      }
    }
    if (isGreatest) {
      result.push(arr[i]);
    }
  }

  return result;
}
