function countSmileys(arr) {
  let count = 0;
  arr.forEach((i) => {
    const char = i.split("");
    const eyes = [":", ";"];
    const nose = ["-", "~"];
    const mouth = [")", "D"];

    if (char.length === 2) {
      eyes.includes(char[0]) && mouth.includes(char[1]) && count++;
    } else if (char.length === 3) {
      eyes.includes(char[0]) &&
        nose.includes(char[1]) &&
        mouth.includes(char[2]) &&
        count++;
    }
  });
  return count;
}

//other solutions
function countSmileys2(arr) {
  return arr.filter((x) => /^[:;][-~]?[)D]$/.test(x)).length;
}

function countSmileys3(arr) {
  var smileys = [
    ":)",
    ";)",
    ":-)",
    ";-)",
    ";~)",
    ":~)",
    ":D",
    ";D",
    ":-D",
    ":~D",
    ";-D",
    ";~D",
  ];
  var count = 0;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < smileys.length; j++) {
      if (arr[i] === smileys[j]) {
        count++;
      }
    }
  }
  return count;
}
