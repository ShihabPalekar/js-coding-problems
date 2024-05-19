function solution(str, ending) {
  return str.slice(-ending.length) === ending;
}

//better solution
function solution2(str, ending) {
  return str.endsWith(ending);
}
