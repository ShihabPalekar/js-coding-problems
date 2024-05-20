function duplicateEncode(word) {
  let array = [...word.toLowerCase()];
  return array
    .map((letter) => (array.filter((x) => x === letter).length > 1 ? ")" : "("))
    .join("");
}

//better solution
const duplicateEncode2 = (word) =>
  (word = word.toLowerCase()).split``.map((e) =>
    word.indexOf(e) === word.lastIndexOf(e) ? "(" : ")"
  ).join``;

//other solution
function duplicateEncode3(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
