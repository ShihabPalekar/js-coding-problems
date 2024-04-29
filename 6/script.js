const findNum = (arr) => {
  let count = {};
  arr.forEach((num) => {
    count[num] ? count[num]++ : (count[num] = 1);
  });

  let mostRepeated = null;
  let maxCount = 0;

  for (let num in count) {
    if (count[num] > maxCount) {
      maxCount = count[num];
      mostRepeated = num;
    }
  }

  return mostRepeated;
};
