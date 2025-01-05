// Let's Practice
// ================
// 1. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.
function CountVowels(inputString) {
  let count = 0;
  for (const char of inputString) {
    // console.log(char);
    if (
      char.toLowerCase() === "a" ||
      char.toLowerCase() === "e" ||
      char.toLowerCase() === "i" ||
      char.toLowerCase() === "o" ||
      char.toLowerCase() === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
CountVowels("hello");

// 2. Create an arrow function to perform the same task.
const CountVowelsArrow = (inputString) => {
  let count = 0;
  for (const char of inputString) {
    if (
      char.toLowerCase() === "a" ||
      char.toLowerCase() === "e" ||
      char.toLowerCase() === "i" ||
      char.toLowerCase() === "o" ||
      char.toLowerCase() === "u"
    ) {
      count++;
    }
  }
  console.log(count);
};
CountVowelsArrow("hello harshita");

// More practice question covered below :
// 1. Check if a given string is a palindrome
// Approach 1: Using split, reverse, and join
function isPalindrome(inputString) {
  const reversedString = inputString.split("").reverse().join("");
  console.log(
    inputString === reversedString
      ? `${inputString} is a palindrome.`
      : `${inputString} is not a palindrome.`
  );
}
isPalindrome("madam");
isPalindrome("hello");

// Approach 2: Using a for loop to compare characters
function isPalindromeAlt(inputString) {
  let left = 0;
  let right = inputString.length - 1;
  while (left < right) {
    if (inputString[left] !== inputString[right]) {
      console.log(`${inputString} is not a palindrome.`);
      return;
    }
    left++;
    right--;
  }
  console.log(`${inputString} is a palindrome.`);
}
isPalindromeAlt("madam");
isPalindromeAlt("hello");

// 2. Find the factorial of a given number
// Approach 1: Using a for loop
const findFactorial = (number) => {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${number} is ${factorial}`);
};
findFactorial(5);

// Approach 2: Using recursion
const findFactorialRecursion = (number) => {
  if (number === 0) return 1;
  return number * findFactorialRecursion(number - 1);
};
console.log(`Factorial of 5 is ${findFactorialRecursion(5)}`);

// 3. Check if a number is prime
// Approach 1: Using a for loop
function isPrime(number) {
  if (number < 2) {
    console.log(`${number} is not a prime number.`);
    return;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      console.log(`${number} is not a prime number.`);
      return;
    }
  }
  console.log(`${number} is a prime number.`);
}
isPrime(17);

// Approach 2: Using the Array every method
function isPrimeAlt(number) {
  if (number < 2) {
    console.log(`${number} is not a prime number.`);
    return;
  }
  const isPrime = Array.from(
    { length: Math.floor(Math.sqrt(number)) - 1 },
    (_, i) => i + 2
  ).every((i) => number % i !== 0);
  console.log(
    isPrime
      ? `${number} is a prime number.`
      : `${number} is not a prime number.`
  );
}
isPrimeAlt(17);

// 4. Calculate the sum of all numbers in an array
// Approach 1: Using a for loop
function sumArray(numbers) {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  console.log(`The sum of the array is ${sum}`);
}
sumArray([1, 2, 3, 4, 5]);

// Approach 2: Using reduce method
function sumArrayReduce(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  console.log(`The sum of the array is ${sum}`);
}
sumArrayReduce([1, 2, 3, 4, 5]);

// 5. Find the largest number in an array
// Approach 1: Using a for loop
const findLargestNumber = (numbers) => {
  let max = numbers[0];
  for (let num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  console.log(`The largest number in the array is ${max}`);
};
findLargestNumber([3, 5, 7, 2, 8]);

// Approach 2: Using Math.max and spread operator
const findLargestNumberAlt = (numbers) => {
  const max = Math.max(...numbers);
  console.log(`The largest number in the array is ${max}`);
};
findLargestNumberAlt([3, 5, 7, 2, 8]);

// 6. Reverse words in a sentence
// Approach 1: Using split, reverse, and join
function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.reverse().join(" ");
  console.log(`Reversed sentence: ${reversedWords}`);
}
reverseWords("hello world this is JavaScript");

// Approach 2: Using a for loop
function reverseWordsAlt(sentence) {
  const words = sentence.split(" ");
  let reversed = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + " ";
  }
  console.log(`Reversed sentence: ${reversed.trim()}`);
}
reverseWordsAlt("hello world this is JavaScript");

// 7. Check if two strings are anagrams
// Approach 1: Using split, sort, and join
function areAnagrams(string1, string2) {
  const sorted1 = string1.split("").sort().join("");
  const sorted2 = string2.split("").sort().join("");
  console.log(
    sorted1 === sorted2
      ? `${string1} and ${string2} are anagrams.`
      : `${string1} and ${string2} are not anagrams.`
  );
}
areAnagrams("listen", "silent");

// Approach 2: Using object frequency count
function areAnagramsAlt(string1, string2) {
  if (string1.length !== string2.length) {
    console.log(`${string1} and ${string2} are not anagrams.`);
    return;
  }
  const charCount = (str) => {
    return str.split("").reduce((count, char) => {
      count[char] = (count[char] || 0) + 1;
      return count;
    }, {});
  };
  console.log(
    JSON.stringify(charCount(string1)) === JSON.stringify(charCount(string2))
      ? `${string1} and ${string2} are anagrams.`
      : `${string1} and ${string2} are not anagrams.`
  );
}
areAnagramsAlt("listen", "silent");

// 8. Remove duplicate numbers from an array
// Approach 1: Using Set
function removeDuplicates(numbers) {
  const uniqueNumbers = [...new Set(numbers)];
  console.log(`Array without duplicates: ${uniqueNumbers}`);
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);

// Approach 2: Using filter and indexOf
function removeDuplicatesAlt(numbers) {
  const uniqueNumbers = numbers.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  console.log(`Array without duplicates: ${uniqueNumbers}`);
}
removeDuplicatesAlt([1, 2, 2, 3, 4, 4, 5]);

// 9. Count the frequency of each character in a string
// Approach 1: Using a loop and an object
const charFrequency = (inputString) => {
  const frequency = {};
  for (let char of inputString) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  console.log(`Character frequency:`, frequency);
};
charFrequency("javascript");

// Approach 2: Using reduce method
const charFrequencyAlt = (inputString) => {
  const frequency = inputString.split("").reduce((count, char) => {
    count[char] = (count[char] || 0) + 1;
    return count;
  }, {});
  console.log(`Character frequency:`, frequency);
};
charFrequencyAlt("javascript");

// 10. Find the second largest number in an array
// Approach 1: Using two variables
function secondLargest(numbers) {
  let first = -Infinity,
    second = -Infinity;
  for (let num of numbers) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  console.log(`Second largest number is ${second}`);
}
secondLargest([10, 20, 30, 40, 50]);

// Approach 2: Sorting the array and finding the second largest
function secondLargestAlt(numbers) {
  const sortedNumbers = [...numbers].sort((a, b) => b - a);
  console.log(`Second largest number is ${sortedNumbers[1]}`);
}
secondLargestAlt([10, 20, 30, 40, 50]);

// 11. Check if a string has unique characters
// Approach 1: Using a Set
function hasUniqueCharacters(inputString) {
  const charSet = new Set(inputString);
  console.log(
    charSet.size === inputString.length
      ? `"${inputString}" has all unique characters.`
      : `"${inputString}" does not have unique characters.`
  );
}
hasUniqueCharacters("abcdef");
hasUniqueCharacters("aabbcc");

// Approach 2: Using a loop
function hasUniqueCharactersAlt(inputString) {
  const charArray = [];
  for (let char of inputString) {
    if (charArray.includes(char)) {
      console.log(`${inputString} does not have unique characters.`);
      return;
    }
    charArray.push(char);
  }
  console.log(`${inputString} has all unique characters.`);
}
hasUniqueCharactersAlt("abcdef");
hasUniqueCharactersAlt("aabbcc");

// 12. Rotate an array by `k` positions to the right
// Approach 1: Using slice and concat
function rotateArray(arr, k) {
  const rotation = k % arr.length;
  const rotatedArr = arr.slice(-rotation).concat(arr.slice(0, -rotation));
  console.log(`Rotated array: ${rotatedArr}`);
}
rotateArray([1, 2, 3, 4, 5], 2);

// Approach 2: Using a loop to move elements
function rotateArrayAlt(arr, k) {
  const n = arr.length;
  k = k % n;
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  console.log(`Rotated array: ${arr}`);
}
rotateArrayAlt([1, 2, 3, 4, 5], 2);

// 13. Find the longest word in a sentence
// Approach 1: Using split and reduce
function longestWord(sentence) {
  const words = sentence.split(" ");
  const longest = words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
  console.log(`Longest word: ${longest}`);
}
longestWord("I am learning JavaScript programming");

// Approach 2: Using a loop
function longestWordAlt(sentence) {
  const words = sentence.split(" ");
  let longest = words[0];
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  console.log(`Longest word: ${longest}`);
}
longestWordAlt("I am learning JavaScript programming");

// 14. Flatten a nested array
// Approach 1: Using flat method
function flattenArray(nestedArray) {
  const flattened = nestedArray.flat(Infinity);
  console.log(`Flattened array: ${flattened}`);
}
flattenArray([1, [2, [3, [4, 5]]]]);

// Approach 2: Using recursion
function flattenArrayAlt(arr) {
  const flattened = arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArrayAlt(val) : val),
    []
  );
  console.log(`Flattened array: ${flattened}`);
}
flattenArrayAlt([1, [2, [3, [4, 5]]]]);

// 15. Generate the Fibonacci sequence up to a given number `n`
// Approach 1: Using a for loop
function generateFibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(`Fibonacci sequence up to ${n} terms: ${fib}`);
}
generateFibonacci(10);

// Approach 2: Using recursion
function generateFibonacciAlt(n, fib = [0, 1]) {
  if (fib.length >= n) {
    console.log(`Fibonacci sequence up to ${n} terms: ${fib}`);
    return;
  }
  fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  generateFibonacciAlt(n, fib);
}
generateFibonacciAlt(10);

// simple problems :

// 1. Check if a number is even or odd
// Simple Approach
function isEvenOrOddSimple(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even.`);
  } else {
    console.log(`${num} is odd.`);
  }
}
isEvenOrOddSimple(5); // Output: 5 is odd.

// Medium Approach
const isEvenOrOddMedium = (num) => {
  const result = num % 2 === 0 ? "even" : "odd";
  console.log(`${num} is ${result}.`);
};
isEvenOrOddMedium(5); // Output: 5 is odd.

// Hard Approach
const isEvenOrOddHard = (num) => {
  console.log(`${num} is ${num % 2 === 0 ? "even" : "odd"}.`);
};
isEvenOrOddHard(5); // Output: 5 is odd.

// 2. Find the sum of digits in a number
// Simple Approach
function sumOfDigitsSimple(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(`Sum of digits: ${sum}`);
}
sumOfDigitsSimple(123); // Output: Sum of digits: 6

// Medium Approach
function sumOfDigitsMedium(num) {
  const sum = String(num)
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
  console.log(`Sum of digits: ${sum}`);
}
sumOfDigitsMedium(123); // Output: Sum of digits: 6

// Hard Approach
const sumOfDigitsHard = (num) => {
  console.log(
    `Sum of digits: ${String(num)
      .split("")
      .map(Number)
      .reduce((a, b) => a + b)}`
  );
};
sumOfDigitsHard(123); // Output: Sum of digits: 6

// 3. Check if a number is positive, negative, or zero
// Simple Approach
function checkSignSimple(num) {
  if (num > 0) {
    console.log(`${num} is positive.`);
  } else if (num < 0) {
    console.log(`${num} is negative.`);
  } else {
    console.log(`${num} is zero.`);
  }
}
checkSignSimple(5); // Output: 5 is positive.

// Medium Approach
const checkSignMedium = (num) => {
  console.log(
    `${num} is ${num > 0 ? "positive" : num < 0 ? "negative" : "zero"}.`
  );
};
checkSignMedium(5); // Output: 5 is positive.

// Hard Approach
function checkSignHard(num) {
  let result = num === 0 ? "zero" : num > 0 ? "positive" : "negative";
  console.log(`${num} is ${result}.`);
}
checkSignHard(5); // Output: 5 is positive.

// 4. Convert a number to its binary representation
// Simple Approach
function toBinarySimple(num) {
  console.log(`Binary representation: ${num.toString(2)}`);
}
toBinarySimple(10); // Output: Binary representation: 1010

// Medium Approach
const toBinaryMedium = (num) =>
  console.log(`Binary representation: ${num.toString(2)}`);
toBinaryMedium(10); // Output: Binary representation: 1010

// Hard Approach
function toBinaryHard(num) {
  let binary = "";
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  console.log(`Binary representation: ${binary}`);
}
toBinaryHard(10); // Output: Binary representation: 1010

// 5. Reverse a string
// Simple Approach
function reverseStringSimple(str) {
  console.log(`Reversed string: ${str.split("").reverse().join("")}`);
}
reverseStringSimple("hello"); // Output: Reversed string: olleh

// Medium Approach
const reverseStringMedium = (str) =>
  console.log(
    `Reversed string: ${str.split("").reduce((rev, char) => char + rev, "")}`
  );
reverseStringMedium("hello"); // Output: Reversed string: olleh

// Hard Approach
function reverseStringHard(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(`Reversed string: ${reversed}`);
}
reverseStringHard("hello"); // Output: Reversed string: olleh

// 6. Check if a number is a perfect square
// Simple Approach
function isPerfectSquareSimple(num) {
  const sqrt = Math.sqrt(num);
  console.log(
    sqrt === Math.floor(sqrt)
      ? `${num} is a perfect square.`
      : `${num} is not a perfect square.`
  );
}
isPerfectSquareSimple(16); // Output: 16 is a perfect square.

// Medium Approach
const isPerfectSquareMedium = (num) => {
  const sqrt = Math.sqrt(num);
  console.log(
    sqrt === parseInt(sqrt)
      ? `${num} is a perfect square.`
      : `${num} is not a perfect square.`
  );
};
isPerfectSquareMedium(16); // Output: 16 is a perfect square.

// Hard Approach
function isPerfectSquareHard(num) {
  if (num < 0) {
    console.log(`${num} is not a perfect square.`);
    return;
  }
  let sqrt = 0;
  while (sqrt * sqrt < num) {
    sqrt++;
  }
  console.log(
    sqrt * sqrt === num
      ? `${num} is a perfect square.`
      : `${num} is not a perfect square.`
  );
}
isPerfectSquareHard(16); // Output: 16 is a perfect square.

// 7. Find the GCD of two numbers
// Simple Approach
function gcdSimple(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  console.log(`GCD is: ${a}`);
}
gcdSimple(36, 60); // Output: GCD is: 12

// Medium Approach
const gcdMedium = (a, b) => {
  while (b) {
    [a, b] = [b, a % b];
  }
  console.log(`GCD is: ${a}`);
};
gcdMedium(36, 60); // Output: GCD is: 12

// Hard Approach
function gcdHard(a, b) {
  let gcd = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  console.log(`GCD is: ${gcd}`);
}
gcdHard(36, 60); // Output: GCD is: 12

// 8. Find the LCM of two numbers
// Simple Approach
function lcmSimple(a, b) {
  const lcm = (a * b) / gcdSimple(a, b);
  console.log(`LCM is: ${lcm}`);
}
lcmSimple(36, 60); // Output: LCM is: 180

// Medium Approach
const lcmMedium = (a, b) => {
  const lcm = (a * b) / gcdSimple(a, b);
  console.log(`LCM is: ${lcm}`);
};
lcmMedium(36, 60); // Output: LCM is: 180

// Hard Approach
function lcmHard(a, b) {
  let max = Math.max(a, b);
  let lcm = max;
  while (lcm % a !== 0 || lcm % b !== 0) {
    lcm += max;
  }
  console.log(`LCM is: ${lcm}`);
}
lcmHard(36, 60); // Output: LCM is: 180

// 9. Check if a number is a power of two
// Simple Approach
function isPowerOfTwoSimple(num) {
  console.log(
    num > 0 && (num & (num - 1)) === 0
      ? `${num} is a power of two.`
      : `${num} is not a power of two.`
  );
}
isPowerOfTwoSimple(16); // Output: 16 is a power of two.

// Medium Approach
const isPowerOfTwoMedium = (num) => {
  console.log(
    num > 0 && (num & (num - 1)) === 0
      ? `${num} is a power of two.`
      : `${num} is not a power of two.`
  );
};
isPowerOfTwoMedium(16); // Output: 16 is a power of two.

// Hard Approach
function isPowerOfTwoHard(num) {
  while (num > 1) {
    if (num % 2 !== 0) {
      console.log(`${num} is not a power of two.`);
      return;
    }
    num /= 2;
  }
  console.log(`${num} is a power of two.`);
}
isPowerOfTwoHard(16); // Output: 1 is a power of two.

// 10. Find the factorial of a number
// Simple Approach
function factorialSimple(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(`Factorial is: ${result}`);
}
factorialSimple(5); // Output: Factorial is: 120

// Medium Approach
const factorialMedium = (n) => {
  console.log(`Factorial is: ${n === 0 ? 1 : n * factorialMedium(n - 1)}`);
};
factorialMedium(5); // Output: Factorial is: 120

// Hard Approach
function factorialHard(n) {
  let result = 1;
  const calcFactorial = (n) => {
    if (n <= 1) return result;
    result *= n;
    return calcFactorial(n - 1);
  };
  console.log(`Factorial is: ${calcFactorial(n)}`);
}
factorialHard(5); // Output: Factorial is: 120

// 11. Palindrome check for a string
// Simple Approach
function isPalindromeSimple(str) {
  const reversed = str.split("").reverse().join("");
  console.log(reversed === str ? "Palindrome" : "Not a palindrome");
}
isPalindromeSimple("madam"); // Output: Palindrome

// Medium Approach
const isPalindromeMedium = (str) => {
  const reversed = [...str].reverse().join("");
  console.log(reversed === str ? "Palindrome" : "Not a palindrome");
};
isPalindromeMedium("madam"); // Output: Palindrome

// Hard Approach
function isPalindromeHard(str) {
  let isPalindrome = true;
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }
  console.log(isPalindrome ? "Palindrome" : "Not a palindrome");
}
isPalindromeHard("madam"); // Output: Palindrome

