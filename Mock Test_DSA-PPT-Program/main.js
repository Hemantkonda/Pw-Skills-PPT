// Q1. Move Zeroes

let moveZeroes = function(nums) {
    // let's Taking Variables i & j which Initially index.no = 0
    let i = 0;
    let j = 0;

    // applying condition

    while(j < nums.length){
        if (nums[j] !== 0) {
            // If this condition true Swap nums[i] to nums[j] and modifying index of i by 1
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
        j++
    }
}
const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]

Time complexity: O(n)
Space complexity:  O(1)




// Q2.First Unique Character in a String


function firstUniqChar(s) {
    // Create a frequency map to count the occurrences of each character
    const freqMap = {};
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      freqMap[char] = (freqMap[char] || 0) + 1;
    }
  
    // Iterate through the string again to find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (freqMap[char] === 1) {
        return i; // Return the index of the first non-repeating character
      }
    }
  
    return -1; // If no non-repeating character found, return -1
  }
  
  // Test cases
  console.log(firstUniqChar("leetcode")); // Output: 0
  console.log(firstUniqChar("loveleetcode")); // Output: 2
  console.log(firstUniqChar("aabb")); // Output: -1
  

