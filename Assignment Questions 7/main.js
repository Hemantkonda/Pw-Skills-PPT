// Q1

function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;
  
    const sMap = new Map();
    const tMap = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if ((sMap.has(charS) && sMap.get(charS) !== charT) ||
          (tMap.has(charT) && tMap.get(charT) !== charS)) {
        return false;
      }
  
      sMap.set(charS, charT);
      tMap.set(charT, charS);
    }
  
    return true;
  }
  
  // Example usage:
  const s1 = "egg";
  const t1 = "add";
  console.log(isIsomorphic(s1, t1)); // Output: true


  
//   Q2

function isStrobogrammatic(num) {
  const strobogrammaticMap = {
    '0': '0',
    '1': '1',
    '6': '9',
    '8': '8',
    '9': '6'
  };

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    const leftChar = num[left];
    const rightChar = num[right];

    if (!(leftChar in strobogrammaticMap) || strobogrammaticMap[leftChar] !== rightChar) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// Example usage:
const num1 = "69";
console.log(isStrobogrammatic(num1)); // Output: true



// Q3

function addStrings(num1, num2) {
    let carry = 0;
    let result = "";
  
    let i = num1.length - 1;
    let j = num2.length - 1;
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
  
      const sum = digit1 + digit2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
  
      i--;
      j--;
    }
  
    return result;
  }
  
  // Example usage:
  const num1 = "11";
  const num2 = "123";
  console.log(addStrings(num1, num2)); // Output: "134"

  

//   Q4

function reverseWords(s) {
    const words = s.split(" ");
    const reversedWords = words.map(word => {
      return word.split("").reverse().join("");
    });
    return reversedWords.join(" ");
  }
  
  // Example usage:
  const s1 = "Let's take LeetCode contest";
  console.log(reverseWords(s1)); // Output: "s'teL ekat edoCteeL tsetnoc"

  

//   Q5

function reverseStr(s, k) {
    const arr = s.split("");
  
    for (let i = 0; i < s.length; i += 2 * k) {
      let left = i;
      let right = Math.min(i + k - 1, s.length - 1);
  
      while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      }
    }
  
    return arr.join("");
  }
  
  // Example usage:
  const s1 = "abcdefg";
  const k1 = 2;
  console.log(reverseStr(s1, k1)); // Output: "bacdfeg"

  

//   Q6

function rotateString(s, goal) {
    if (s.length !== goal.length) return false;
  
    const concatenated = s + s;
  
    return concatenated.includes(goal);
  }
  
  // Example usage:
  const s1 = "abcde";
  const goal1 = "cdeab";
  console.log(rotateString(s1, goal1)); // Output: true

  
  
//   Q7

function backspaceCompare(s, t) {
    function processString(str) {
      const stack = [];
  
      for (const char of str) {
        if (char !== "#") {
          stack.push(char);
        } else if (stack.length > 0) {
          stack.pop();
        }
      }
  
      return stack.join("");
    }
  
    const processedS = processString(s);
    const processedT = processString(t);
  
    return processedS === processedT;
  }
  
  // Example usage:
  const s1 = "ab#c";
  const t1 = "ad#c";
  console.log(backspaceCompare(s1, t1)); // Output: true
  
