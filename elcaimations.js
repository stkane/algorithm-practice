// Description:
// Each exclamation mark weight is 2; Each 
// question mark weight is 3. Put two string 
// left and right to the balance, Are they 
// balanced?

// If the left side is more heavy, return "Left"; 
// If the right side is more heavy, return "Right"; 
// If they are balanced, return "Balance".

// Examples
// balance("!!","??") === "Right"
// balance("!??","?!!") === "Left"
// balance("!?!!","?!?") === "Left"
// balance("!!???!????","??!!?!!!!!!!") === "Balance"


function balance(left, right){
  const count = function(side){
    let sideArr = side.split('');
    let sub = sideArr.map(l =>  l === '!' ? l = 2 : l = 3);
    return sub.reduce((total, el) => total += el);
  };
 if(count(left) > count(right)){
   return 'left';
 }
 else if(count(left) < count(right)){
   return 'right';
 }
 else{
   return 'balanced';
 }
}
