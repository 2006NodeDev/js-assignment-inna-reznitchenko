/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let strArray = someStr.split("");

    for(i = 0; i < (strArray.length / 2); i++){
        if(strArray[i] == strArray[strArray.length - 1 - i]){
            continue;
        }
        else{
            return false;
        }
    }
    return true;
}

//test examples of 2 palidromes and 2 non palidromes (1 longer word, 1 shorter word)
console.log(isPalindrome("racecar"))
console.log(isPalindrome("red"))
console.log(isPalindrome("kayak"))
console.log(isPalindrome("graduated"))