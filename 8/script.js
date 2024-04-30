const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];

const merge = (a1, a2) => {
  const newArr = [];
  const length = a1.length < a2.length ? a2.length : a1.length;
  for (let i = 0; i < length; i++) {
    const item1 = a1[i] ? a1[i].toUpperCase() : "";
    const item2 = a2[i] ? a2[i] : "";
    newArr.push(`${item1}${item2}`);
  }
  return newArr;
};

console.log(merge(arr1, arr2));