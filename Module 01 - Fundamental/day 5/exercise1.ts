function numberStats(arr: number[]): { min: number; max: number; avg: number } {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  return {
    min: min,
    max: max,
    avg: sum / arr.length,
  };
}

console.log("\nNomor 1");
console.log("=====================================");
console.log(numberStats([12, 5, 23, 18, 4, 45, 32]));
console.log("=====================================");
console.log("\n");

function concatenateWords(arr2: string[]): string {
  if (arr2.length === 0) return "";
  if (arr2.length === 1) return arr2[0];

  const kata1 = arr2.slice(0, -1).join(",");
  const ahirKata = arr2[arr2.length - 1];

  return `${kata1}, and ${ahirKata}`;
}

console.log("Nomor 2");
console.log("=====================================");
console.log(concatenateWords(["apple", "banana", "cherry", "date"]));
console.log("=====================================");
console.log("\n");

function secMinNumber(arr3: number[]): number | null {
  if (arr3.length < 2) return null; // Return null if there are fewer than 2 elements

  let terkecil = Infinity;
  let keduaTerkecil = Infinity;

  for (let num of arr3) {
    if (num < terkecil) {
      keduaTerkecil = terkecil;
      terkecil = num;
    } else if (num < keduaTerkecil && num !== terkecil) {
      keduaTerkecil = num;
    }
  }

  return keduaTerkecil === Infinity ? null : keduaTerkecil;
}

console.log("Nomor 3");
console.log("=====================================");
console.log(secMinNumber([5, 3, 1, 7, 2, 6]));
console.log("=====================================");
console.log("\n");

function ArrCalculate(arr4: number[], arr5: number[]): number[] {
  return arr4.map((num, index) => num + arr5[index]);
}

console.log("Nomor 4");
console.log("=====================================");
console.log(ArrCalculate([1, 2, 3], [4, 5, 6]));
console.log("=====================================");
console.log("\n");

function addNum(arr6: number[], addnum: number): number[] {
  if (!arr6.includes(addnum)) {
    arr6.push(addnum);
  }
  return arr6;
}

console.log("Nomor 5");
console.log("=====================================");
console.log(addNum([1, 2, 3, 4], 4));
console.log(addNum([1, 2, 3, 4], 7));
console.log("=====================================");
console.log("\n");
