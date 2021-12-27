
import { isNotZero, addColumn } from './utils/utils.js';
import { bottomPlate, bottomMiddlePlate, middlePlate, topMiddlePlate, topPlate } from './utils/arrays.js';

let solutions = [];

let innerMost;
let inner;
let outter;
let outterMost;

const puzzle = () => {
    for (let i = 0; i < 12; i++) {
        findInnerMost(i);
        findInner(i);
        findoutter(i);
        findoutterMost(i);
        let column = [innerMost, inner, outter, outterMost];
        console.log(addColumn(column));
    }

};

const findInnerMost = (i) => {
    if (topPlate.innermost[i] === 0) {
        if (topMiddlePlate.innermost[i] === 0) {
            if (middlePlate.innermost[i] === 0) {
                if (bottomMiddlePlate.innermost[i] === 0) {
                    innerMost = bottomPlate.innermost[i];
                } else {
                    innerMost = bottomMiddlePlate.innermost[i];
                }
            } else {
                innerMost = middlePlate.innermost[i];
            }
        } else {
            innerMost = topMiddlePlate.innermost[i];
        }
    } else {
        innerMost = topPlate.innermost[i];
    }
};
const findInner = (i) => {
    if (topPlate.inner[i] === 0) {
        if (topMiddlePlate.inner[i] === 0) {
            if (middlePlate.inner[i] === 0) {
                if (bottomMiddlePlate.inner[i] === 0) {
                    inner = bottomPlate.inner[i];
                } else {
                    inner = bottomMiddlePlate.inner[i];
                }
            } else {
                inner = middlePlate.inner[i];
            }
        } else {
            inner = topMiddlePlate.inner[i];
        }
    } else {
        inner = topPlate.inner[i];
    }
};
const findoutter = (i) => {
    if (topPlate.outter[i] === 0) {
        if (topMiddlePlate.outter[i] === 0) {
            if (middlePlate.outter[i] === 0) {
                if (bottomMiddlePlate.outter[i] === 0) {
                    outter = bottomPlate.outter[i];
                } else {
                    outter = bottomMiddlePlate.outter[i];
                }
            } else {
                outter = middlePlate.outter[i];
            }
        } else {
            outter = topMiddlePlate.outter[i];
        }
    } else {
        outter = topPlate.outter[i];
    }
};
const findoutterMost = (i) => {
    if (topPlate.outtermost[i] === 0) {
        if (topMiddlePlate.outtermost[i] === 0) {
            if (middlePlate.outtermost[i] === 0) {
                if (bottomMiddlePlate.outtermost[i] === 0) {
                    outterMost = bottomPlate.outtermost[i];
                } else {
                    outterMost = bottomMiddlePlate.outtermost[i];
                }
            } else {
                outterMost = middlePlate.outtermost[i];
            }
        } else {
            outterMost = topMiddlePlate.outtermost[i];
        }
    } else {
        outterMost = topPlate.outtermost[i];
    }
};

puzzle();
