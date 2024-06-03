function openOrSenior(data) {
  return data.map((i) => (i[0] >= 55 && i[1] > 7 ? "Senior" : "Open"));
}


//other solution
function openOrSenior2(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
