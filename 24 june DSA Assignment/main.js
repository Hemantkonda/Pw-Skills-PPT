// 💡 **Q1.** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

function twoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }

    numMap.set(nums[i], i);
  }

  return [];
}

// Example usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);

// Time complexity: O(n)
// Space complexity:  O(1)



// Q2.
function removeElement(nums, val) {
    let k = 0; // Number of elements not equal to val
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        nums[k] = nums[i];
        k++;
      }
    }
  
    return k;
  }
  
  // Example usage
  const nums = [3, 2, 2, 3];
  const val = 3;
  const result = removeElement(nums, val);
  console.log(result); // Output: 2
  console.log(nums); // Output: [2, 2, _, _] (remaining elements are not important)
  
// Time complexity: O(n)
// Space complexity:  O(1)



// Q3.
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return left;
  }
  
  // Example usage
  const nums = [1, 3, 5, 6];
  const target = 5;
  const result = searchInsert(nums, target);
  console.log(result); // Output: 2

  // Time complexity: O(log n)
// Space complexity:  O(1)



// Q4.

function plusOne(digits) {
    const n = digits.length;
  
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i]++;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
  
    digits.unshift(1);
    return digits;
  }
  
  // Example usage
  const digits = [1, 2, 3];
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]
  
  // Time complexity: O(n)
// Space complexity:  O(1)



// Q5.

function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
  
    while (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        i--;
      } else {
        nums1[k] = nums2[j];
        j--;
      }
      k--;
    }
  
    while (j >= 0) {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }
  
  // Example usage
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  
  merge(nums1, m, nums2, n);
  console.log(nums1); // Output: [1, 2, 2, 3, 5, 6]

// Time complexity: O(m + n)
// Space complexity:  O(1)



// Q6.
function containsDuplicate(nums) {
    const numSet = new Set();
  
    for (const num of nums) {
      if (numSet.has(num)) {
        return true;
      }
      numSet.add(num);
    }
  
    return false;
  }
  
  // Example usage
  const nums = [1, 2, 3, 1];
  const result = containsDuplicate(nums);
  console.log(result); // Output: true
  
    // Time complexity: O(n)
// Space complexity:  O(1)



// Q7.
function moveZeroes(nums) {
    let i = 0;
    let j = 0;
  
    while (j < nums.length) {
      if (nums[j] !== 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
      j++;
    }
  }
  
  // Example usage
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums); // Output: [1, 3, 12, 0, 0]

// Time complexity: O(n)
// Space complexity:  O(1)


//Q8.
function findErrorNums(nums) {
    const n = nums.length;
    const numSet = new Set(nums);
    let duplicateNum, missingNum;
  
    for (let i = 1; i <= n; i++) {
      if (!numSet.has(i)) {
        missingNum = i;
      } else if (nums.indexOf(i) !== nums.lastIndexOf(i)) {
        duplicateNum = i;
      }
    }
  
    return [duplicateNum, missingNum];
  }
  
  // Example usage
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result); // Output: [2, 3]

  
  


  
  