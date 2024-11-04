function BodyMassIndex(weight: number, height: number) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) console.log(`${bmi} -> less weight`);
  else if (bmi >= 18.5 && bmi <= 24.9) console.log(`${bmi} -> ideal`);
  else if (bmi >= 25 && bmi <= 29.9) console.log(`${bmi} -> overweight`);
  else if (bmi >= 30 && bmi <= 39.9) console.log(`${bmi} -> very overweight`);
  else console.log(`${bmi} -> obesity`);
}

console.log(BodyMassIndex(73, 1.7));
