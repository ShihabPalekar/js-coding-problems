function deleteNth(arr, n) {
  new_arr = [];
  arr.forEach((element) => {
    if (new_arr.filter((i) => i === element).length < n) {
      new_arr.push(element);
    }
  });
  return new_arr;
}

//better solution
function limitOccurrences(inputList, N) {
  const countMap = {}; // Object to store count of each number
  const result = []; // Array to store the result

  inputList.forEach((num) => {
    if (!countMap[num]) {
      countMap[num] = 1;
    } else if (countMap[num] < N) {
      countMap[num]++;
    } else {
      return; // Skip adding this number to result
    }

    result.push(num);
  });

  return result;
}

//other solution
function limitOccurrences2(inputList, N) {
  const countMap = {};
  return inputList.filter((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
    return countMap[num] <= N;
  });
}
