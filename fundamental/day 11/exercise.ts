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
