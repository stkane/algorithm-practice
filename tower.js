// build a tower using only the number
// of total floors as input, for example,
// a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]

function towerBuilder(nFloors) {
	let star = '*';
  let maxFloor = star.repeat((nFloors * 2) - 1);
  let towerArr = Array(nFloors).fill(maxFloor);
  let blankNum = 0;
  let blank = ' ';
  
  for(let i = nFloors - 1; i >= 0; i--) {
    towerArr[i] = towerArr[i].substr(blankNum);
    let blanks = blank.repeat(blankNum/2);
    towerArr[i] = blanks + towerArr[i] + blanks
    blankNum += 2
  };
  return towerArr;
}
