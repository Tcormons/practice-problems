var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

function biggerWords(word, array){
  var returnArray = [];
  for(var index = 0; index < array.length; index ++ ){
    if (array[index].length > word.length) {
      returnArray.push(array[index])
    }
  }
  return returnArray;
}

console.log(biggerWords('whales', myArray));
