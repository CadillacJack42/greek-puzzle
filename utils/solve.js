import { bottomPlate, bottomMiddlePlate, middlePlate, topMiddlePlate, topPlate } from './arrays.js';
import { rotate, puzzle, addColumn, fillall } from './utils.js';
import { reDraw } from '../circle/circle.js';

let innerMost;
let inner;
let outter;
let outterMost;

export const checkAll = () => {
    for (let i = 0; i < 12; i++) {
        topPlate.position = i;
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
                            if (puzzle()) {
                                reDraw();
                            }
                        }                                
                    }
                    
                }
                
            }
            
        }
    }
};