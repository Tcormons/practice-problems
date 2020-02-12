function countOccurences(array, word) {
  var counter = 0;
  for (var index = 0; index < array.length; index++) {
    if (array[index] == word){
      counter ++;
    }
  }
  return counter;
}

function wordLengths() {

  function countOccurences() {
    var array1 = ['how', 'much', 'wood', 'would', 'a', 'wood', 'chuck', 'chuck', 'if', 'a', 'wood', 'chuck', 'could', 'chuck', 'wood'];
    var array2= [
        "who",
        "what",
        "who",
        "when",
        "why",
        "who",
        "what",
        "how"
      ];


    var indexOccurence = 0;

    for (var index = 0; index < array1.length; index++) {
        if (array1[index] == 'wood') {
            indexOccurence = indexOccurence + 1;
        }
    } 

    for (var index = 0; index < array2.length; index++) {
        if (array2[index] == 'wood') {
            indexOccurence2 = indexOccurence2 + 1;
        }
    } 


    return indexOccurence;
}

function wordLengths() {
    var array1 = [
        "sam",
        "I",
        "am",
        "called",
        "dude",
        "my",
        "car"
    ]
    var answerArray = [];
    for (var index = 0; index < array1.length; index++) {
        var char = array1[index];
        var count = char.length;
        answerArray.push(count);
    }
    return answerArray;
}

function getMinMaxMean() {
    var array1 = [
        5,
        -5,
        15,
        25,
        12,
        2
      ];

    var totalArray = 0;  
    var answerObj = {};

      for(var index=0;index < array1.length; index ++){
        var lowIndex = Math.min.apply(Math, array1);
        answerObj.min = lowIndex;
        var highIndex = Math.max.apply(Math, array1);
        answerObj.max = highIndex;
        totalArray = totalArray + array1[index];
        var meanIndex = totalArray / array1.length;
        answerObj.mean = meanIndex;
      }
      return answerObj;
}

function findMode() {
    var array1 = [
        2,
        4,
        6,
        3,
        4,
        3,
        2,
        4,
        3,
        5
      ]
    
      for (var index=0;index < array1.length; index++){
          var currentMax; 
          
      }


}
