import { bottomPlate, bottomMiddlePlate, middlePlate, topMiddlePlate } from './arrays.js';
import { fillall } from './fillColumns.js';

export const isNotZero = (num) => {
    if (num) {
        return true;
    } else {
        return false;
    }
};

export const isNot42 = (num) => {
    if (num < 42 || num > 42) {
        return true;
    } else {
        return false;
    }
};

export const addColumn = (array) => {
    let result = 0;
    for (const item of array) {
        result = result + item;
    }
    return result;
};

export const rotate = (plate) => {
    plate.innermost.push(plate.innermost.shift());
    plate.inner.push(plate.inner.shift());
    plate.outter.push(plate.outter.shift());
    plate.outtermost.push(plate.outtermost.shift());
    plate.position++;
    return plate;
};

const duplicate = (arr, item) => {
    let itemString = JSON.stringify(item);

    let contains = arr.some(function(ele){
        return JSON.stringify(ele) === itemString;
    });
    return contains;
};

let innerMost;
let inner;
let outter;
let outterMost;

export const checkAll = () => {
    let sets = [];
    let logs = 0;
    let set = new Set();
    for (let i = 0; i < 12; i++) {
        [innerMost, inner, outter, outterMost] = fillall(i);
        let column = [innerMost, inner, outter, outterMost];
        set.add(column);
        if (addColumn(column) === 42) {
            console.log(true, column);
        }
        // console.log(set);
        logs++;
        
        for (let j = 0; j < 12; j++) {
            rotate(topMiddlePlate);
            [innerMost, inner, outter, outterMost] = fillall(i);
            let column = [innerMost, inner, outter, outterMost];
            set.add(column);
            if (addColumn(column) === 42) {
                let check = duplicate(sets, column);
                if (!check) {
                    sets.push(column);
                }
                // console.log(true, column);
            }
            // console.log(set);
            logs++;

            for (let k = 0; k < 12; k++) {
                rotate(middlePlate);
                [innerMost, inner, outter, outterMost] = fillall(i);
                let column = [innerMost, inner, outter, outterMost];
                set.add(column);
                if (addColumn(column) === 42) {
                    let check = duplicate(sets, column);
                    if (!check) {
                        sets.push(column);
                    }
                    // console.log(true, column);
                }
                // console.log(set);
                logs++;

                for (let l = 0; l < 12; l++) {
                    rotate(bottomMiddlePlate);
                    [innerMost, inner, outter, outterMost] = fillall(i);
                    let column = [innerMost, inner, outter, outterMost];
                    set.add(column);
                    if (addColumn(column) === 42) {
                        let check = duplicate(sets, column);
                        if (!check) {
                            sets.push(column);
                        }
                        // console.log(true, column);
                    }
                    // console.log(set);
                    logs++;

                    for (let m = 0; m < 12; m++) {
                        rotate(bottomPlate);
                        [innerMost, inner, outter, outterMost] = fillall(i);
                        let column = [innerMost, inner, outter, outterMost];
                        set.add(column);
                        if (addColumn(column) === 42) {
                            let check = duplicate(sets, column);
                            if (!check) {
                                sets.push(column);
                            }
                            // console.log(true, column);
                        }
                        // console.log(set);
                        logs++;
                                
                    }
                    
                }
                
            }
            
        }
        
        // sets.push([...new Set(set)]);
        console.log(sets);
    }
    console.log(logs);
    return sets;
};
