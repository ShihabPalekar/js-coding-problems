function getAge(inputString) {
  return Number(inputString.split(" ")[0]);
}

//other solutions
function getAge2(inputString) {
  return parseInt(inputString);
}

function getAge3(inputString) {
  return parseInt(inputString[0]);
}

function getAge4(inputString) {
  return +inputString[0];
}
