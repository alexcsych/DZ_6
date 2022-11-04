//Таски на умови
//1) Запитати змінну у користувача. Якщо змінна дорівнює числу 10, виведіть 'Вірно', інакше виведіть 'Невірно'.
const userNumber = Number(prompt("Enter your number"));
if (userNumber === 10) {
  console.log("Вірно");
} else {
  console.log("Не вірно");
}
//2) Напишіть дві перевірки.
// Якщо змінна test дорівнює true, виведіть 'Вірно', інакше виведіть 'Невірно'.
// Якщо змінна test не дорівнює true, то виведіть 'Вірно', інакше виведіть 'Невірно'
const test = Number(prompt("Enter true/false(1 or 0)"));
if (test) {
  console.log("Вірно");
} else {
  console.log("Не вірно");
}
//2.2
const test1 = Number(prompt("Enter true/false(1 or 0)"));
if (!test1) {
  console.log("Вірно");
} else {
  console.log("Не вірно");
}
//3) Обчислити суму покупки з урахуванням знижки. Знижка 3% надається, якщо сума покупки більша за 500 грн.,
// а знижка 5% - якщо сума покупки більша за 800 грн. Суму покупки вводить користувач.
const userSumm = Number(prompt("Enter your summ"));
if (userSumm > 800) {
  console.log("Your summ", userSumm * 0.95);
} else if (userSumm > 500) {
  console.log("Your summ", userSumm * 0.97);
}
//Таски на цикли
//1) Виведення чисел від 25 до 0 (порядок зменшення)
let i = 25;
const limit = 0;
while (i >= limit) {
  console.log(i);
  i--;
}
//1.2
for (let i = 25; i >= limit; i--) {
  console.log(i);
}
//2) Виведення чисел від 10 до 50, які кратні 5
let i1 = 10;
const limit1 = 50;
while (i1 <= limit1) {
  console.log(i1);
  i1 += 5;
}
//2.2
for (let i = 10; i <= limit1; i += 5) {
  console.log(i);
}
//3) Знайти суму чисел в межах від 1 до 100.
let i2 = 1,
  sum = 0;
const limit2 = 100;
while (i2 <= limit2) {
  sum += i2;
  i2++;
}
console.log(sum);
//2.2
sum = 0;
for (let i = 1; i <= limit2; i++) {
  sum += i;
}
console.log(sum);
