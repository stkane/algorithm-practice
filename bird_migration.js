// You have been asked to help study the population 
// of birds migrating across the continent. Each type 
// of bird you are interested in will be identified by 
// an integer value. Each time a particular kind of 
// bird is spotted, its id number will be added to your 
// rray of sightings. You would like to be able to find 
// ut which type of bird is most common given a list of
// sightings. Your task is to print the type number of 
// that bird and if two or more types of birds are equally 
// common, choose the type with the smallest ID number.


function migratoryBirds(ar) {
  var birdMap = {};
  for(let i = 0; i < ar.length; i++) {
    if(birdMap[ar[i]] === undefined) {
      birdMap[ar[i]] = 1;
    } else {
      birdMap[ar[i]]++
    }
  }

  var greatestFreq = 0;
  var answerBird;
  for (var bird in birdMap) {
    if (birdMap[bird] > greatestFreq) {

      greatestFreq = birdMap[bird]
      answerBird = bird
    }
  }
  return answerBird;
}
