import { fillall } from './fillColumns.js';

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
    return plate;
};

export const puzzle = () => {
    for (let i = 0; i < 12; i++) {
        let newColumn = fillall(i);
        let checkColumn = addColumn(newColumn);
        if (checkColumn !== 42) {
            return false;
        }
    } 
    return true;
};