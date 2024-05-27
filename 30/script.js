function removeChar(str) {
  return str
    .split("")
    .slice(1, str.length - 1)
    .join("");
}

//better solution
function removeChar2(str) {
  return str.slice(1, -1);
}
