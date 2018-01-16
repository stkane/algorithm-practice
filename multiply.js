//multiply two numbers without multiplication operator
//one version uses a while loop, the other uses recursion.
//the recursive version causes a stack overflow error.

const assert = require("assert");

function multiply(a, b) {
  if (a === 0 || b === 0) return 0;
  var c = 0;
  if (b < 0) {
    b = -b;
    a = -a;
  }
  while (b > 0) {
    c += a;
    b -= 1;
  }
  return c;
}

function multiply(a, b) {
  if (a === 0 || b === 0) return 0;
  if (b < 0) {
    b = -b;
    a = -a;
  }
  return (a += multiply(a, b - 1));
}



//tests

assert.equal(multiply(3, 11), 33);
assert.equal(multiply(-7, 4), -28);
assert.equal(multiply(7, -10), -70);
assert.equal(multiply(-4, -5), 20);
assert.equal(multiply(0, 1), 0);
assert.equal(multiply(8, 0), 0);
assert.equal(multiply(-31, 0), 0);
assert.equal(multiply(0, -18), 0);
assert.equal(multiply(0, 0), 0);
assert.equal(multiply(31, 8000), 248000);
assert.equal(multiply(39488, 92719), 3661287872);


