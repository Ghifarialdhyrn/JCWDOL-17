function SumOfTheNumber(n:number):string {
    let sum:number = 0
    let operator = ''

    for (let i = 1; i <= n; i++) {
        sum += i;
        operator += i === n ? `${i}` : `${i} + `
    }

    return `${n} -> ${operator} = ${sum}`
}

console.log(" ");
console.log("MENGHITUNG BILANGAN PENJUMLAHAN");
console.log("-------------------------------");
console.log(SumOfTheNumber(5));
console.log(SumOfTheNumber(3));
console.log("-------------------------------");
console.log(" ");

function FactorialNumber(n:number):string {
    if (n < 0) {
        return `${n}! -> Bilangan negatif tidak bisa untuk faktorial`
    }
    
    let result:number = 1;
    let operator = '';

    for (let i = n; i > 0; i--) {
        result *= i;
        operator += i === 1 ?  `${i}` : `${i} x `
    }

    return `${n}! -> ${operator} = ${result}`;
}

console.log("MENGHITUNG BILANGAN FAKTORIAL");
console.log("-------------------------------");
console.log(FactorialNumber(4));
console.log(FactorialNumber(6));
console.log("-------------------------------");
console.log(" ");

