var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

function groupArray(array) {
  var stringArray = [];
  var numberArray = [];
  var boolArray = [];
  var returnArray = [stringArray, numberArray, boolArray];
  for (var index = 0; index < array.length; index++) {
    switch (typeof array[index]) {
      case 'string':
        stringArray.push(array[index])
        break;
      case 'number':
        numberArray.push(array[index])
        break;
      case 'boolean':
        boolArray.push(array[index])
        break;
      default:
    }
  }
  return returnArray
}

console.log(groupArray(myArray));
