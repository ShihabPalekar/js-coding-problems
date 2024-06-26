//my solution
function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

//other solutions

function simpleMultiplication2(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}
