function areYouPlayingBanjo(name) {
  return name.toLowerCase().charAt(0) === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

//other solution
function areYouPlayingBanjo2(name) {
  return name[0].toLowerCase() === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}
