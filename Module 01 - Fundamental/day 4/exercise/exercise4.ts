function FilterNumber(arr: number[]): number[] {
  return arr.filter((number) => number % 2 == 0);
}

const hasil = FilterNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(hasil);
