
// non-recursive
// assume that array is of integer values, and target is integer value
function binarySearch(array, target) {
    // can add check here for checking if array and target are integer values
    let start = 0;
    let end = array.length - 1;

    // find the lower limit of the array's middle index
    let index = Math.floor((start + end)/2);
    let item = array[index];
    // it should keep running until it narrows down to 1 or no value
    // returns the index value;
    while(start < end) {
        if(item === target) {
            return index;
        } else if(target > item) { // if target is greater than item change the start
            // index + 1 because we already know index is not the correct value
            start = index + 1;
        } else if (target < item) {
            // less by 1 because we already know that the index is not the correct value
            end = index - 1;
        }
    }
    // else all fails
    return -1;
}

// test case
// assumption that array is sorted
// else sort method
const sample = [2, 4, 5, 6, 8, 10]; // even array 6 integers
const sample2 = [2, 4, 5, 6, 8] // odd size array 5 integers
let test = {
    test1: binarySearch(sample, 10),
    test2: binarySearch(sample2, 5),
    test3: binarySearch(sample2, 16)
};

console.log(test);

// test1 does not work - looping infinitely; test2 passes, test3 also fails it cannot find something outside 
