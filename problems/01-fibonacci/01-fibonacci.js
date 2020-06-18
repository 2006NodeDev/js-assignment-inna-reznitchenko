/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
//We'll come back after we learn about objects
function fib(n) {
    if(n == 0){
        return 0; 
    }
    else if(n == 1){
        return 1;
    }

    return fib(n-1) + fib(n-2);
}


//testing fibonacci values
console.log(fib(20));
console.log(fib(2));
console.log(fib(4));
console.log(fib(30));