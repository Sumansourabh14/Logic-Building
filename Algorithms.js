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