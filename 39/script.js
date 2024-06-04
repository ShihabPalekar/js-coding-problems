//my solution
function sumDigPow(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    let sum = [...`${i}`].reduce(
      (a, b, idx) => a + Number(Math.pow(b, idx + 1)),
      0
    );
    sum === i && arr.push(i);
  }
  return arr;
}
