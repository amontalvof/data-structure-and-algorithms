// Given: an array containing hashes of names
// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

const listNames = (arr) => {
  const reducer = arr.reduce((acc, value) => {
    return [...acc, value.name];
  }, []);
  if (reducer.length > 1) {
    const x = reducer.pop();
    return reducer.join(", ") + " & " + x;
  }
  return reducer.length === 1 ? reducer[0] : "";
};

const arr = [{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }];

console.log(listNames(arr));
