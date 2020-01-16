var myString = "Hello my name is Stu";

function pigLatinTranslator(string) {
  var array = string.split(' ');
  var returnArray = [];
  for (var index = 0; index < array.length; index++) {
    var firstLetter = array[index].slice(0, 1);
    var remainingWord = array[index].slice(1);
    returnArray.push(remainingWord.concat(firstLetter + 'ay'));
  }
  return returnArray.join(' ');
}


console.log(pigLatinTranslator(myString));
