var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];

function fittingWords(string, array){
  var returnArray = [];
  var stringArray = string.split('');
  for (var index = 0; index < array.length; index++){
    for( var innerIndex = 0 ; innerIndex < stringArray.length ; innerIndex ++){
      // if (stringArray[innerIndex] === array[index]){
        // }
        console.log(stringArray[innerIndex])
      }
      console.log(array[index])
  }
  return returnArray;
}

console.log(fittingWords('cat', myArray));
