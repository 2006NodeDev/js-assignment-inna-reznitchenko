/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    if(sumNum == 0){
        return 1; 
    }
    return sumNum * factorial(sumNum - 1);
}

//test values for the factorial
console.log(factorial(10));
console.log(factorial(0));
console.log(factorial(12));
console.log(factorial(5));