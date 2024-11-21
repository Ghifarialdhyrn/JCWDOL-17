// EXERCISE 1
let kata = "The QuiCk BrOwN Fox"
let hasilTukar = ''

for (let i = 0; i < kata.length; i++) {
    const karakter = kata[i]
    
    if (karakter >= 'A' && karakter <= 'Z') {
        hasilTukar += karakter.toLowerCase()
    } else if (karakter >= 'a' && karakter <= 'z') {
        hasilTukar += karakter.toUpperCase()
    } else {
        hasilTukar += karakter
    }   
}

console.log(kata + ' = ' + hasilTukar + '\n');

// EXERCISE 2
let num1 = 42
let num2 = 27

if (num1 > num2) {
    console.log(`${num1} > ${num2}\n`);
} else {
    console.log(`${num1} < ${num2}\n`);
}