// Konversi Hari ke Tahun, Bulan, dan Hari
function convertDays(days:number): {years:number, months:number, days:number} {
    const years = Math.floor(days / 365);
    let remainingDays = days % 365;
    const months = Math.floor(remainingDays / 30);
    remainingDays = remainingDays % 30;

    return {
        years, months, days:remainingDays
    };
}

// Contoh yang digunakan
const day1 = 400;
const day2 = 366;

const resultDay1 = convertDays(day1);
const resultDay2 = convertDays(day2);
console.log(" ");
console.log("Konversi Hari ke Tahun, Bulan, dan Hari");
console.log("-------------------------");
console.log(`${day1} days -> ${resultDay1.years} years, ${resultDay1.months} months, ${resultDay1.days} days`);
console.log(`${day2} days -> ${resultDay2.years} years, ${resultDay2.months} months, ${resultDay2.days} days`);

console.log(" ");
console.log("-------------------------");
console.log(" ");


console.log("Menghitung perbedaan tanggal ke hari");
console.log("-------------------------");
// Menghitung perbedaan tanggal ke hari
function getDifferenceInDays(date1: string, date2: string): number {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    // Calculate the difference in milliseconds
    const differenceInMs = Math.abs(secondDate.getTime() - firstDate.getTime());

    // Convert milliseconds to days
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    return differenceInDays;
}

// Example usage:
const date1 = "2022-01-20";
const date2 = "2022-01-22";

const resultDifferenceDays = getDifferenceInDays(date1, date2);
console.log(`Perbedaan antara tanggal ${date1} dan ${date2} adalah ${resultDifferenceDays} days`);
console.log(" ");

