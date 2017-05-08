/**
 * Merge Sort
 * Divide and Conquer
 * Big O(n^2)
 */


function mergeSort(array) {
    // if the array has 1 or 0 elements then it is sorted
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        } else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};



/**
 * Quicksort
 * Big O(n log(n)) - best and avg case
 * more common than merge sort beause it is 
 * more cache-efficent
 * Divide and Conquer
 * Partition the array into 2 halves around a pivot value
 * Less than pivot on left, and greater on right of pivot
 * Recursively sort the two halves of the array until
 * the halves are of length 0 or 1
 */

function quickSort(array, start = 0, end = array.length) {
    start = start;
    end = end;
    // zero or 1 means it's already sorted
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
}


// common in-place partitioning alogirthms - Lumoto's algorithm
function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end - 1, j);
    return j;
};

// also used in bubble sort
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};


const array2 = [10, 4, 2, 3];
const array3 = [1000, -100, 4, 30, 3, 1];
const test = {
    mergeSortTest: mergeSort(array2),
    quickSort: quickSort(array3)
}

console.log(test);