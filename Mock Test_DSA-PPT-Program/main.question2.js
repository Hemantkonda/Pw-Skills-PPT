
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
  // If no non-repeating character found, return -1
    return -1; 
  }
