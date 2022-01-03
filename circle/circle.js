import { fillRings } from '../utils/fillColumns.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;

export const numbers = (radius, array) => {
    let ang;
    ctx.font = '30px arial';
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'blue';
    for (let i = 0, num = 1; i < array.length; i++, num++) {
        const element = array[i];
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(element, 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
    }
};

export const reDraw = () => {
    const rings = fillRings();
    numbers(125, rings[3]);
    numbers(200, rings[2]);
    numbers(275, rings[1]);
    numbers(350, rings[0]);
};
