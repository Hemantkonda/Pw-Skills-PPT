// Q1

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];
  
    for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
  
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
  
        if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  
    return closestSum;
  }
  
  const nums = [-1, 2, 1, -4];
  const target = 1;
  const result = threeSumClosest(nums, target);
  console.log(result); // Output: 2

  
//   Q2

function fourSum(nums, target) {
    nums.sort((a, b) => a - b);
    const result = [];
  
    for (let a = 0; a < nums.length - 3; a++) {
      if (a > 0 && nums[a] === nums[a - 1]) {
        continue;
      }
  
      for (let b = a + 1; b < nums.length - 2; b++) {
        if (b > a + 1 && nums[b] === nums[b - 1]) {
          continue;
        }
  
        let left = b + 1;
        let right = nums.length - 1;
  
        while (left < right) {
          const sum = nums[a] + nums[b] + nums[left] + nums[right];
  
          if (sum === target) {
            result.push([nums[a], nums[b], nums[left], nums[right]]);
          }
  
          if (sum < target) {
            left++;
          } else {
            right--;
          }
  
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
  
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        }
      }
    }
  
    return result;
  }
  
  const nums = [1, 0, -1, 0, -2, 2];
  const target = 0;
  const result = fourSum(nums, target);
  console.log(result); // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

  
//   Q3

function nextPermutation(nums) {
    let i = nums.length - 2;
  
    // Find the first decreasing element from the right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      let j = nums.length - 1;
  
      // Find the first element greater than the decreasing element
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
  
      // Swap the decreasing element with the next greater element
      swap(nums, i, j);
    }
  
    // Reverse the remaining elements to get the smallest lexicographical order
    reverse(nums, i + 1);
  
    return nums;
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  function reverse(nums, start) {
    let i = start;
    let j = nums.length - 1;
  
    while (i < j) {
      swap(nums, i, j);
      i++;
      j--;
    }
  }
  
  // Example usage
  const nums = [1, 2, 3];
  console.log(nextPermutation(nums)); // Output: [1, 3, 2]

  
//   Q4

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
  
    // If the target is not found, return the index where it would be inserted
    return left;
  }
  
  // Example usage
  const nums = [1, 3, 5, 6];
  const target = 5;
  console.log(searchInsert(nums, target)); // Output: 2

  
// Q5

function plusOne(digits) {
    const n = digits.length;
  
    // Start from the rightmost digit
    for (let i = n - 1; i >= 0; i--) {
      // If the current digit is less than 9, increment it by one and return the result
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      }
  
      // If the current digit is 9, set it to 0 and continue to the next digit
      digits[i] = 0;
    }
  
    // If all digits are 9, add an additional digit at the beginning and set it to 1
    digits.unshift(1);
    return digits;
  }
  
  // Example usage
  const digits = [1, 2, 3];
  console.log(plusOne(digits)); // Output: [1, 2, 4]

  
//   Q6

function singleNumber(nums) {
    let result = 0;
  
    for (let i = 0; i < nums.length; i++) {
      result ^= nums[i];
    }
  
    return result;
  }
  
  // Example usage
  const nums = [2, 2, 1];
  console.log(singleNumber(nums)); // Output: 1

  
//   Q7

function findMissingRanges(nums, lower, upper) {
    const ranges = [];
  
    let prev = lower - 1;
  
    for (let i = 0; i <= nums.length; i++) {
      let curr = i < nums.length ? nums[i] : upper + 1;
  
      if (curr - prev >= 2) {
        ranges.push(getRange(prev + 1, curr - 1));
      }
  
      prev = curr;
    }
  
    return ranges;
  }
  
  function getRange(start, end) {
    return start === end ? `${start}` : `${start}->${end}`;
  }
  
  // Example usage
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  console.log(findMissingRanges(nums, lower, upper));
  // Output: [[2,2],[4,49],[51,74],[76,99]]

  
//   Q8

function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  const intervals = [[0, 30], [5, 10], [15, 20]];
  console.log(canAttendMeetings(intervals)); // Output: false
  
