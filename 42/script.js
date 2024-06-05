function getGrade(s1, s2, s3) {
  const avg = (s1 + s2 + s3) / 3;
  if (avg <= 100 && avg >= 90) {
    return "A";
  } else if (avg < 90 && avg >= 80) {
    return "B";
  } else if (avg < 80 && avg >= 70) {
    return "C";
  } else if (avg < 70 && avg >= 60) {
    return "D";
  } else {
    return "F";
  }
}

//other solutions
function getGrade2(s1, s2, s3) {
  avg = (s1 + s2 + s3) / 3;
  if (avg < 60) return "F";
  else if (avg < 70) return "D";
  else if (avg < 80) return "C";
  else if (avg < 90) return "B";
  else return "A";
}

function getGrade3(s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3;
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}
