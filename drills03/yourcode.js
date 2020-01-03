

function getPath(string){
  return string.split('/');
}

function getPathParts(string){
  var array = string.split('/');
  var array2 = string.split(':');

  return {
    protocol: string.split(':').shift(),
    host: array[2].split(':').shift(),
    port: parseInt(array2[2].split('/').shift()),
    path: array[3].concat('/') + array[4],
    file: array[5]
  }
}

function getCapitalCount(array){
  return array.reduce((word,sum) => console.log(word,sum))
}

function correctCalcChecker(){

}

function doMath(){

}
