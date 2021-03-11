// The input array is always sorted

const countUniqueValues = (array) => {
    let count = 0;
    for (let index = 0; index < array.length; index++) {
        const element1 = array[index];
        const element2 = array[index + 1];
        if (element1 != element2) {
            count++;
        }
    }
    return count;
};

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
