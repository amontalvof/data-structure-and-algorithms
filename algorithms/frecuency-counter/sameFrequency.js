const sameFrequency = (number1, number2) => {
    const str1 = String(number1);
    const str2 = String(number2);

    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};
    for (let i = 0; i < str1.length; i++) {
        let digit = str1[i];
        lookup[digit] ? (lookup[digit] += 1) : (lookup[digit] = 1);
    }

    for (let i = 0; i < str2.length; i++) {
        let digit = str2[i];
        if (!lookup[digit]) {
            return false;
        } else {
            lookup[digit] -= 1;
        }
    }

    return true;
};

console.log(sameFrequency(3589578, 5879385));
