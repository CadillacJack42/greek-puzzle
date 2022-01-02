import { bottomPlate, bottomMiddlePlate, middlePlate, topMiddlePlate, topPlate } from './arrays.js';


export const findInnerMost = (i) => {
    let innerMost;
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
    return innerMost;
};

export const findInner = (i) => {
    let inner;
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
    return inner;
};

export const findoutter = (i) => {
    let outter;
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
    return outter;
};

export const findoutterMost = (i) => {
    let outterMost;
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
    return outterMost;
};

export const fillall = (i) => {
    const innerMost = findInnerMost(i);
    const inner = findInner(i);
    const outter = findoutter(i);
    const outterMost = findoutterMost(i);

    return [innerMost, inner, outter, outterMost];
};

export const fillRings = () => {
    let fourthRing = [];
    let thirdRing = [];
    let secondRing = [];
    let firstRing = [];

    let innerMost;
    let inner;
    let outter;
    let outterMost;

    for (let i = 0; i < 12; i++) {
        [innerMost, inner, outter, outterMost] = fillall(i);
        fourthRing.push(outterMost);
        thirdRing.push(outter);
        secondRing.push(inner);
        firstRing.push(innerMost);
        
    }

    return [fourthRing, thirdRing, secondRing, firstRing];

};