function getAge(inputString) {
  return Number(inputString.split(" ")[0]);
}

//other solutions
function getAge2(inputString) {
  return parseInt(inputString);
}

function getAge(inputString) {
  return +inputString[0];
}
