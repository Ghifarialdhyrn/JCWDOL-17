// Exercise 1
// Create a function to check if two objects are equal

function checkEquals(
  obj1: { [key: string]: any },
  obj2: { [key: string]: any }
): boolean {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let key of obj1Keys) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

const obj1 = { a: 1 };
const obj2 = { a: "hello" };
const obj3 = { a: 1 };

console.log(checkEquals(obj1, obj2));

// Exercise 2
// Create a function to get the intersection of two objects

function getIntersection(
  obj1: { [key: string]: any },
  obj2: { [key: string]: any }
) {
  const intersection: { [key: string]: any } = {};
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  for (let key of obj1Keys) {
    if (obj2Keys.includes(key)) {
      intersection[key] = obj1[key];
    }
  }

  return intersection;
}

const obj4 = { a: 1, b: 2 };
const obj5 = { b: 2, c: 3 };

console.log(getIntersection(obj4, obj5));

// Exercise 3
// Create a function to merge two array of student data and remove duplicate data

class Murid {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

const dataMurid: Murid[] = [
  new Murid("Alex", "alex@purwadhika"),
  new Murid("Birkin", "birkin@purwadhika"),
];

const dataMurid2: Murid[] = [
  new Murid("Alex", "alex@purwadhika"),
  new Murid("Charlie", "charlie@purwadhika"),
];

function mergeData(data1: Murid[], data2: Murid[]) {
  const combinedData = [...data1, ...data2];
  const uniqueData = new Map<string, Murid>();
  for (let data of combinedData) {
    uniqueData.set(data.email, data);
  }

  return Array.from(uniqueData.values());
}

console.log(mergeData(dataMurid, dataMurid2));

// Exercise 4
// Create a function that can accept input as an array of objects and switch all values into property and property into value

interface Data {
  name: string;
  age: number;
}

function switchData(
  arr: { [key: string]: string }[]
): { [key: string]: string }[] {
  return arr.map((obj) => {
    const swappedObj: { [key: string]: string } = {};

    for (let key in obj) {
      swappedObj[obj[key]] = key;
    }

    return swappedObj;
  });
}

const objects = [
  { name: "Alice", email: "alice@purwadhika" },
  { name: "Bob", email: "bob@purwadhika" },
];

console.log(switchData(objects));

// Exercise 5
//  Create a function to find a factorial number using recursion

function Factorial(n: number): number {
  if (n === 0) {
    return 1;
  } else {
    return n * Factorial(n - 1);
  }
}

console.log(Factorial(5));
