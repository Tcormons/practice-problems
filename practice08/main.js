var myString = 'the cat in the hat';

function charConvert(string){
  var returnArray = [];
  for(var index = 0; index < string.length; index ++){
    returnArray.push(string[index].charCodeAt())
  }
  return returnArray.join('');
}

console.log(charConvert(myString));
