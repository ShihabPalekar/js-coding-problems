function invert(array) {
  return array.map((num) => 0 - num);
}

//better solution
function invert2(array) {
  return array.map((num) => -num);
}