// 12. Find the largest number in an array
// Simple Approach
function findLargestSimple(arr) {
  console.log(`Largest number: ${Math.max(...arr)}`);
}
findLargestSimple([1, 2, 3, 4, 5]); // Output: Largest number: 5

// Medium Approach
const findLargestMedium = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  console.log(`Largest number: ${max}`);
};
findLargestMedium([1, 2, 3, 4, 5]); // Output: Largest number: 5

// Hard Approach
function findLargestHard(arr) {
  let max = arr[0];
  arr.forEach((num) => (max = num > max ? num : max));
  console.log(`Largest number: ${max}`);
}
findLargestHard([1, 2, 3, 4, 5]); // Output: Largest number: 5

// 13. Count the frequency of elements in an array
// Simple Approach
function countFrequencySimple(arr) {
  const freq = {};
  arr.forEach((num) => (freq[num] = (freq[num] || 0) + 1));
  console.log(`Frequency: ${JSON.stringify(freq)}`);
}
countFrequencySimple([1, 2, 2, 3, 3, 3]); // Output: Frequency: {"1":1,"2":2,"3":3}

// Medium Approach
const countFrequencyMedium = (arr) => {
  const freq = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  console.log(`Frequency: ${JSON.stringify(freq)}`);
};
countFrequencyMedium([1, 2, 2, 3, 3, 3]); // Output: Frequency: {"1":1,"2":2,"3":3}

