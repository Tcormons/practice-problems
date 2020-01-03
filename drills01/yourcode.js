var sumArray1 = [1,5,3,2,6];

function sumArray(){
    var sumArrayResult = 0;
    for (var sumArrayIndex = 0; sumArrayIndex < sumArray1.length; sumArrayIndex++){
        sumArrayResult += sumArray1[sumArrayIndex];
    }
    console.log('sumArrayResult: ',sumArrayResult);
    return sumArrayResult;
}
sumArray();


function fitWithinVal(){
    var numberArray = [4,2,3,6,7,1,8,10,9]; //30
    var fitWithinVal = [];
    var sumNumberArray = 0;
    for (var index = 0; index < numberArray.length; index++){
        if (sumNumberArray < 30){
            sumNumberArray += numberArray[index];
            fitWithinVal.push(numberArray[index]);
        }
    }
    console.log("fitsWithinVal: ", fitWithinVal);
}
fitWithinVal();



function getAllNamesShorterThan(){
    debugger;
    var arrayName =['Clyde','Sue','Jerry','Jo']; //4 , 2, 20

    var shorterThanArray4 = [];
    var shorterThanArray2 = [];
    var shorterThanArray20 = [];

    for (var index = 0; index < arrayName.length; index ++){
        var nameLength = arrayName[index].length;
        switch(nameLength){

        case (nameLength < 4):
            shorterThanArray4.push(arrayName[index]);
        break;

        case (nameLength < 2):
            shorterThanArray2.push(arrayName[index]);
        break;

        case (nameLength < 20):
            shorterThanArray20.push(arrayName[index]);
        break;
        default:
    }
    console.log('ShorterThan 4: ', shorterThanArray4);
    console.log('Shorterthan 2: ', shorterThanArray2);
    console.log('Shorterthan 20: ', shorterThanArray20);
}
}
getAllNamesShorterThan();

function makeLabel(){

}
