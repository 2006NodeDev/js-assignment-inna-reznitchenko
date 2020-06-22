/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if(typeof someStr != "string"){
        throw "Incorrect input. Please pass in a string."
    }
    else if(startIndex > someStr.length || endIndex > someStr.length || startIndex < 0 || endIndex < 0 || startIndex == endIndex){
        throw "Incorrect input. Please pass in inbounds index parameters."
    }
    else{
        let strArray = someStr.split("")
        let subStr = ""
        for(i = startIndex; i < endIndex; i++){
            subStr += strArray[i];
        }
        return subStr; 
    }
}

//trying to pass in a strign starting from the beginning
try {
    let str = substring("Pennsylvanis", 0, 7);
    console.log(str)
  } catch (e) {
    console.error(e);
  }

  //trying to pass a non string variable 
  try {
    let str = substring(false, 5, 2);
    console.log(str)
  } catch (e) {
    console.error(e);
  }

  //trying to pass in a string with invalid indexes
  try {
    let str = substring("dog", 1, 4);
    console.log(str)
  } catch (e) {
    console.error(e);
  }

  //trying to pass in a string with negavtive indexes
  try {
    let str = substring("dog", -1, 2);
    console.log(str)
  } catch (e) {
    console.error(e);
  }

//trying to pass in a strign starting from the middle
try {
    let str = substring("Pennsylvania", 4, 9);
    console.log(str)
  } catch (e) {
    console.error(e);
  }
