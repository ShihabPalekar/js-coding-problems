const rotate = (arr) => {
  for (let i = 0; i < 3; i++) {
    const lastItem = arr.pop();
    arr.unshift(lastItem);
  }
  return arr;
};