// Hard Approach
function countFrequencyHard(arr) {
  const freq = {};
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]]) {
      freq[arr[i]]++;
    } else {
      freq[arr[i]] = 1;
    }
  }
  console.log(`Frequency: ${JSON.stringify(freq)}`);
}
countFrequencyHard([1, 2, 2, 3, 3, 3]); // Output: Frequency: {"1":1,"2":2,"3":3}

// 14. Find the intersection of two arrays
// Simple Approach
function intersectionSimple(arr1, arr2) {
  const intersection = arr1.filter((value) => arr2.includes(value));
  console.log(`Intersection: [${intersection}]`);
}
intersectionSimple([1, 2, 3], [2, 3, 4]); // Output: Intersection: [2, 3]

// Medium Approach
const intersectionMedium = (arr1, arr2) => {
  const intersection = arr1.filter((value) => new Set(arr2).has(value));
  console.log(`Intersection: [${intersection}]`);
};
intersectionMedium([1, 2, 3], [2, 3, 4]); // Output: Intersection: [2, 3]

// Hard Approach
function intersectionHard(arr1, arr2) {
  let i = 0,
    j = 0;
  const intersection = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      intersection.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  console.log(`Intersection: [${intersection}]`);
}
intersectionHard([1, 2, 3], [2, 3, 4]); // Output: Intersection: [2, 3]

