// import { numbers } from './circle/circle.js';
import { reDraw } from './circle/circle.js';
import { rotate } from './utils/utils.js';
import { bottomMiddlePlate, middlePlate, topMiddlePlate, topPlate } from './utils/arrays.js';
import { checkAll } from './utils/solve.js';


const solveBtn = document.getElementById('solve');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const innerMostRing = document.getElementById('innerMost');
const innerRing = document.getElementById('inner');
const outterRing = document.getElementById('outter');
const outterMostRing = document.getElementById('outterMost');

solveBtn.addEventListener('click', () => {
    context.clearRect(-325, -325, context.canvas.width, context.canvas.height);
    ringMaker();
    checkAll();
});


innerMostRing.addEventListener('click', () => {
    rotate(topPlate);
    context.clearRect(-325, -325, context.canvas.width, context.canvas.height);
    ringMaker();
    reDraw();
});

innerRing.addEventListener('click', () => {
    rotate(topMiddlePlate);
    context.clearRect(-325, -325, context.canvas.width, context.canvas.height);
    ringMaker();
    reDraw();
});

outterRing.addEventListener('click', () => {
    rotate(middlePlate);
    context.clearRect(-325, -325, context.canvas.width, context.canvas.height);
    ringMaker();
    reDraw();
});

outterMostRing.addEventListener('click', () => {
    rotate(bottomMiddlePlate);
    context.clearRect(-325, -325, context.canvas.width, context.canvas.height);
    ringMaker();
    reDraw();
});




const rings = (r) => {
    const canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'black';
        ctx.stroke();
    }
};

const ringMaker = () => {
    rings(80);
    rings(140);
    rings(205);
    rings(265);
    rings(325);
};


ringMaker();
reDraw();
