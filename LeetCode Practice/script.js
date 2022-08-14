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
