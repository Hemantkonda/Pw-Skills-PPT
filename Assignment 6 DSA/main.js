// Q1

function findPermutation(s) {
    const n = s.length;
    const perm = new Array(n + 1);
  
    let low = 0;
    let high = 0;
  
    for (let i = 0; i < n; i++) {
      if (s[i] === 'I') {
        perm[i] = low++;
      } else {
        perm[i] = high--;
      }
    }
  
    perm[n] = low;
  
    for (let i = 0; i < n + 1; i++) {
      perm[i] -= high;
    }
  
    return perm;
  }
  
  // Test case
  const s = "IDID";
  const perm = findPermutation(s);
  console.log(perm);

  
//   Q2

function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
  
    let left = 0;
    let right = m * n - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const row = Math.floor(mid / n);
      const col = mid % n;
      const value = matrix[row][col];
  
      if (value === target) {
        return true;
      } else if (value < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  
  // Test case
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ];
  const target = 3;
  const result = searchMatrix(matrix, target);
  console.log(result);

  
//   Q3

function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;
  
    // Check for increasing order
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    // Check if peak is not at the first or last index
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    // Check for decreasing order
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  }
  
  // Test case
  const arr = [2, 1];
  const result = validMountainArray(arr);
  console.log(result);

  
//   Q4

function findMaxLength(nums) {
    const n = nums.length;
    let maxLen = 0;
    let count = 0;
    const countMap = new Map();
    countMap.set(0, -1);
  
    for (let i = 0; i < n; i++) {
      count += nums[i] === 1 ? 1 : -1;
  
      if (countMap.has(count)) {
        maxLen = Math.max(maxLen, i - countMap.get(count));
      } else {
        countMap.set(count, i);
      }
    }
  
    return maxLen;
  }
  
  // Test case
  const nums = [0, 1];
  const maxLength = findMaxLength(nums);
  console.log(maxLength);

  
//   Q5

function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => b - a);
  
    let sum = 0;
    const n = nums1.length;
  
    for (let i = 0; i < n; i++) {
      sum += nums1[i] * nums2[i];
    }
  
    return sum;
  }
  
  // Test case
  const nums1 = [5, 3, 4, 2];
  const nums2 = [4, 2, 2, 5];
  const minProduct = minProductSum(nums1, nums2);
  console.log(minProduct);

  
//   Q6

function restoreArray(changed) {
    const original = [];
    const numCount = new Map();
  
    for (const num of changed) {
      const originalNum = num / 2;
  
      if (numCount.has(originalNum) && numCount.get(originalNum) > 0) {
        numCount.set(originalNum, numCount.get(originalNum) - 1);
        original.push(originalNum);
      } else {
        return [];
      }
    }
  
    return original;
  }
  
  // Test case
  const changed = [1, 3, 4, 2, 6, 8];
  const originalArray = restoreArray(changed);
  console.log(originalArray);

  
//   Q7

function generateMatrix(n) {
    const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
  
    while (num <= n * n) {
      // Fill top row from left to right
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
  
      // Fill right column from top to bottom
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
  
      // Fill bottom row from right to left
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
  
      // Fill left column from bottom to top
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  
    return matrix;
  }
  
  // Test case
  const n = 3;
  const matrix = generateMatrix(n);
  console.log(matrix);

  
//   Q8

function multiply(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
  
    const result = new Array(m).fill().map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let x = 0; x < k; x++) {
          result[i][j] += mat1[i][x] * mat2[x][j];
        }
      }
    }
  
    return result;
  }
  
  // Test case
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
  const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];
  const result = multiply(mat1, mat2);
  console.log(result);
  