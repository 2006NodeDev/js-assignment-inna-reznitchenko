/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    var newStr = "";
    for(i=someStr.length - 1; i>=0; i--){
        newStr += (someStr[i]);
    }
    return newStr;
}


//testing string values
var str1 = "inna";
console.log(reverseStr(str1));

var str2 = "Penguin";
console.log(reverseStr(str2));

var str3 = "home";
console.log(reverseStr(str3));