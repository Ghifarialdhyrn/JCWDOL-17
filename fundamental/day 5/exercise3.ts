function primitiveData(arr: any[]): any[] {
  return arr.filter(
    (item) =>
      item === null ||
      typeof item === "number" ||
      typeof item === "string" ||
      typeof item === "boolean" ||
      typeof item === "undefined" ||
      typeof item === "symbol" ||
      typeof item === "bigint"
  );
}

console.log("\nNomor 1");
console.log("=====================================");
console.log(primitiveData([1, [], undefined, {}, "string", {}, []]));
console.log("=====================================");
console.log("\n");

function penjumlahanGanda(arr2: number[]): number {
  const hitung: { [kunci: number]: number } = {};
  let sum = 0;

  for (let num of arr2) {
    hitung[num] = (hitung[num] || 0) + 1;
  }

  for (let num in hitung) {
    if (hitung[num] > 1) {
      sum += Number(num) * hitung[num];
    }
  }

  return sum;
}

console.log("Nomor 2");
console.log("=====================================");
console.log(penjumlahanGanda([10, 20, 40, 10, 50, 30, 10, 60, 10]));
console.log("=====================================");
console.log("\n");

function suitJepang(pilihan: "batu" | "kertas" | "gunting"): string {
  const pilihanSuit = ["batu", "kertas", "gunting"] as const;
  const computer = pilihanSuit[Math.floor(Math.random() * pilihanSuit.length)];

  if (pilihan === computer) {
    return `${pilihan} ` + "><" + ` ${computer} ` + " = Seri!";
  } else if (pilihan === "batu" && computer === "gunting") {
    return `${pilihan} ` + "><" + ` ${computer} ` + " = Kamu menang!";
  } else if (pilihan === "kertas" && computer === "batu") {
    return `${pilihan} ` + "><" + ` ${computer} ` + " = Kamu menang!";
  } else if (pilihan === "gunting" && computer === "kertas") {
    return `${pilihan} ` + "><" + ` ${computer} ` + " = Kamu menang!";
  } else {
    return `${pilihan} ` + "><" + ` ${computer} ` + " = Kamu kalah!";
  }
}

console.log("Nomor 3");
console.log("=====================================");
console.log(suitJepang("batu"));
console.log("=====================================");
console.log("\n");
