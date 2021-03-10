const areThereDuplicates = (...params) => {
    const lookup = {};
    for (let i = 0; i < params.length; i++) {
        let param = params[i];
        lookup[param] ? (lookup[param] += 1) : (lookup[param] = 1);
    }

    for (let index = 0; index < params.length; index++) {
        const element = params[index];
        if (lookup[element] > 1) {
            return true;
        }
    }
    return false;
};

console.log(areThereDuplicates('a', 'b', 'c', 'a'));
