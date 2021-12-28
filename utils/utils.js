import { bottomPlate, bottomMiddlePlate, middlePlate, topMiddlePlate } from './arrays.js';
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
    plate.position++;
    return plate;
};

const duplicate = (arr, item) => {
    const itemString = JSON.stringify(item);

    const contains = arr.some(function(ele){
        return JSON.stringify(ele) === itemString;
    });
    return contains;
};

let innerMost;
let inner;
let outter;
let outterMost;




export const checkAll = () => {
    let tmPosition = 0;
    let mPosition = 0;
    let bmPosition = 0;
    let bPosition = 0;
    let solutions = [];
    let sets = [];
    for (let i = 0; i < 12; i++) {
        const set = new Set();
        
        
        for (let j = 0; j < 12; j++) {
            rotate(topMiddlePlate);
            for (let k = 0; k < 12; k++) {
                rotate(middlePlate);
                for (let l = 0; l < 12; l++) {
                    rotate(bottomMiddlePlate);
                    for (let m = 0; m < 12; m++) {
                        
                        rotate(bottomPlate);
                        [innerMost, inner, outter, outterMost] = fillall(i);
                        let column = [innerMost, inner, outter, outterMost];
                        
                        if (addColumn(column) === 42) {
                            
                            let check = duplicate(sets, column);
                            
                            if (!check) {
                                const platePositions = [];
                                tmPosition = topMiddlePlate.position % 12;
                                mPosition = middlePlate.position % 12;
                                bmPosition = bottomMiddlePlate.position % 12;
                                bPosition = bottomPlate.position % 12;
                                platePositions.push(tmPosition, mPosition, bmPosition, bPosition);
                                solutions.push(platePositions);
                                sets.push(column);
                            }
                        }                                
                    }
                    
                }
                
            }
            
        }
    }
    console.log(solutions);
    console.log(sets);
    return [sets, solutions];
};
