// import { numbers } from './circle/circle.js';
import { checkAll } from './utils/utils.js';


const ringMaker = (r) => {
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

checkAll();
ringMaker(80);
ringMaker(140);
ringMaker(205);
ringMaker(265);
// ringMaker(310);
