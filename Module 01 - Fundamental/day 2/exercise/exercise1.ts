function checkOddorEven(number:number):string {
    if (number % 2 == 0) {
        return `${number} -> Bilangan Genap`
    } else {
        return `${number} -> Bilangan Ganjil`
    }
}

console.log(" ");
console.log("CEK BILANGAN GANJIL ATAU GENAP");
console.log("-------------------------------");
console.log(checkOddorEven(25));
console.log(checkOddorEven(2));
console.log("-------------------------------");
console.log(" ");

function checkPrimeNumber(number:number): string{
    if (number % 2 == 0){
        return `${number} -> Bukan Bilangan Prima`
    } else {
        return `${number} -> Bilangan Prima`
    }
}

console.log("CEK BILANGAN PRIMA");
console.log("-------------------------------");
console.log(checkPrimeNumber(7));
console.log(checkPrimeNumber(6));
console.log("-------------------------------");
console.log(" ");
