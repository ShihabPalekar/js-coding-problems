//Without using Set - solution 1
function uniqueValues(arr) {
  const uniqueArr = [];

  arr.forEach((element) => {
    if (!uniqueArr.includes(element)) {
      uniqueArr.push(element);
    }
  });

  return uniqueArr;
}


//Without using Set - solution 2
const array1 = [1, 2, 3, 3, 4, 5, 6, 4, 2, 1, 5, 8];
const ans1 = [];

array1.forEach((i) => !ans1.includes(i) && ans1.push(i));
console.log(ans1);


//With using Set
function uniqueValuesSet(arr) {
  return [...new Set(arr)];
}


//Without using array.includes
function uniqueValues2(arr) {
  const uniqueArr = [];
  const seen = {};

  arr.forEach((element) => {
    if (!seen[element]) {
      seen[element] = true;
      uniqueArr.push(element);
    }
  });

  return uniqueArr;
}
