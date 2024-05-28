function solution(string) {
  return string
    .split("")
    .map((i) => (i.toUpperCase() === i ? ` ${i}` : i))
    .join("");
}

//other solutions
function solution2(string) {
  return string.replace(/([A-Z])/g, " $1");
}


