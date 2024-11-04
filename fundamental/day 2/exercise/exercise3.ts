function fibonnaci(n:number):string{
    if (n <= 0) {
        return "Masukan bilangan positif"
    }

    let a = 0, b = 1;
    let nthFib = b;
    
    for (let i = 2; i <= n; i++) {
        nthFib = a + b;
        a = b;
        b = nthFib;
    }

    return `${n} -> ${nthFib}`
}

console.log(" ");
console.log("MENGHITUNG BILANGAN FIBONNACI");
console.log("-------------------------------");
console.log(fibonnaci(15));
console.log("-------------------------------");
console.log(" ");


