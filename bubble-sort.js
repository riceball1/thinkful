// bubble sort
// uses a swapping technique and a counter to determine if the array is sorted
// worst run time with polynomial time complexity - Big O(n^2)

function bubbleSort(array) {
    let swapCounter = true;
    // do not want to go out of bounds of the array
    let n = array.length - 2;
    while(swapCounter) {
        swapCounter = false;
        for(let i = 0; i <= n; i++) {
            // iterate over each item, and check if the values
            // need to be swapped
            // a <-- b use temp to store the value, then reassign it
            let adjacent = array[i + 1];
            let current = array[i];
        //    console.log('current', current);
        //    console.log('adjacent', adjacent);
            if(current > adjacent) {
                let temp = adjacent; // hold the adjacent number in a temp var
                array[i + 1] = current; // reassign adjacent number to current number
                array[i] = temp; // make current the temp - adjacent number value
                swapCounter = true;
                // console.log('current2', current);
                // console.log('adjacent2', adjacent);
            }
            // console.log('======');
        }
    }
    return array;
}
// test cases
const array1 = [6, 1, 15, 33, 2]; // unsorted array
const array2 = [1, 2, 3]; // already sorted array
const array3 = [2,1];
const array4 = [5, 2, 1];
const test = {
    test1: bubbleSort(array1),
    test2: bubbleSort(array2),
    test3: bubbleSort(array3),
    test4: bubbleSort(array4)
}

console.log(test);

