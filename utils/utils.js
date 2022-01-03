// import { reDraw } from '../circle/circle.js';
// import { bottomPlate, bottomMiddlePlate, middlePlate, topMiddlePlate, topPlate } from './arrays.js';
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

// let innerMost;
// let inner;
// let outter;
// let outterMost;

// export const checkAll = () => {
//     for (let i = 0; i < 12; i++) {
//         topPlate.position = i;
//         for (let j = 0; j < 12; j++) {
//             rotate(topMiddlePlate);
//             for (let k = 0; k < 12; k++) {
//                 rotate(middlePlate);
//                 for (let l = 0; l < 12; l++) {
//                     rotate(bottomMiddlePlate);
//                     for (let m = 0; m < 12; m++) {
                        
//                         rotate(bottomPlate);
                        
//                         [innerMost, inner, outter, outterMost] = fillall(i);
//                         let column = [innerMost, inner, outter, outterMost];
                        
//                         if (addColumn(column) === 42) {
//                             if (puzzle()) {
//                                 reDraw();
//                             }
//                         }                                
//                     }
                    
//                 }
                
//             }
            
//         }
//     }
// };

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