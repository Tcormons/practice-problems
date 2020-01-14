var myArray = ['hello', 45, 'Bob', 'what', '23'];

function arrayReverse(array){
  var returnArray = [];
  var arrayLength = array.length;
  for(var index = 0; index < arrayLength; index ++) {
    returnArray.push(array.pop());
  }
  return returnArray;
}

console.log(arrayReverse(myArray));
