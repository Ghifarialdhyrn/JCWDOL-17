function fizzBuzz(n: number): string {
  let result = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) result += "FizzBuzz, ";
    else if (i % 3 == 0) result += "Fizz, ";
    else if (i % 5 == 0) result += "Buzz, ";
    else result += `${i}, `;
  }

  return result.slice(0, -2);
}

console.log(fizzBuzz(15));
