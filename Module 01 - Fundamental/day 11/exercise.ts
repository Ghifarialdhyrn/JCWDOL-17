<<<<<<< HEAD:fundamental/day 11/exercise.ts
// // EXERCISE 1
// // Given an array nums of size n, return the majority element. The majority element is the element that
// // appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// //  ● Example 1:
// //      ○ Input: nums = [3,2,3]
// //      ○ Output: 3
// //  ● Example 2:
// //      ○ Input: nums = [2,2,1,1,1,2,2]
// //      ○ Output: 2

const MajorityElement = (nums: number[]) => {
  let newSet = new Set(nums);

  newSet.forEach((value) => {
    if (nums.filter((n) => n == value).length > nums.length / 2) {
      console.log(value);
    }
  });
};

MajorityElement([3, 2, 3]);
MajorityElement([2, 2, 1, 1, 1, 2, 2]);

// // EXERCISE 2
// // Create a function to convert roman numeral to integer.
// // ● Example 1:
// //  ○ Input: s = "III”
// //  ○ Output: 3
// //  ○ Explanation: III = 3.
// // ● Example 2:
// //  ○ Input: s = "LVIII"
// //  ○ Output: 58
// //  ○ Explanation: L = 50, V= 5, III = 3.
// // ● Example 3:
// //  ○ Input: s = "MCMXCIV"
// //  ○ Output: 1994
// //  ○ Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const romanToInt = (s: string) => {
  const roman: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let hasil = 0;

  for (let i = 0; i < s.length; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      hasil -= roman[s[i]];
    } else {
      hasil += roman[s[i]];
    }
  }
  return hasil;
};

console.log("III -> ", romanToInt("III"));
console.log("LVIII -> ", romanToInt("LVIII"));
console.log("MCMXCIV -> ", romanToInt("MCMXCIV"));

// // EXERCISE 3
// // Given an integer numRows, return the first numRows of
// // Pascal's triangle.
// //  ● In Pascal's triangle, each number is the sum of the two
// // numbers directly above it as shown →
// //  ● Example 1:
// //  ○ Input: numRows = 5
// //  ○ Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// //  ● Example 2:
// //  ○ Input: numRows = 1
// //  ○ Output: [[1]]

const PascalTriangle = (numRows: number): number[][] => {
  const triangle: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row: number[] = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }
  return triangle;
};

console.log("Output 1 -> ", PascalTriangle(5));
console.log("Output 2 -> ", PascalTriangle(1));

// EXERCISE 4
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// ● You want to maximize your profit by choosing a single day to buy one stock and choosing a different
// day in the future to sell that stock.
// ● Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
// return 0.
// ● Example 1:
//  ○ Input: prices = [7,1,5,3,6,4]
//  ○ Output: 5
//  ○ Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//  ○ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you
// sell.
// ● Example 2:
//  ○ Input: prices = [7,6,4,3,1]
//  ○ Output: 0
//  ○ Explanation: In this case, no transactions are done and the max profit = 0

const maxProfit = (price: number[]): number => {
  let min = price[0];
  let max = 0;

  for (let i = 1; i < price.length; i++) {
    if (price[i] < min) {
      min = price[i];
    } else if (price[i] - min > max) {
      max = price[i] - min;
    }
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
=======
/** @format */

// Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//[3,2,3]
//[2,3,3]
//2 == 3 false
// 3 == 3

const majority = (nums: number[]) =>
  (nums.sort()[0] == nums[Math.floor(nums.length - 1 / 2)] ||
    nums[Math.floor((nums.length - 1) / 2)] == nums[nums.length - 1]) &&
  nums[Math.floor((nums.length - 1) / 2)];

console.log(majority([3, 3, 2, 2, 1, 1, 1]));

// Create a function to convert roman numeral to integer.
// Example 1:
// Input: s = "III”
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// iv
// IV
//[I,V]
// { roman : 4, skip : true/false}
// iv vs vi
// 4 vs 6
// i = 1, v =5
// iv. i < v ? 5-1 = 4
// vi.  v> i ? 5+1 = 6

//iv
const roman = (input: string) =>
  input
    .toUpperCase()
    .split("") //[i,v]
    .reduce(
      (
        numeral: { roman: number; skip: boolean },
        char: string,
        index: number,
        self: string[]
      ) => {
        //  { roman: 0, skip: false } default value
        const obj = {
          I: 1,
          V: 5,
          X: 10,
          L: 50,
          C: 100,
          D: 500,
          M: 1000,
        } as { [k: string]: number };

        if (numeral.skip) {
          numeral.skip = false;
          return numeral;
        }
        //1000 + 900 + 90 + 4 = 1994
        //[v,i]
        //obj.i = 1
        // obj.v = 5
        // 5 < 1 ? false
        // numeral.roman = 5
        // {roman : 5, skip:false}
        // 1 < undefined? false
        // roman = 6

        if (obj[char] < obj[self[index + 1]]) {
          numeral.roman = numeral.roman + obj[self[index + 1]] - obj[char];
          numeral.skip = true;
          return numeral;
        }
        numeral.roman += obj[char];
        return numeral;
      },
      { roman: 0, skip: false }
    ).roman;
console.log(roman("MCMXCIV"));

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown →
// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:
// Input: numRows = 1
// Output: [[1]]

const pascal = (n: number) =>
  [...Array(n)].reduce(
    (output: number[][], v, i) =>
      !i
        ? [[1]]
        : [
            ...output,
            [
              ...[...output[i - 1]].map(
                (_, index2, self) => _ + (self[index2 - 1] || 0)
              ),
              1,
            ],
          ],
    []
  );

// [undefined,undefined,undefined,undefined].reduce
//output = [[1]]
//i =3
//index2 = 2
// [1,2,1].map => ...[1, 3,3 ]
// [[1],[1,1],[1, 2,1],[1, 3,3,1]]

// console.log(pascal(4));

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
const maxProfit = (input: number[]) =>
  input.reduce(
    (max, value, i, self) =>
      max < Math.max(...self.slice(i + 1, self.length)) - value
        ? Math.max(...self.slice(i + 1, self.length)) - value
        : max,
    0
  );
const prices = [7, 1, 5, 3, 6, 4];
//max = 5
//value = 3
// i = 3
// self = [7, 1, 5, 3, 6, 4]

//0 < -1
//0 < 5
//5 < 1
//5 < 3
//5

const arr = [1, 2, 3, 4, 5, 6, 7];
const arr2 = [10, 11, 12];
const merged = arr.concat(arr2);
console.log(arr.length);

console.log(
  merged.map((_, i) => {
    return merged.length;
  })
);

console.log(
  [1, 2, 3, 4, 5, 6, 7].reduce((sum, currentValue, i, self) => {
    if (currentValue % 2 == 0) return sum;
    return sum + currentValue + self.length;
  }, 0)
);
>>>>>>> master:Module 01 - Fundamental/day 11/exercise.ts
