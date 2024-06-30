const common = (str) => {
  const arr = str.split("");
  const count = {};
  arr.forEach((i) => {
    if (count[i]) {
      count[i]++;
    } else {
      count[i] = 1;
    }
  });

  let mostRepeated = "";
  let maxCount = 0;

  for (let letter in count) {
    if (count[letter] > maxCount) {
      mostRepeated = letter;
      maxCount = count[letter];
    }
  }

  return mostRepeated;
};

//shorter way to write this
const common2 = (str) => {
  const count = {};
  let mostRepeated = "";
  let maxCount = 0;

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;

    if (count[char] > maxCount) {
      mostRepeated = char;
      maxCount = count[char];
    }
  }

  return mostRepeated;
};

//NOTE: In these both examples, if there is more than one alphabet having max count, the code will return the first alphabet having max count

/*-----------------------------------------------*/

//if there is more than one alphabet having max count, this code will return the last alphabet having max count
const common3 = (str) => {
  const arr = str.split("");
  const count = {};

  // Count frequencies of each character
  arr.forEach((i) => {
    if (count[i]) {
      count[i]++;
    } else {
      count[i] = 1;
    }
  });

  let mostRepeated = "";
  let maxCount = 0;

  for (let letter in count) {
    if (count[letter] >= maxCount) {
      mostRepeated = letter;
      maxCount = count[letter];
    }
  }

  return mostRepeated;
};

/*-----------------------------------------------*/

//In case of multiple alphabets having max count, this code will return an array of all alphabets with maxCount
const common4 = (str) => {
  const arr = str.split("");
  const count = {};

  // Count frequencies of each character
  arr.forEach((char) => {
    count[char] = (count[char] || 0) + 1;
  });

  let maxCount = 0;

  // Find the maximum frequency
  for (let char in count) {
    if (count[char] > maxCount) {
      maxCount = count[char];
    }
  }

  // Collect characters with the maximum frequency
  const mostRepeated = [];
  for (let char in count) {
    if (count[char] === maxCount) {
      mostRepeated.push(char);
    }
  }

  return mostRepeated;
};

/*-----------------------------------------------*/
