console.log("LeetCode Practice");

//1.
//https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/

//A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
// You are given an array of strings sentences, where each sentences[i] represents a single sentence.
// Return the maximum number of words that appear in a single sentence.

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

function calcLength() {
    let max = 0;
    for (let sentence of sentences) {
        let newArray = sentence.split(" ");
        let lengthOfElement = newArray.length;

        if (max < lengthOfElement) {
            max = lengthOfElement;
        }

        console.log(lengthOfElement);
    }
    return max;
}

// console.log(calcLength());


// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
let nums = [8, 1, 2, 2, 3];

function smallerNumbersThanCurrent() {
    let countArray = [];
    for (let i of nums) {
        let count = 0;
        for (let j of nums) {
            if (i != j && j < i) {
                count++;
            }
        }
        countArray.push(count);
    }
    return countArray;
}

// console.log(smallerNumbersThanCurrent());


// 3. 
// https://leetcode.com/problems/single-number/

// https://leetcode.com/problems/single-number/submissions/

// const numbers = [2, 2, 1];
const numbers = [4,1,2,1,2];

function singleNumber() {
    //loop 1
    for (let number1 of numbers) {
        let count1 = 0;
        //loop 2
        for (let number2 of numbers) {
            if (number1 == number2) {
                count1++;
            }
        }
        if (count1 == 1) {
            return number1;
        }
    }
}

// console.log(singleNumber());


// 4. Calculate wealth
let accounts = [[1,2,3],[3,2,1]];

function calcWealth() {
    let previousSum = 0;
    for (let row = 0; row < accounts.length; row++) {
        let currentSum = 0;
        for (let col = 0; col < accounts[row].length; col++) {
            currentSum += accounts[row][col];
        }
        if (previousSum < currentSum) {
            previousSum = currentSum;
        }
    }
    return previousSum;
}

// console.log(calcWealth());



// 6.
// https://leetcode.com/problems/move-zeroes/
let n = [0, 1, 0, 3, 12];
// let n = [0];

function moveZeroes() {
    for (let element of n) {
        if (element == 0) {
            n.splice(n.indexOf(element), 1);
            n.push(element);
        }
    }
    return n;
}


// 8.
// https://leetcode.com/problems/length-of-last-word/

// let s = "Hello World";
let s = "   fly me   to   the moon  ";
// let s = "luffy is still joyboy";

function lengthOfLastWord() {
    
    let s1 = s.trim().split(' ');
    // for (let i = s1.length - 1; i >= 0; i--) {
        lastWordLength = s1[s1.length - 1].length;
        // console.log(s1[i].length);
    // }
    // return s1.at(-1).length;
    return lastWordLength;

}

console.log(lengthOfLastWord());


// 9.
// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
}; 

console.log(containsDuplicate([1,2,3,4]));


// 10.
// https://leetcode.com/problems/fizz-buzz/
function printFizzBuzz(n) {
    let answer = [];
    for (let i = 1; i <= n; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            answer.push("FizzBuzz");
        }
        else if (i % 3 == 0) {
            answer.push("Fizz");
        }
        else if (i % 5 == 0) {
            answer.push("Buzz");
        }
        else {
            answer.push(`${i}`);
        }
    }
    return answer;
}

// console.log(printFizzBuzz(15));


// 11
// https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/
let word1 = ["ab", "c"];
let word2 = ["a", "bc"];
// word1 = ["a", "cb"], word2 = ["ab", "c"];
// word1  = ["abc", "d", "defg"], word2 = ["abcddefg"];

function arrayStringsAreEqual() {
    let sum1 = "";
    for (let word of word1) {
        sum1 = sum1 + word;
    }
    let sum2 = "";
    for (let word of word2) {
        sum2 = sum2 + word;
    }
    if (sum1 == sum2) {
        return true;
    }
    return false;
}

console.log(arrayStringsAreEqual());



// 12.
// https://leetcode.com/problems/two-sum/
function twoSum(nums, target) {
    let outputArray = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                if (i == j) {
                    continue;
                }
                else {
                    outputArray.push(i, j);
                }
                // outputArray.push(i, j);
            }
        }
    }
    outputArray.length = 2;
    return outputArray;
}

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));

// console.log(twoSum([2, 5, 5, 11], 10));
