// ** BINARY SEARCH **

// For sorted array

// Steps:
// 1. Find the middle element
// 2. If target > middle => search in right direction
//    If target < middle => search in left direction
// 3. If target == middle => element found! (answer)

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        //find middle element
        let mid = Math.floor(start + (end - start) / 2);

        if (target < arr[mid]) {
            end = mid - 1;
        }
        else if (target > arr[mid]) {
            start = mid + 1;
        }
        else {
            //answer found.
            return `Element found at index ${mid}`;
        }
    }
    return -1;
}

// console.log(binarySearch([2, 3, 6, 8, 10, 34, 54, 59, 75, 82, 91], 8));
// console.log(binarySearch([2, 3, 6, 8, 10, 34, 54, 59, 75, 82, 91], 87));


// ** ORDER AGNOSTIC BINARY SEARCH **
// 1. Find if the array is in ascending/descending order 
//    (Check 1st and last elements)

function orderAgnosticBinarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    let isAscendingOrder = arr[start] < arr[end];

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] == target) {
            return mid;
        }

        if (isAscendingOrder) {
            if (target < arr[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        else {
            if (target < arr[mid]) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
        }
    }
    return -1;
}

console.log(orderAgnosticBinarySearch([45, 33, 22, 10, 6, 3], 10));


// ** BUBBLE SORT **

// Other names - SINKING SORT/EXCHANGE SORT
// (Comparison sort method)

// Sort elements of an array in asc/desc order by comparing current and previous values

function bubbleSort(arr) {
    let swapped;

    for (let i = 0; i < arr.length; i++) {
        swapped = false;
        for (let j = 1; j < arr.length - i; j++) {
            // If the item is smaller than the previous item, swap!
            if (arr[j] < arr[j - 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;

                swapped = true;
            }
        }

        // If not swapped for a particular value of i, it means the array is sorted.
        // Hence, stop the program.
        if (!swapped) {
            break;
        } 
    }
    return arr;
}

// console.log(bubbleSort([1, 4, 2, 5, 8]));
// console.log(bubbleSort([1, -4, 2, -5, 8]));
// console.log(bubbleSort([]));
