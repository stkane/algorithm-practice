// Your company built an in-house calendar tool 
// called HiCal. You want to add a feature to see 
// the times in a day when everyone is available.

// To do this, you’ll need to know when any team 
// is having a meeting. In HiCal, a meeting is stored 
// as objects ↴ with integer properties startTime and 
// endTime. These integers represent the number of 
// 30-minute blocks past 9:00am.

// For example:

//   {startTime: 2, endTime: 3}  // meeting from 10:00 – 10:30 am
// {startTime: 6, endTime: 9}  // meeting from 12:00 – 1:30 pm

// Write a function mergeRanges() that takes an array of multiple 
// meeting time ranges and returns an array of condensed ranges.

function mergeRanges(meetings) {
  meetings.sort((a, b) => a.startTime - b.startTime);
  for(let i = 0; i < meetings.length - 1; i++){
    let a = meetings[i];
    let b = meetings[i + 1];
    if((a.startTime >= b.startTime && a.startTime <= b.endTime) || (a.endTime >= b.startTime && a.startTime <= b.endTime)) {
      let earlyStart = Math.min(a.startTime, b.startTime);
      let lateEnd = Math.max(a.endTime, b.endTime);
      meetings.splice(i, 2, {startTime: earlyStart, endTime: lateEnd});
      i--;
    }
  }
  return meetings;
}


// Tests

let desc = 'meetings overlap';
let actual = mergeRanges([{startTime: 1, endTime: 3}, {startTime: 2, endTime: 4}]);
let expected = [{startTime: 1, endTime: 4}];
assertArrayEquals(actual, expected, desc);

desc = 'meetings touch';
actual = mergeRanges([{startTime: 5, endTime: 6}, {startTime: 6, endTime: 8}]);
expected = [{startTime: 5, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'meeting contains other meeting';
actual = mergeRanges([{startTime: 1, endTime: 8}, {startTime: 2, endTime: 5}]);
expected = [{startTime: 1, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'meetings stay separate';
actual = mergeRanges([{startTime: 1, endTime: 3}, {startTime: 4, endTime: 8}]);
expected = [{startTime: 1, endTime: 3}, {startTime: 4, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'multiple merged meetings';
actual = mergeRanges([
  {startTime: 1, endTime: 4},
  {startTime: 2, endTime: 5},
  {startTime: 5, endTime: 8},
]);
expected = [{startTime: 1, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'meetings not sorted';
actual = mergeRanges([
  {startTime: 5, endTime: 8},
  {startTime: 1, endTime: 4},
  {startTime: 6, endTime: 8},
]);
expected = [{startTime: 1, endTime: 4}, {startTime: 5, endTime: 8}];
assertArrayEquals(actual, expected, desc);

desc = 'sample input';
actual = mergeRanges([
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 5},
  {startTime: 4, endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9, endTime: 10}, 
]);
expected = [
  {startTime: 0, endTime: 1},
  {startTime: 3, endTime: 8},
  {startTime: 9, endTime: 12},
];
assertArrayEquals(actual, expected, desc);

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}
