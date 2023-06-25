
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