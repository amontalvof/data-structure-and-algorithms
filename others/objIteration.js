var obj = { a: 5, b: 7, c: 9 };
var arr = [5, 8, 9, 1, 2, 3];

const findValueExist = (obj, arr) => {
  Object.entries(obj).forEach(([key, value]) => {
    console.log(value + " : " + arr.includes(value));
  });
};

findValueExist(obj, arr);
