
export const isNotZero = (num) => {
    if (num) {
        return true;
    } else {
        return false;
    }
};

export const isLessThan42 = (num) => {
    if (num < 42) {
        return true;
    } else {
        return false;
    }
};

export const is42 = (num) => {
    if (num === 42) {
        return true;
    } else {
        return false;
    }
};

export const addColumn = (array) => {
    let result = 0;
    array.forEach(element => {
        result = result + element;
    });
    return result;
};