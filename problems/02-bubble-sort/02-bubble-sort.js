/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    for(i=0; i<numArray.length; i++){  
        for(j=0; j < numArray.length - i; j++){
            if(numArray[j] > numArray[j+1]){
                temp1 = numArray[j];
                temp2 = numArray[j+1];
                numArray[j] = temp2;
                numArray[j+1] = temp1;
            }
        }
    }
    return numArray; 
}

//buble sorting a large mismatched array to test
let arr = [1, 5, 3, 5, 2, 35, 1, 16, 9, 2];
console.log(bubbleSort(arr))