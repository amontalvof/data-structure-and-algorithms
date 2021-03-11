// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

const isIsogram = (str) => {
  const arr = str.toLowerCase().split("");
  const uniqueArr = [...new Set(arr)];
  if (arr.length > uniqueArr.length) {
    return false;
  }
  return true;
};
console.log(isIsogram("abA"));
