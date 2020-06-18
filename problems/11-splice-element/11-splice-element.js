/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {
    if(index < 0 || index >= someArr.length){
        return "Error. Please enter valid index.";
    }
    var newArray = new Array();
    for(i=0; i<someArr.length; i++){
        if(i==index){
            continue;
        }
        else{
            newArray.push(someArr[i]);
        }
    }
    return newArray;
}


//testing my splice fuction with different values 
var testArray = [1, 5, 23, 10, 2, 5, 30, 8];

console.log(spliceElement(testArray,4))
console.log(spliceElement(testArray, 0))
console.log(spliceElement(testArray, 8))