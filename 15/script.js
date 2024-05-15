function DNAtoRNA(dna) {
  return dna
    .split("")
    .map((i) => (i === "T" ? "U" : i))
    .join("");
}

//Other Solutions
function DNAtoRNA2(dna) {
  return dna.replace(/T/g, "U");
}

const DNAtoRNA3 = (dna) => dna.replace(/T/g, "U");

function DNAtoRNA4(dna) {
  return dna.replaceAll("T", "U");
}

function DNAtoRNA5(dna) {
  return dna.split("T").join("U");
}
