// Consider a staircase of size n = 4:
// #
// ##
// ###
// ####
// Observe that its base and height are both equal to n, 
// and the image is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.
// Write a program that prints a staircase of n size .

// Input Format
// A single integer, n, denoting the size of the staircase.

// Output Format
// Print a staircase of n size using # symbols and spaces.


function staircase(n) {
  for(let i = n - 1; i >= 0; i--) {
    let hashes = '#'.repeat(n - i);
    let spaces = ' '.repeat(i)
    console.log(spaces + hashes)
  }
}
