// Your task in order to complete this Kata is to 
// write a function which formats a duration, given 
// as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. 
// If it is zero, it just returns "now". Otherwise, 
// the duration is expressed as a combination of years, 
// days, hours, minutes and seconds.

// It is much easier to understand with an example:

// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"




function formatDuration(seconds) {
  if(seconds === 0) { return "now" }
    
  minute = Math.floor(seconds/60);
  hour = Math.floor(minute/60);
  day = Math.floor(hour/24);
  year = Math.floor(day/365);

	processedTime = {
    year: year = year,
    day: day %= 365,
    hour: hour %= 24,
    minute: minute %= 60,
    second: seconds %= 60,
  };
  
  output = "";
  
 timeKeys = Object.keys(processedTime);
 
 for(i = 0; i < timeKeys.length; i++) {
 	if(processedTime[timeKeys[i]] === 0) {
  	delete processedTime[timeKeys[i]];
    timeKeys.splice(i, 1);
    i -= 1;
  };
 }
 
 for(i = 0; i < timeKeys.length; i++) {
  number = processedTime[timeKeys[i]];
  label = timeKeys[i];
  number >= 2 ? label += "s" : label;
  connector = ", ";
  if(i === timeKeys.length - 2) {
  	connector = " and ";
  } else if (i === timeKeys.length -1) {
  	connector = "";
  } else {
  	connector;
  }
  output += number + " " + label + connector;
 };
  return output;
}