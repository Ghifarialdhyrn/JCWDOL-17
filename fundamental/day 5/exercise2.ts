function mixSum(mixedArr: any[]): number {
  return mixedArr.reduce((sum, item) => {
    if (typeof item === "number") {
      return sum + item;
    }
    return sum;
  }, 0);
}

console.log("\nNomor 1");
console.log("=====================================");
console.log(mixSum(["3", 1, "string", null, false, undefined, 2]));
console.log("=====================================");
console.log("\n");

function batasInput(
  batasMax: number,
  arr: number[],
  ...inputBaru: number[]
): number[] {
  const ruangKosong = batasMax - arr.length;
  const arrBaru = inputBaru.slice(0, ruangKosong);
  return arr.concat(arrBaru);
}

console.log("Nomor 2");
console.log("=====================================");
console.log(batasInput(5, [], 5, 10, 24, 3, 6, 7, 8));
console.log("=====================================");
console.log("\n");

function combineNumber(arr2: number[], arr3: number[]): number[] {
  return arr2.concat(arr3);
}

console.log("Nomor 3");
console.log("=====================================");
console.log(combineNumber([1, 2, 3], [4, 5, 6]));
console.log("=====================================");
console.log("\n");

function hitungGanda(arr4: number[]): number[] {
  const ganda: number[] = [];
  const seen = new Set<number>();

  for (let num of arr4) {
    if (seen.has(num) && !ganda.includes(num)) {
      ganda.push(num);
    } else {
      seen.add(num);
    }
  }
  return ganda;
}

console.log("Nomor 4");
console.log("=====================================");
console.log(hitungGanda([1, 2, 2, 2, 3, 3, 4, 5, 5]));
console.log("=====================================");
console.log("\n");

function cariBeda(arr5: number[], arr6: number[]): number[] {
  const beda = arr5
    .filter((num) => !arr6.includes(num))
    .concat(arr6.filter((num) => !arr5.includes(num)));

  return beda;
}

console.log("Nomor 5");
console.log("=====================================");
console.log(cariBeda([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
console.log("=====================================");
console.log("\n");
