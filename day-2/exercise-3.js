// Array.reduce
//
// 1. Add all of the numbers from 'value' together
//    using reduce
// Expected output:
// 190

const values = [100, 20, -50, 60, -10, 70];

const result = values.reduce((previous_value, current_value) =>
  previous_value+current_value,0
); // Write your answer here

// Do not remove this and do not change the
//    variable 'result' name above. It's
//    used for the tests.
module.exports = result;
