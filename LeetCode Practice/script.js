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

// console.log(twoSum([2, 5, 5, 11], 10));


// 13. 
// https://leetcode.com/problems/count-items-matching-a-rule/
function countMatches(items, ruleKey, ruleValue) {
    let count = 0;
    for (let i = 0; i < items.length; i++) { 
        if (ruleKey === "type" &&  items[i][0] == ruleValue) {
            count++;
        }
        else if (ruleKey === "color" && items[i][1] == ruleValue) {
            count++;
        }
        else if (ruleKey === "name" && items[i][2] == ruleValue) {
            count++;
        }
    }
    return count;
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], "color", "silver"));
console.log(countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone"));


// 14.
// https://leetcode.com/problems/truncate-sentence/
function truncateSentence(s, k) {
    let arrayS = s.split(' ');
    arrayS.splice(k, arrayS.length - k);
    return arrayS.join(' ');
}

console.log(truncateSentence("Hello how are you Contestant", 4));


// 15.
// https://leetcode.com/problems/find-the-highest-altitude/
function largestAltitude(gain) {
    let gainingArray = [];
    let sum = 0;
    gainingArray.push(sum);
    let max = 0;

    // Find the altitudes
    for(let gained of gain) {
        sum = sum + gained;
        gainingArray.push(sum);
    } 

    // Find highest of the altitudes
    for (let g of gainingArray) {
        if (g > max) {
            max = g;
        }
    }

    // Return the highest altitude
    return max;
}

console.log(largestAltitude([-5,1,5,0,-7]));


// 16.
// https://leetcode.com/problems/robot-return-to-origin/
function isMovesToOrigin(moves) {
    let valueInX = 0;
    let valueInY = 0;
    for (let move of moves) {
        switch (move) {
            case "U":
                valueInY++;
                break;
            case "D":
                valueInY--;
                break;
            case "L":
                valueInX--;
                break;
            case "R":
                valueInX++;
                break;
            default:
                break;
        }
    }
    if (valueInX == 0 && valueInY == 0) {
        return true;
    }
    return false;
}

console.log(isMovesToOrigin("UD"));
console.log(isMovesToOrigin("LL"));
console.log(isMovesToOrigin("URDL"));


// 17.
// https://leetcode.com/problems/n-th-tribonacci-number/
function tribonacci(n) {
    //Intitialize the starting values
    let a = 0, b = 1, c = 1;
    let temp;
    let i = 1;
    if (n == 0) {
        return 0;
    }
    while (i < n - 1) {
        temp = a + b + c;
        a = b;  //swap
        b = c;
        c = temp;
        i++;
    }
    return c;
};

console.log(tribonacci(4));
console.log(tribonacci(25));
console.log(tribonacci(0));


//Anagram
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let a = s.split('').sort();
    let b = t.split('').sort();

    for (let i = 0; i < s.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("rat", "car"));
console.log(isAnagram("anagram", "nagaram"));


// BINARY SEARCH 
// https://leetcode.com/problems/binary-search/
// (Ascending Order)
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        
        if (target < nums[mid]) {
            end = mid - 1;
        }
        else if (target > nums[mid]) {
            start = mid + 1;
        }
        else {
            return mid;
        }
    }
    return -1;
};



// 19.
// https://leetcode.com/problems/find-smallest-letter-greater-than-target/
function nextGreatestLetter(letters, target) {
    // Apply binary search (non-decreasing order of array)

    let start = 0;
    let end = letters.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (target < letters[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return letters[start % letters.length];
}

// console.log(nextGreatestLetter(["c","f","j"], "a"));


// 1920. 
// https://leetcode.com/problems/build-array-from-permutation/
function buildArray(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        newArr.push(nums[nums[i]]);
    }
    return newArr;
}

// console.log(buildArray([0,2,1,5,3,4]));
// console.log(buildArray([5,0,1,2,3,4]));


// 1929.
// https://leetcode.com/problems/concatenation-of-array/
function getConcatenation(nums) {
    let ans = [];
    let n = nums.length;
    for (i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
        ans.push(ans[i], ans[i + n]);
    }
    ans.length = 2 * n;
    return ans;
}

// console.log(getConcatenation([1, 2, 1]));

function shuffle(nums, n) {
    let ans = [];
    for (let i = 0; i < n; i++) {
        ans.push(nums[i], nums[i + n])
    }
    return ans;
}

// console.log(shuffle([2,5,1,3,4,7], 3));


// 2278.
// https://leetcode.com/problems/percentage-of-letter-in-string/
function percentageLetter(s, letter) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == letter) {
            count++;
        }
    }
    return Math.floor(count/s.length * 100);
}

console.log(percentageLetter("foobar", "o"));
console.log(percentageLetter("jjjj", "k"));
console.log(percentageLetter("sgawtb", "s"));


// 509.
// https://leetcode.com/problems/fibonacci-number/
function fib(n) {
    let a = 0;
    let b = 1;
    let i = 0;
    let c;
    while (i < n) {
        c = a + b;
        a = b;
        b = c;
        i++;
    }
    return a;
}

// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(23));


// 70.
// https://leetcode.com/problems/climbing-stairs/
function climbStairs(n) {
    let a = 0;
    let b = 1;
    let i = 0;

    while (i <= n) {
        let c = a + b;
        a = b;
        b = c;
        i++;
    }

    return a;
}

// console.log(climbStairs(2));
// console.log(climbStairs(3));
// console.log(climbStairs(4));
// console.log(climbStairs(5));
// console.log(climbStairs(6));
// console.log(climbStairs(7));



// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
function numberOfSteps(num) {
    let c = 0;
    while (num > 0) {
        if (num % 2 === 0) {
            num = num / 2;
        }
        else {
            num = num - 1;
        }
        c++;
    }
    return c;
}

// console.log(numberOfSteps(14));
// console.log(numberOfSteps(8));



// https://leetcode.com/problems/count-operations-to-obtain-zero/
function countOperations(num1, num2) {
    let operations = 0;
    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2) {
            num1 = num1 - num2;
        }
        else {
            num2 = num2 - num1;
        }
        operations++;
    }
    return operations;
}

// console.log(countOperations(2, 3));
// console.log(countOperations(10, 10));
