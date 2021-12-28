
import { checkAll } from './utils/utils.js';

let solutionsArray = [];
let counts = {};

const [set, solutions] = checkAll();
console.log(set);
console.log(solutions);
for (const num of solutions) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}


console.log(counts); 