// 15. Find the union of two arrays
// Simple Approach
function unionSimple(arr1, arr2) {
  const union = [...new Set([...arr1, ...arr2])];
  console.log(`Union: [${union}]`);
}
unionSimple([1, 2, 3], [3, 4, 5]); // Output: Union: [1, 2, 3, 4, 5]

// Medium Approach
const unionMedium = (arr1, arr2) => {
  const union = [...arr1, ...arr2].filter(
    (value, index, self) => self.indexOf(value) === index
  );
  console.log(`Union: [${union}]`);
};
unionMedium([1, 2, 3], [3, 4, 5]); // Output: Union: [1, 2, 3, 4, 5]

// Hard Approach
function unionHard(arr1, arr2) {
  const union = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!union.includes(arr1[i])) {
      union.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!union.includes(arr2[i])) {
      union.push(arr2[i]);
    }
  }
  console.log(`Union: [${union}]`);
}
unionHard([1, 2, 3], [3, 4, 5]); // Output: Union: [1, 2, 3, 4, 5]

// 16. Find the missing number in an array (1 to n)
// Simple Approach
function findMissingSimple(arr, n) {
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((sum, num) => sum + num, 0);
  console.log(`Missing number: ${totalSum - arrSum}`);
}
findMissingSimple([1, 2, 4, 5], 5); // Output: Missing number: 3

// Medium Approach
const findMissingMedium = (arr, n) => {
  const totalSum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((sum, num) => sum + num, 0);
  console.log(`Missing number: ${totalSum - arrSum}`);
};
findMissingMedium([1, 2, 4, 5], 5); // Output: Missing number: 3

// Hard Approach
function findMissingHard(arr, n) {
  const totalSum = (n * (n + 1)) / 2;
  let arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }
  console.log(`Missing number: ${totalSum - arrSum}`);
}
findMissingHard([1, 2, 4, 5], 5); // Output: Missing number: 3

// 17. Find the common characters in two strings
// Simple Approach
function commonCharactersSimple(str1, str2) {
  const common = [...str1].filter((char) => str2.includes(char));
  console.log(`Common characters: ${common.join("")}`);
}
commonCharactersSimple("apple", "grape"); // Output: Common characters: ap

// Medium Approach
const commonCharactersMedium = (str1, str2) => {
  const common = [...str1].filter((char) => new Set(str2).has(char));
  console.log(`Common characters: ${common.join("")}`);
};
commonCharactersMedium("apple", "grape"); // Output: Common characters: ap

// Hard Approach
function commonCharactersHard(str1, str2) {
  const common = [];
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i]) && !common.includes(str1[i])) {
      common.push(str1[i]);
    }
  }
  console.log(`Common characters: ${common.join("")}`);
}
commonCharactersHard("apple", "grape"); // Output: Common characters: ap

// 18. Sort an array of numbers in ascending order
// Simple Approach
function sortArraySimple(arr) {
  console.log(`Sorted array: [${arr.sort((a, b) => a - b)}]`);
}
sortArraySimple([5, 3, 8, 1, 2]); // Output: Sorted array: [1, 2, 3, 5, 8]

// Medium Approach
const sortArrayMedium = (arr) => {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  console.log(`Sorted array: [${sortedArr}]`);
};
sortArrayMedium([5, 3, 8, 1, 2]); // Output: Sorted array: [1, 2, 3, 5, 8]

// Hard Approach
function sortArrayHard(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log(`Sorted array: [${arr}]`);
}
sortArrayHard([5, 3, 8, 1, 2]); // Output: Sorted array: [1, 2, 3, 5, 8]

// 19. Find the unique elements in an array
// Simple Approach
function uniqueElementsSimple(arr) {
  console.log(`Unique elements: [${[...new Set(arr)]}]`);
}
uniqueElementsSimple([1, 2, 2, 3, 4, 4, 5]); // Output: Unique elements: [1, 2, 3, 4, 5]

// Medium Approach
const uniqueElementsMedium = (arr) => {
  const unique = arr.filter(
    (value, index, self) => self.indexOf(value) === index
  );
  console.log(`Unique elements: [${unique}]`);
};
uniqueElementsMedium([1, 2, 2, 3, 4, 4, 5]); // Output: Unique elements: [1, 2, 3, 4, 5]

// Hard Approach
function uniqueElementsHard(arr) {
  const unique = [];
  arr.forEach((num) => {
    if (!unique.includes(num)) unique.push(num);
  });
  console.log(`Unique elements: [${unique}]`);
}
uniqueElementsHard([1, 2, 2, 3, 4, 4, 5]); // Output: Unique elements: [1, 2, 3, 4, 5]

// 20. Find the sum of all elements in an array
// Simple Approach
function sumArraySimple(arr) {
  console.log(
    `Sum of array elements: ${arr.reduce((sum, num) => sum + num, 0)}`
  );
}
sumArraySimple([1, 2, 3, 4, 5]); // Output: Sum of array elements: 15

// Medium Approach
const sumArrayMedium = (arr) => {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  console.log(`Sum of array elements: ${sum}`);
};
sumArrayMedium([1, 2, 3, 4, 5]); // Output: Sum of array elements: 15

// Hard Approach
function sumArrayHard(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`Sum of array elements: ${sum}`);
}
sumArrayHard([1, 2, 3, 4, 5]); // Output: Sum of array elements: 15

// 21. Check if a string is a palindrome
// Simple Approach
function isPalindromeSimple(str) {
  const reversed = str.split("").reverse().join("");
  console.log(`Is palindrome: ${str === reversed}`);
}
isPalindromeSimple("madam"); // Output: Is palindrome: true

