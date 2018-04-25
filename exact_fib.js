// Write a function fib() that takes an 
// integer nn and returns the nnth Fibonacci 
// number.

// Let's say our Fibonacci series is 0-indexed 
// and starts with 0. So:

// fib(0);  // => 0
// fib(1);  // => 1
// fib(2);  // => 1
// fib(3);  // => 2
// fib(4);  // => 3


function fib(number){
    let previousNum = 0;
    let currentNum = 1;
    let newNum = 0;
    for(let i = 1; i < number; i++){
        newNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = newNum;
    }
    return currentNum;
}
