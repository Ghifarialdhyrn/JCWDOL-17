class Student {
  name: string;
  email: string;
  age: number;
  score: number;
  constructor(name: string, email: string, age: number, score: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

class LHA {
  highest: number;
  lowest: number;
  average: number = 0;
  constructor(numbers: number[]) {
    this.highest = Math.max(...numbers);
    this.lowest = Math.min(...numbers);

    for (let i = 0; i < numbers.length; i++) {
      this.average += numbers[i];
    }
    this.average = this.average / numbers.length;
  }

  //   get result() {
  //     return {
  //       highest: this.highest,
  //       lowest: this.lowest,
  //       average: this.average,
  //     };
  //   }
}

const test = new LHA([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

const calculateArrayStudent = (students: Student[]) => {
  return {
    score: new LHA(students.map((student) => student.score)),
    age: new LHA(students.map((student) => student.age)),
  };
};

const students: Student[] = [
  new Student("Alex", "alex@mail.com", 20, 88),
  new Student("Birkin", "birkin@mail.com", 21, 90),
  new Student("Charlie", "charlie@mail.com", 22, 60),
];

console.log(calculateArrayStudent(students));
