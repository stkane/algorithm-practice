//given an array of numbers, count how many
//times the maximum number appears in the
//array

function birthdayCakeCandles(ar) {
 var tallest = Math.max(...ar);
 var count = 0;
 ar.map(n => n === tallest ? count++ : count)
 return count;
}
