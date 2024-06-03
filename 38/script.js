function betterThanAverage(classPoints, yourPoints) {
  const classTotal = classPoints.reduce((num, i) => num + i, 0);
  const avg = (classTotal + yourPoints) / (classPoints.length + 1);
  return yourPoints > avg ? true : false;
}

//other solutions
function betterThanAverage2(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  );
}

function betterThanAverage3(classPoints, yourPoints) {
  const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
  const classAverage = classPointsSum / classPoints.length;
  const isBetter = yourPoints > classAverage;
  return isBetter;
}
