//generate fib sequence using while loop

function fib(){
  var fib = [0, 1];
  while(fib.length < 20){
    let newNum = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(newNum);
  }
  return fib;
}
