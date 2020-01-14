var myArray = ['mouse', 'cat', 'dog', 'human'];

function sort(array) {
  var returnArray = [];
  for (var index = 0; index < array.length; index++) {
    if (array[index].charCodeAt(0) < returnArray[0].charCodeAt(0)) {
      returnArray.unshift(array[index]);
    }
    else {
      returnArray.push(array[index]);
    }
  }
  return returnArray;
}
console.log(sort(myArray))
