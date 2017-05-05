// bubble sort
// uses a swapping technique and a counter to determine if the array is sorted
// worst run time with polynomial time complexity - Big O(n^2)

function bubbleSort(array) {
    let swapCounter = 0;
    let temp;
    let n = array.length;
    while(swapCounter > 0) {
        for(let i = 0; i < n; i++) {
            // iterate over each item, and check if the values
            // need to be swapped
            // a <-- b use temp to store the value, then reassign it
            if(array[i] > array[i+1]) {
                // do something
            }
        }
    }

    return array;
}


// test cases
const array1 = [6, 1, 15, 33, 2, 1]; // unsorted array
const array2 = [1, 2, 3] // already sorted array

const test = {
    test1: bubbleSort(array1),
    test2: bubbleSort(array2)
}

console.log(test);

