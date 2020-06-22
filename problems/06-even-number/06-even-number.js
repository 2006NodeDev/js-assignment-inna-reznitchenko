/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let quotient = Math.floor(someNum/2);

    if(quotient*2 == someNum){
        return true;
    }
    else{
        return false;
    }
}

// testing out an odd number
console.log(isEven(5))

// testing out an even number
console.log(isEven(8))

//testing out a large odd number
console.log(isEven(38723))

//testing out a large even number
console.log(isEven(325230))