function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  const answer = str
    .split("")
    .filter((i) => !vowels.includes(i.toLowerCase()))
    .join("");
  return answer;
}

//other solutions
function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, "");
}