// Medium Approach
const isPalindromeMedium1 = (str) => {
  const reversed = [...str].reverse().join("");
  console.log(`Is palindrome: ${str === reversed}`);
};
isPalindromeMedium1("madam"); // Output: Is palindrome: true

// Hard Approach
function isPalindromeHard(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return console.log("Is palindrome: false");
    left++;
    right--;
  }
  console.log("Is palindrome: true");
}
isPalindromeHard("madam"); // Output: Is palindrome: true

// 22. Check if a number is prime
// Simple Approach
function isPrimeSimple(num) {
  if (num < 2) {
    console.log("Is prime: false");
    return;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      console.log("Is prime: false");
      return;
    }
  }
  console.log("Is prime: true");
}
isPrimeSimple(7); // Output: Is prime: true

// Medium Approach
const isPrimeMedium = (num) => {
  if (num < 2) return console.log("Is prime: false");
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return console.log("Is prime: false");
  }
  console.log("Is prime: true");
};
isPrimeMedium(7); // Output: Is prime: true

// Hard Approach
function isPrimeHard(num) {
  if (num < 2) return console.log("Is prime: false");
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return console.log("Is prime: false");
  }
  console.log("Is prime: true");
}
isPrimeHard(7); // Output: Is prime: true

// 23. Reverse a string
// Simple Approach
function reverseStringSimple(str) {
  console.log(`Reversed string: ${str.split("").reverse().join("")}`);
}
reverseStringSimple("hello"); // Output: Reversed string: olleh

// Medium Approach
const reverseStringMedium1 = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(`Reversed string: ${reversed}`);
};
reverseStringMedium1("hello"); // Output: Reversed string: olleh

// Hard Approach
function reverseStringHard(str) {
  let left = 0,
    right = str.length - 1;
  const arr = [...str];
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  console.log(`Reversed string: ${arr.join("")}`);
}
reverseStringHard("hello"); // Output: Reversed string: olleh

// 24. Find the factorial of a number
// Simple Approach
function factorialSimple(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(`Factorial: ${result}`);
}
factorialSimple(5); // Output: Factorial: 120

// Medium Approach
const factorialMedium1 = (n) => {
  if (n === 0 || n === 1) return console.log("Factorial: 1");
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  console.log(`Factorial: ${result}`);
};
factorialMedium1(5); // Output: Factorial: 120

// Hard Approach
function factorialHard(n) {
  if (n === 0 || n === 1) return console.log("Factorial: 1");
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  console.log(`Factorial: ${result}`);
}
factorialHard(5); // Output: Factorial: 120

// 25. Find the Fibonacci sequence up to a given number
// Simple Approach
function fibonacciSimple(n) {
  let a = 0,
    b = 1;
  let result = [a];
  while (b <= n) {
    result.push(b);
    [a, b] = [b, a + b];
  }
  console.log(`Fibonacci sequence: ${result}`);
}
fibonacciSimple(10); // Output: Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8]

// Medium Approach
const fibonacciMedium = (n) => {
  let a = 0,
    b = 1;
  const result = [a];
  while (b <= n) {
    result.push(b);
    [a, b] = [b, a + b];
  }
  console.log(`Fibonacci sequence: ${result}`);
};
fibonacciMedium(10); // Output: Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8]

// Hard Approach
function fibonacciHard(n) {
  let a = 0,
    b = 1;
  const sequence = [a];
  while (b <= n) {
    sequence.push(b);
    let next = a + b;
    a = b;
    b = next;
  }
  console.log(`Fibonacci sequence: ${sequence}`);
}
fibonacciHard(10); // Output: Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8]

// 26. Check if a number is an Armstrong number
// Simple Approach
function isArmstrongSimple(num) {
  const digits = num.toString().split("");
  const sum = digits.reduce(
    (sum, digit) => sum + Math.pow(Number(digit), digits.length),
    0
  );
  console.log(`Is Armstrong number: ${sum === num}`);
}
isArmstrongSimple(153); // Output: Is Armstrong number: true

// Medium Approach
const isArmstrongMedium = (num) => {
  const digits = num.toString().split("");
  const sum = digits.reduce(
    (sum, digit) => sum + Math.pow(Number(digit), digits.length),
    0
  );
  console.log(`Is Armstrong number: ${sum === num}`);
};
isArmstrongMedium(153); // Output: Is Armstrong number: true

// Hard Approach
function isArmstrongHard(num) {
  const digits = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(Number(digits[i]), digits.length);
  }
  console.log(`Is Armstrong number: ${sum === num}`);
}
isArmstrongHard(153); // Output: Is Armstrong number: true

// 27. Convert a string to a number
// Simple Approach
function stringToNumberSimple(str) {
  console.log(`Converted number: ${Number(str)}`);
}
stringToNumberSimple("123"); // Output: Converted number: 123

// Medium Approach
const stringToNumberMedium = (str) => {
  console.log(`Converted number: ${parseInt(str)}`);
};
stringToNumberMedium("123"); // Output: Converted number: 123

// Hard Approach
function stringToNumberHard(str) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = result * 10 + (str.charCodeAt(i) - 48);
  }
  console.log(`Converted number: ${result}`);
}
stringToNumberHard("123"); // Output: Converted number: 123

// 28. Find the common elements in three arrays
// Simple Approach
function commonElementsSimple(arr1, arr2, arr3) {
  const common = arr1.filter(
    (value) => arr2.includes(value) && arr3.includes(value)
  );
  console.log(`Common elements: [${common}]`);
}
commonElementsSimple([1, 2, 3], [2, 3, 4], [3, 4, 5]); // Output: Common elements: [3]

// Medium Approach
const commonElementsMedium = (arr1, arr2, arr3) => {
  const common = arr1.filter(
    (value) => arr2.includes(value) && arr3.includes(value)
  );
  console.log(`Common elements: [${common}]`);
};
commonElementsMedium([1, 2, 3], [2, 3, 4], [3, 4, 5]); // Output: Common elements: [3]

// Hard Approach
function commonElementsHard(arr1, arr2, arr3) {
  const common = [];
  arr1.forEach((value) => {
    if (
      arr2.includes(value) &&
      arr3.includes(value) &&
      !common.includes(value)
    ) {
      common.push(value);
    }
  });
  console.log(`Common elements: [${common}]`);
}
commonElementsHard([1, 2, 3], [2, 3, 4], [3, 4, 5]); // Output: Common elements: [3]

// 29. Check if a string contains only digits
// Simple Approach
function isDigitsOnlySimple(str) {
  console.log(`Contains only digits: ${/^\d+$/.test(str)}`);
}
isDigitsOnlySimple("1234"); // Output: Contains only digits: true

// Medium Approach
const isDigitsOnlyMedium = (str) => {
  console.log(
    `Contains only digits: ${str
      .split("")
      .every((char) => char >= "0" && char <= "9")}`
  );
};
isDigitsOnlyMedium("1234"); // Output: Contains only digits: true

