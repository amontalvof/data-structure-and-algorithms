// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result. It should remove all values from list a, which are present in list b.

const arrayDiff = (a, b) => {
  return a.filter((e) => !b.includes(e));
};

const a = [3, 4];
const b = [3];
