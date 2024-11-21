// EXERCISE 1
let x = 5
let multiplication:number = 1
let hasil = ''

for (let i = 1; i <= 10; i++) {
    multiplication = x * i
    hasil += `${x} x ${i} = ${multiplication}\n`
}
console.log(hasil);


// EXERCISE 2
const kata = 'hello'
const reverse = kata.split('').reverse().join('')
if (kata === reverse) {
    console.log(`${kata} adalah palindrom\n`)
} else {
    console.log(`${kata} bukan palindrom\n`)
}

// EXERCISE 3
const jarak = 100000
const convert = jarak / 100000
console.log(`${jarak} m = ${convert} km\n`);

// EXERCISE 4
const uang:number = 20000
const rupiah = `Rp. ${uang}`
console.log(rupiah + '\n');

// EXERCISE 5
let kata2 = 'hello'
console.log(kata2.replace("ell", ""));

// EXERCISE 6
let kata3 = "hello world"
let hasilKapital = ''
let kapitalSelanjutnya = true

for (let i = 0; i < kata3.length; i++) {
    if (kata3[i] === ' '){
        hasilKapital += ' '
        kapitalSelanjutnya = true
    }else if (kapitalSelanjutnya) {
        hasilKapital += kata3[i].toUpperCase()
        kapitalSelanjutnya = false
    }else{
        hasilKapital += kata3[i];
    }
}

console.log(`${kata3} => ${hasilKapital}\n`);