// Hard Approach
function isDigitsOnlyHard(str) {
  let result = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] < "0" || str[i] > "9") {
      result = false;
      break;
    }
  }
  console.log(`Contains only digits: ${result}`);
}
isDigitsOnlyHard("1234"); // Output: Contains only digits: true

// 30. Find the largest number in an array
// Simple Approach
function largestNumberSimple(arr) {
  console.log(`Largest number: ${Math.max(...arr)}`);
}
largestNumberSimple([1, 2, 3, 4, 5]); // Output: Largest number: 5

// Medium Approach
const largestNumberMedium = (arr) => {
  let largest = arr[0];
  arr.forEach((num) => {
    if (num > largest) largest = num;
  });
  console.log(`Largest number: ${largest}`);
};
largestNumberMedium([1, 2, 3, 4, 5]); // Output: Largest number: 5

// Hard Approach
function largestNumberHard(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) largest = arr[i];
  }
  console.log(`Largest number: ${largest}`);
}
largestNumberHard([1, 2, 3, 4, 5]); // Output: Largest number: 5

// 31. Find the sum of an array
// Simple Approach
function sumArraySimple(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  console.log(`Sum of array: ${sum}`);
}
sumArraySimple([1, 2, 3, 4, 5]); // Output: Sum of array: 15

// Medium Approach
const sumArrayMedium1 = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(`Sum of array: ${sum}`);
};
sumArrayMedium1([1, 2, 3, 4, 5]); // Output: Sum of array: 15

// Hard Approach
function sumArrayHard(arr) {
  let sum = 0;
  let index = 0;
  while (index < arr.length) {
    sum += arr[index];
    index++;
  }
  console.log(`Sum of array: ${sum}`);
}
sumArrayHard([1, 2, 3, 4, 5]); // Output: Sum of array: 15

// 32. Find the second largest number in an array
// Simple Approach
function secondLargestSimple(arr) {
  arr.sort((a, b) => b - a);
  console.log(`Second largest number: ${arr[1]}`);
}
secondLargestSimple([1, 2, 3, 4, 5]); // Output: Second largest number: 4

// Medium Approach
const secondLargestMedium = (arr) => {
  arr = [...new Set(arr)];
  arr.sort((a, b) => b - a);
  console.log(`Second largest number: ${arr[1]}`);
};
secondLargestMedium([1, 2, 3, 4, 5]); // Output: Second largest number: 4

// Hard Approach
function secondLargestHard(arr) {
  let first = -Infinity,
    second = -Infinity;
  arr.forEach((num) => {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  });
  console.log(`Second largest number: ${second}`);
}
secondLargestHard([1, 2, 3, 4, 5]); // Output: Second largest number: 4

// 33. Check if two strings are anagrams
// Simple Approach
function areAnagramsSimple(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  console.log(`Are anagrams: ${sortedStr1 === sortedStr2}`);
}
areAnagramsSimple("listen", "silent"); // Output: Are anagrams: true

// Medium Approach
const areAnagramsMedium = (str1, str2) => {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");
  console.log(`Are anagrams: ${sortedStr1 === sortedStr2}`);
};
areAnagramsMedium("listen", "silent"); // Output: Are anagrams: true

// Hard Approach
function areAnagramsHard(str1, str2) {
  if (str1.length !== str2.length) return console.log("Are anagrams: false");
  const countMap = {};
  for (let char of str1) {
    countMap[char] = (countMap[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!countMap[char]) return console.log("Are anagrams: false");
    countMap[char]--;
  }
  console.log("Are anagrams: true");
}
areAnagramsHard("listen", "silent"); // Output: Are anagrams: true

// 34. Count the number of vowels in a string
// Simple Approach
function countVowelsSimple(str) {
  const vowels = "aeiou";
  const count = str
    .split("")
    .filter((char) => vowels.includes(char.toLowerCase())).length;
  console.log(`Number of vowels: ${count}`);
}
countVowelsSimple("hello world"); // Output: Number of vowels: 3

// Medium Approach
const countVowelsMedium = (str) => {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) count++;
  }
  console.log(`Number of vowels: ${count}`);
};
countVowelsMedium("hello world"); // Output: Number of vowels: 3

// Hard Approach
function countVowelsHard(str) {
  let count = 0;
  let index = 0;
  while (index < str.length) {
    if ("aeiou".includes(str[index].toLowerCase())) count++;
    index++;
  }
  console.log(`Number of vowels: ${count}`);
}
countVowelsHard("hello world"); // Output: Number of vowels: 3

// 35. Find the intersection of two arrays
// Simple Approach
function intersectionSimple(arr1, arr2) {
  const intersection = arr1.filter((value) => arr2.includes(value));
  console.log(`Intersection: [${intersection}]`);
}
intersectionSimple([1, 2, 3], [2, 3, 4]); // Output: Intersection: [2, 3]

// Medium Approach
const intersectionMedium1 = (arr1, arr2) => {
  const intersection = arr1.filter((value) => arr2.includes(value));
  console.log(`Intersection: [${intersection}]`);
};
intersectionMedium1([1, 2, 3], [2, 3, 4]); // Output: Intersection: [2, 3]

// Hard Approach
function intersectionHard(arr1, arr2) {
  const intersection = [];
  arr1.forEach((value) => {
    if (arr2.includes(value) && !intersection.includes(value)) {
      intersection.push(value);
    }
  });
  console.log(`Intersection: [${intersection}]`);
}
intersectionHard([1, 2, 3], [2, 3, 4]); // Output: Intersection: [2, 3]

// 36. Merge two sorted arrays
// Simple Approach
function mergeArraysSimple(arr1, arr2) {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(`Merged array: [${merged}]`);
}
mergeArraysSimple([1, 3, 5], [2, 4, 6]); // Output: Merged array: [1, 2, 3, 4, 5, 6]

// Medium Approach
const mergeArraysMedium = (arr1, arr2) => {
  let i = 0,
    j = 0,
    merged = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
    else merged.push(arr2[j++]);
  }
  while (i < arr1.length) merged.push(arr1[i++]);
  while (j < arr2.length) merged.push(arr2[j++]);
  console.log(`Merged array: [${merged}]`);
};
mergeArraysMedium([1, 3, 5], [2, 4, 6]); // Output: Merged array: [1, 2, 3, 4, 5, 6]

// Hard Approach
function mergeArraysHard(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length) merged.push(arr2[j++]);
    else if (j >= arr2.length) merged.push(arr1[i++]);
    else if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
    else merged.push(arr2[j++]);
  }
  console.log(`Merged array: [${merged}]`);
}
mergeArraysHard([1, 3, 5], [2, 4, 6]); // Output: Merged array: [1, 2, 3, 4, 5, 6]

