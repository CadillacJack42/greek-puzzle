
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
    for (const item of array) {
        result = result + item;
        if (result > 42) {
            console.log('RESULT: ' + result);
            console.log('ITEM: ' + item);
            result = 'OVER';
            return result;
        }
    }
    return result;
};


export const checkDown = (plates, i) => {
    // This wont work. plates is an object 

    return plates[i + 1];
};

export const checkAll = (value, newPlate) => {
    //  newPlate is going to come from the above function 
    //  (checkDown)
    //  It is qeueing up the next plate to inspect

    let newValue;
    // newVaue will be what is checked against 42.
    // If it breaks 42, it ends, else, it continues.
    // On match 42, store in solutions

    // poistion is each value stored in 
    // the newPlate (should be 12 values)
    for (const position of newPlate) {
        newValue = value + position;
        console.log(newValue);
    }

};
