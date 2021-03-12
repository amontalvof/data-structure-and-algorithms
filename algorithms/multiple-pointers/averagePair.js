// The input array is always sorted

const averagePair = (arr,average) => {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let avg = (arr[left] + arr[right])/2;
        if (avg === average) {
            return true;
        } else if (avg < average) {
            left++;
        } else {
            right--;
        }
    }
    return false
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