// 37. Find the largest word in a sentence
// Simple Approach
function largestWordSimple(str) {
  const words = str.split(" ");
  const largest = words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );
  console.log(`Largest word: ${largest}`);
}
largestWordSimple("Find the largest word in this sentence"); // Output: Largest word: largest

// Medium Approach
const largestWordMedium = (str) => {
  const words = str.split(" ");
  let largest = "";
  for (let word of words) {
    if (word.length > largest.length) largest = word;
  }
  console.log(`Largest word: ${largest}`);
};
largestWordMedium("Find the largest word in this sentence"); // Output: Largest word: largest

// Hard Approach
function largestWordHard(str) {
  const words = str.split(" ");
  let largest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > largest.length) largest = words[i];
  }
  console.log(`Largest word: ${largest}`);
}
largestWordHard("Find the largest word in this sentence"); // Output: Largest word: largest

// 38. Count the occurrences of a character in a string
// Simple Approach
function countCharSimple(str, char) {
  const count = str.split("").filter((c) => c === char).length;
  console.log(`Character occurrences: ${count}`);
}
countCharSimple("hello world", "l"); // Output: Character occurrences: 3

// Medium Approach
const countCharMedium = (str, char) => {
  let count = 0;
  for (let c of str) {
    if (c === char) count++;
  }
  console.log(`Character occurrences: ${count}`);
};
countCharMedium("hello world", "l"); // Output: Character occurrences: 3

// Hard Approach
function countCharHard(str, char) {
  let count = 0;
  let index = 0;
  while (index < str.length) {
    if (str[index] === char) count++;
    index++;
  }
  console.log(`Character occurrences: ${count}`);
}
countCharHard("hello world", "l"); // Output: Character occurrences: 3

// 39. Remove duplicates from an array
// Simple Approach
function removeDuplicatesSimple(arr) {
  const unique = [...new Set(arr)];
  console.log(`Array without duplicates: [${unique}]`);
}
removeDuplicatesSimple([1, 2, 2, 3, 4, 4, 5]); // Output: Array without duplicates: [1, 2, 3, 4, 5]

// Medium Approach
const removeDuplicatesMedium = (arr) => {
  const unique = [];
  arr.forEach((num) => {
    if (!unique.includes(num)) unique.push(num);
  });
  console.log(`Array without duplicates: [${unique}]`);
};
removeDuplicatesMedium([1, 2, 2, 3, 4, 4, 5]); // Output: Array without duplicates: [1, 2, 3, 4, 5]

// Hard Approach
function removeDuplicatesHard(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
  }
  console.log(`Array without duplicates: [${result}]`);
}
removeDuplicatesHard([1, 2, 2, 3, 4, 4, 5]); // Output: Array without duplicates: [1, 2, 3, 4, 5]

// 40. Reverse a string
// Simple Approach
function reverseStringSimple(str) {
  const reversed = str.split("").reverse().join("");
  console.log(`Reversed string: ${reversed}`);
}
reverseStringSimple("hello"); // Output: Reversed string: olleh

// Medium Approach
const reverseStringMedium2 = (str) => {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  console.log(`Reversed string: ${reversed}`);
};
reverseStringMedium2("hello"); // Output: Reversed string: olleh

// Hard Approach
function reverseStringHard(str) {
  let reversed = "";
  let index = str.length - 1;
  while (index >= 0) {
    reversed += str[index];
    index--;
  }
  console.log(`Reversed string: ${reversed}`);
}
reverseStringHard("hello"); // Output: Reversed string: olleh

// 41. Check if a number is prime
// Simple Approach
function isPrimeSimple(num) {
  if (num < 2) return console.log(`Prime: false`);
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return console.log(`Prime: false`);
  }
  console.log(`Prime: true`);
}
isPrimeSimple(7); // Output: Prime: true

// Medium Approach
const isPrimeMedium1 = (num) => {
  if (num < 2) return console.log(`Prime: false`);
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return console.log(`Prime: false`);
  }
  console.log(`Prime: true`);
};
isPrimeMedium1(7); // Output: Prime: true

// Hard Approach
function isPrimeHard(num) {
  if (num < 2) return console.log(`Prime: false`);
  let isPrime = true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  console.log(`Prime: ${isPrime}`);
}
isPrimeHard(7); // Output: Prime: true

// 42. Find the factorial of a number
// Simple Approach
function factorialSimple(num) {
  const result = num === 0 ? 1 : num * factorialSimple(num - 1);
  console.log(`Factorial: ${result}`);
}
factorialSimple(5); // Output: Factorial: 120

// Medium Approach
const factorialMedium2 = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(`Factorial: ${result}`);
};
factorialMedium2(5); // Output: Factorial: 120

// Hard Approach
function factorialHard(num) {
  let result = 1;
  let i = 1;
  while (i <= num) {
    result *= i;
    i++;
  }
  console.log(`Factorial: ${result}`);
}
factorialHard(5); // Output: Factorial: 120

// 43. Find the missing number in an array from 1 to N
// Simple Approach
function findMissingSimple(arr) {
  const expectedSum = ((arr.length + 1) * (arr.length + 2)) / 2;
  const actualSum = arr.reduce((acc, num) => acc + num, 0);
  console.log(`Missing number: ${expectedSum - actualSum}`);
}
findMissingSimple([1, 2, 4, 5]); // Output: Missing number: 3

// Medium Approach
const findMissingMedium1 = (arr) => {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  console.log(`Missing number: ${expectedSum - actualSum}`);
};
findMissingMedium1([1, 2, 4, 5]); // Output: Missing number: 3

// Hard Approach
function findMissingHard(arr) {
  const n = arr.length + 1;
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(`Missing number: ${(n * (n + 1)) / 2 - sum}`);
}
findMissingHard([1, 2, 4, 5]); // Output: Missing number: 3

// 44. Check if a string is palindrome
// Simple Approach
function isPalindromeSimple(str) {
  const reversed = str.split("").reverse().join("");
  console.log(`Is palindrome: ${str === reversed}`);
}
isPalindromeSimple("racecar"); // Output: Is palindrome: true

// Medium Approach
const isPalindromeMedium2 = (str) => {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return console.log(`Is palindrome: false`);
    left++;
    right--;
  }
  console.log(`Is palindrome: true`);
};
isPalindromeMedium2("racecar"); // Output: Is palindrome: true

// Hard Approach
function isPalindromeHard(str) {
  let start = 0,
    end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return console.log(`Is palindrome: false`);
    start++;
    end--;
  }
  console.log(`Is palindrome: true`);
}
isPalindromeHard("racecar"); // Output: Is palindrome: true

// 45. Count the occurrences of each element in an array
// Simple Approach
function countOccurrencesSimple(arr) {
  const countMap = arr.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  console.log(`Element counts: ${JSON.stringify(countMap)}`);
}
countOccurrencesSimple([1, 2, 2, 3, 3, 3, 4]); // Output: Element counts: {"1":1,"2":2,"3":3,"4":1}

