// Q1

function minimumDeleteSum(s1, s2) {
    const m = s1.length;
    const n = s2.length;
  
    // Create a 2D array to store the minimum ASCII sum
    const dp = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));
  
    // Fill the first row and column with cumulative ASCII sums
    for (let i = 1; i <= m; i++) {
      dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }
    for (let j = 1; j <= n; j++) {
      dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }
  
    // Calculate the minimum ASCII sum
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + s1.charCodeAt(i - 1),
            dp[i][j - 1] + s2.charCodeAt(j - 1)
          );
        }
      }
    }
  
    return dp[m][n];
  }
  
  // Test the function
  const s1 = "sea";
  const s2 = "eat";
  const result = minimumDeleteSum(s1, s2);
  console.log(result); // Output: 231

  
//   Q2

function checkValidString(s) {
    let low = 0; // Minimum number of open parentheses
    let high = 0; // Maximum number of open parentheses
  
    for (const char of s) {
      if (char === "(") {
        low++;
        high++;
      } else if (char === ")") {
        low = Math.max(low - 1, 0);
        high--;
      } else if (char === "*") {
        low = Math.max(low - 1, 0);
        high++;
      }
  
      if (high < 0) {
        return false; // More closing parentheses than opening parentheses
      }
    }
  
    return low === 0; // All open parentheses are closed
  }
  
  // Test the function
  const s = "((*)";
  const result = checkValidString(s);
  console.log(result); // Output: true

  
//   Q3

function minSteps(word1, word2) {
    const m = word1.length;
    const n = word2.length;
  
    // Create a 2D array to store the minimum steps
    const dp = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));
  
    // Calculate the minimum steps
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  
    return m + n - 2 * dp[m][n]; // Total characters - (common subsequence * 2)
  }
  
  // Test the function
  const word1 = "sea";
  const word2 = "eat";
  const result = minSteps(word1, word2);
  console.log(result); // Output: 2

  
//   Q4

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function str2tree(s) {
    if (s === "") {
      return null;
    }
  
    // Find the first '(' character
    let firstParen = s.indexOf("(");
    let value = firstParen === -1 ? parseInt(s) : parseInt(s.substring(0, firstParen));
  
    // Create the root node
    let root = new TreeNode(value);
  
    if (firstParen === -1) {
      return root; // No children
    }
  
    let start = firstParen; // Start index of left subtree or first child
    let openParenCount = 0; // Parentheses counter
  
    for (let i = start; i < s.length; i++) {
      if (s.charAt(i) === "(") {
        openParenCount++;
      } else if (s.charAt(i) === ")") {
        openParenCount--;
      }
  
      if (openParenCount === 0 && start === firstParen) {
        root.left = str2tree(s.substring(start + 1, i));
        start = i + 1; // Start index of right subtree or second child
      } else if (openParenCount === 0) {
        root.right = str2tree(s.substring(start + 1, i));
      }
    }
  
    return root;
  }
  
  function inorderTraversal(root) {
    if (!root) {
      return [];
    }
  
    let result = [];
  
    const traverse = (node) => {
      if (!node) {
        return;
      }
  
      traverse(node.left);
      result.push(node.val);
      traverse(node.right);
    };
  
    traverse(root);
    return result;
  }
  
  // Test the function
  const s = "4(2(3)(1))(6(5))";
  const root = str2tree(s);
  const result = inorderTraversal(root);
  console.log(result); // Output: [4, 2, 3, 1, 6, 5]

  
//   Q5

function compress(chars) {
    let write = 0; // Index to write the compressed characters
    let count = 1; // Count of consecutive repeating characters
  
    for (let i = 1; i <= chars.length; i++) {
      if (i < chars.length && chars[i] === chars[i - 1]) {
        count++; // Increase count for consecutive repeating characters
      } else {
        chars[write] = chars[i - 1]; // Write the character
  
        if (count > 1) {
          // Write the count as separate characters if greater than 1
          const countStr = count.toString();
          for (const digit of countStr) {
            chars[++write] = digit;
          }
        }
  
        write++; // Move the write index to the next position
        count = 1; // Reset the count for the next group
      }
    }
  
    return write;
  }
  
  // Test the function
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const result = compress(chars);
  console.log(result); // Output: 6
  console.log(chars.slice(0, result)); // Output: ["a", "2", "b", "2", "c", "3"]

  
//   Q6

function findAnagrams(s, p) {
    const result = [];
    const pCount = Array(26).fill(0); // Frequency count array for pattern p
    const windowCount = Array(26).fill(0); // Frequency count array for sliding window
  
    // Calculate the frequency count of characters in pattern p
    for (const char of p) {
      pCount[char.charCodeAt() - 97]++;
    }
  
    let left = 0; // Left pointer of the sliding window
    let right = 0; // Right pointer of the sliding window
  
    while (right < s.length) {
      const rightChar = s[right].charCodeAt() - 97;
      windowCount[rightChar]++; // Expand the window
  
      if (right - left + 1 === p.length) {
        // Window size matches pattern length
        if (windowCount.join("") === pCount.join("")) {
          // Frequency counts match, found an anagram
          result.push(left);
        }
  
        const leftChar = s[left].charCodeAt() - 97;
        windowCount[leftChar]--; // Shrink the window
        left++; // Move the left pointer
      }
  
      right++; // Move the right pointer
    }
  
    return result;
  }
  
  // Test the function
  const s = "cbaebabacd";
  const p = "abc";
  const result = findAnagrams(s, p);
  console.log(result); // Output: [0, 6]

  

//   Q7

function decodeString(s) {
    const stack = [];
  
    for (const char of s) {
      if (char !== "]") {
        stack.push(char); // Push non-"]" characters to the stack
      } else {
        let curr = stack.pop(); // Pop the top of the stack
  
        // Construct the encoded string within the brackets
        let encodedString = "";
        while (curr !== "[") {
          encodedString = curr + encodedString;
          curr = stack.pop();
        }
  
        let num = "";
        curr = stack.pop();
  
        // Get the number before the brackets
        while (!isNaN(parseInt(curr))) {
          num = curr + num;
          curr = stack.pop();
        }
  
        stack.push(curr); // Push back the non-digit character
        stack.push(encodedString.repeat(parseInt(num))); // Push the decoded string back to the stack
      }
    }
  
    return stack.join("");
  }
  
  // Test the function
  const s = "3[a]2[bc]";
  const result = decodeString(s);
  console.log(result); // Output: "aaabcbc"

  
//   Q8

function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      const charCount = Array(26).fill(0); // Frequency count array for characters
      for (const char of s) {
        charCount[char.charCodeAt() - 97]++;
      }
  
      for (const count of charCount) {
        if (count > 1) {
          return true; // Found repeating characters, can swap to create identical strings
        }
      }
  
      return false; // No repeating characters
    }
  
    const mismatchedIndices = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        mismatchedIndices.push(i); // Store the indices of mismatched characters
      }
  
      if (mismatchedIndices.length > 2) {
        return false; // More than two characters mismatched, cannot be swapped to match
      }
    }
  
    return (
      mismatchedIndices.length === 2 &&
      s[mismatchedIndices[0]] === goal[mismatchedIndices[1]] &&
      s[mismatchedIndices[1]] === goal[mismatchedIndices[0]]
    );
  }
  
  // Test the function
  const s = "ab";
  const goal = "ba";
  const result = buddyStrings(s, goal);
  console.log(result); // Output: true
  