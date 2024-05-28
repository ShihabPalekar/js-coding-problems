function abbrevName(name) {
  return name
    .split(" ")
    .map((i) => i.charAt(0).toUpperCase())
    .join(".");
}

//other approach
function abbrevName2(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

function abbrevName3(name) {
  const [firstName, lastName] = name.split(" ");
  const firstInitial = firstName.charAt(0).toUpperCase();
  const secondInitial = lastName.charAt(0).toUpperCase();
  return firstInitial + "." + secondInitial;
}