// Medium Approach
const countOccurrencesMedium = (arr) => {
  const countMap = {};
  arr.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });
  console.log(`Element counts: ${JSON.stringify(countMap)}`);
};
countOccurrencesMedium([1, 2, 2, 3, 3, 3, 4]); // Output: Element counts: {"1":1,"2":2,"3":3,"4":1}

// Hard Approach
function countOccurrencesHard(arr) {
  const countMap = {};
  let index = 0;
  while (index < arr.length) {
    countMap[arr[index]] = (countMap[arr[index]] || 0) + 1;
    index++;
  }
  console.log(`Element counts: ${JSON.stringify(countMap)}`);
}
countOccurrencesHard([1, 2, 2, 3, 3, 3, 4]); // Output: Element counts: {"1":1,"2":2,"3":3,"4":1}

// 46. Find the common elements between three arrays
// Simple Approach
function commonElementsSimple(arr1, arr2, arr3) {
  const common = arr1.filter(
    (value) => arr2.includes(value) && arr3.includes(value)
  );
  console.log(`Common elements: [${common}]`);
}
commonElementsSimple([1, 2, 3], [2, 3, 4], [3, 4, 5]); // Output: Common elements: [3]

// Medium Approach
const commonElementsMedium1 = (arr1, arr2, arr3) => {
  const common = arr1.filter(
    (value) => arr2.includes(value) && arr3.includes(value)
  );
  console.log(`Common elements: [${common}]`);
};
commonElementsMedium1([1, 2, 3], [2, 3, 4], [3, 4, 5]); // Output: Common elements: [3]

// Hard Approach
function commonElementsHard(arr1, arr2, arr3) {
  let common = [];
  arr1.forEach((value) => {
    if (arr2.includes(value) && arr3.includes(value)) {
      common.push(value);
    }
  });
  console.log(`Common elements: [${common}]`);
}
commonElementsHard([1, 2, 3], [2, 3, 4], [3, 4, 5]); // Output: Common elements: [3]

// 47. Sort an array of strings
// Simple Approach
function sortStringsSimple(arr) {
  arr.sort();
  console.log(`Sorted strings: [${arr}]`);
}
sortStringsSimple(["apple", "banana", "cherry"]); // Output: Sorted strings: [apple, banana, cherry]

// Medium Approach
const sortStringsMedium = (arr) => {
  arr.sort((a, b) => a.localeCompare(b));
  console.log(`Sorted strings: [${arr}]`);
};
sortStringsMedium(["apple", "banana", "cherry"]); // Output: Sorted strings: [apple, banana, cherry]

// Hard Approach
function sortStringsHard(arr) {
  const sorted = arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  console.log(`Sorted strings: [${sorted}]`);
}
sortStringsHard(["apple", "banana", "cherry"]); // Output: Sorted strings: [apple, banana, cherry]

// 48. Merge two sorted arrays
// Simple Approach
function mergeArraysSimple(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  merged.sort((a, b) => a - b);
  console.log(`Merged sorted array: [${merged}]`);
}
mergeArraysSimple([1, 3, 5], [2, 4, 6]); // Output: Merged sorted array: [1, 2, 3, 4, 5, 6]

// Medium Approach
const mergeArraysMediumm = (arr1, arr2) => {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(`Merged sorted array: [${merged}]`);
};
mergeArraysMediumm([1, 3, 5], [2, 4, 6]); // Output: Merged sorted array: [1, 2, 3, 4, 5, 6]

// Hard Approach
function mergeArraysHard(arr1, arr2) {
  const merged = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }
  console.log(`Merged sorted array: [${merged}]`);
}
mergeArraysHard([1, 3, 5], [2, 4, 6]); // Output: Merged sorted array: [1, 2, 3, 4, 5, 6]

// 49. Find the longest substring without repeating characters
// Simple Approach
function longestSubstringSimple(str) {
  let result = "";
  let current = "";
  for (let i = 0; i < str.length; i++) {
    if (!current.includes(str[i])) {
      current += str[i];
      result = current.length > result.length ? current : result;
    } else {
      current = current.slice(current.indexOf(str[i]) + 1) + str[i];
    }
  }
  console.log(`Longest substring without repeating characters: ${result}`);
}
longestSubstringSimple("abcabcbb"); // Output: Longest substring without repeating characters: abc

// Medium Approach
const longestSubstringMedium = (str) => {
  let result = "";
  let current = "";
  for (let i = 0; i < str.length; i++) {
    if (!current.includes(str[i])) {
      current += str[i];
      result = current.length > result.length ? current : result;
    } else {
      current = current.slice(current.indexOf(str[i]) + 1) + str[i];
    }
  }
  console.log(`Longest substring without repeating characters: ${result}`);
};
longestSubstringMedium("abcabcbb"); // Output: Longest substring without repeating characters: abc

// Hard Approach
function longestSubstringHard(str) {
  let result = "";
  let current = "";
  for (let i = 0; i < str.length; i++) {
    if (!current.includes(str[i])) {
      current += str[i];
      result = current.length > result.length ? current : result;
    } else {
      current = current.slice(current.indexOf(str[i]) + 1) + str[i];
    }
  }
  console.log(`Longest substring without repeating characters: ${result}`);
}
longestSubstringHard("abcabcbb"); // Output: Longest substring without repeating characters: abc

// 50. Find the first non-repeating character in a string

// Simple Approach
function firstNonRepeatingSimple(str) {
  const charCount = {};

  // Count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = (charCount[str[i]] || 0) + 1;
  }

  // Find the first character with a count of 1
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      console.log(`First non-repeating character: ${str[i]}`);
      return;
    }
  }

  console.log("No non-repeating character found.");
}
firstNonRepeatingSimple("swiss"); // Output: First non-repeating character: w

// Medium Approach
const firstNonRepeatingMedium = (str) => {
  const charCount = {};
  for (let i = 0; i < str.length; i++)
    charCount[str[i]] = (charCount[str[i]] || 0) + 1;
  for (let i = 0; i < str.length; i++)
    if (charCount[str[i]] === 1)
      return console.log(`First non-repeating character: ${str[i]}`);
  console.log("No non-repeating character found.");
};
firstNonRepeatingMedium("swiss"); // Output: First non-repeating character: w

// Hard Approach
function firstNonRepeatingHard(str) {
  for (let i = 0; i < str.length; i++) {
    let foundRepeat = false;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        foundRepeat = true;
        break;
      }
    }
    if (!foundRepeat) {
      console.log(`First non-repeating character: ${str[i]}`);
      return;
    }
  }
  console.log("No non-repeating character found.");
}
firstNonRepeatingHard("swiss"); // Output: First non-repeating character: w
