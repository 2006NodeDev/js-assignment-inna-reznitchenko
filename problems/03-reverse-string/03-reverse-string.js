/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let newStr = "";
    for(i=someStr.length - 1; i>=0; i--){
        newStr += (someStr[i]);
    }
    return newStr;
}


//testing string values
let str1 = "inna";
console.log(reverseStr(str1));

let str2 = "Penguin";
console.log(reverseStr(str2));

let str3 = "home";
console.log(reverseStr(str3));