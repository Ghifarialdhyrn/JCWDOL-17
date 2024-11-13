// Exercise 1
// Create a function to convert Excel sheet column title to its corresponding column number

function convertToNumber(columnTitle: string): number {
  let columnNumber = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    const charCode = columnTitle.charCodeAt(i) - 64;
    columnNumber = columnNumber * 26 + charCode;
  }
  return columnNumber;
}

console.log("\nExercise 1");
console.log("=====================================");
console.log("Output (AB) -> " + convertToNumber("AB"));
console.log("=====================================");

// Exercise 2
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

const singleNumber = (arr: number[]) => {
  const set = new Set(arr); // [2,2,1] => [2,1]

  set.forEach((value) => {
    if (arr.filter((n) => n == value).length == 1) return console.log(value);
  });
};

console.log("\nExercise 2");
console.log("=====================================");
singleNumber([2, 2, 1]); //1
singleNumber([4, 1, 2, 1, 2]); //4
singleNumber([1]); //1
console.log("=====================================");

// Exercise 3
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagramis a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return s.split("").sort().join("") === t.split("").sort().join("");
}

console.log("\nExercise 3");
console.log("=====================================");
console.log("Output 1 -> " + isAnagram("anagram", "nagaram"));
console.log("Output 2 -> " + isAnagram("rat", "cat"));
console.log("=====================================");

// Exercise 4
// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2  steps.
// In how many distinct ways can you climb to the top?

function climbStairs(n: number): number {
  if (n <= 2) return n;

  let first = 1;
  let second = 2;
  let ways = 0;

  for (let i = 3; i <= n; i++) {
    ways = first + second;
    first = second;
    second = ways;
  }

  return ways;
}

console.log("\nExercise 4");
console.log("=====================================");
console.log("Output 1 -> " + climbStairs(2));
console.log("Output 2 -> " + climbStairs(3));
console.log("=====================================");
console.log("\n");
