// Given a list lst and a number N, create a new 
// list that contains each number of lst at most 
// N times without reordering. For example if N = 2, 
// and the input is [1,2,3,1,2,1,2,3], you take 
// [1,2,3,1,2], drop the next [1,2] since this would
// lead to 1 and 2 being in the result 3 times, and 
// then take 3, which leads to [1,2,3,1,2,3].


function deleteNth(arr,x){
  count = {};
  for(let i = 0; i < arr.length; i++){
  	if(count[arr[i]] === undefined) {
    	count[arr[i]] = 1;
    }
    else if (count[arr[i]] < x) {
    	count[arr[i]]++;
    }
    else {
    	arr.splice(i, 1);
      i -=1;
    }
  };
  return arr;
}