// import { numbers } from './circle/circle.js';
import { reDraw } from './circle/circle.js';
import { checkAll } from './utils/utils.js';

const solveBtn = document.getElementById('solve');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

solveBtn.addEventListener('click', () => {
    context.clearRect(-325, -325, context.canvas.width, context.canvas.height);
    ringMaker();
    checkAll();
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
};


ringMaker();
reDraw();
