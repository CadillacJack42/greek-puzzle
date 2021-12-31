// IMPORT MODULES under test here:

import { bottomPlate } from '../utils/arrays.js';
import { addColumn, rotate } from '../utils/utils.js';


const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Function should "rotate" the plate', (expect) => {
    const expected = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 4];
    const arr = rotate(bottomPlate);
    const actual = arr.inner;
    expect.deepEqual(actual, expected);
});

test('Should return the sum of all values in array', (expect) => {
    const expected = 114;
    const arr = bottomPlate.inner;
    const actual = addColumn(arr);
    expect.equal(actual, expected);
});



