const flattenArr = (arr) => {
  let flattened = [];

  function flatten(arr) {
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        flattened.push(item);
      }
    });
  }

  flatten(arr);
  return flattened;
};

console.log(flattenArr([2,4,[2,8,6],7,9,[3,2,[4,2,[1,2]]]]))

//  With using default array.flat
//  return arr.flat(Infinity)