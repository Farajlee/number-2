const prompt = require("prompt-sync")();

//1. Find even numbers from 1 to the number entered by input
//1-dən input ilə daxil edilən ədədə qədər cüt ədədləri tapın
// let number = +prompt("Enter the number");
// for (let i = 1; i < number; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//2.Find whether the sum of the even numbers between 1 and 100 is a perfect number or not
//1-100 arasındakı cüt ədədlərin toplamının mükəmməl ədəd olub-olmadığını tapın

//1st way
// let min = 1;
// let max = 100;
// let sum = 0;
// let total = 0;
// for (let i = min; i < max; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// for (let j = 2; j <= sum; j++) {
//   if (sum % j === 0) {
//     total += j;
//   }
// }
// console.log(sum === total ? "Perfect number" : "Not a perfect number");

//2nd way
// function PerfectNumber() {
//   let sum = 0;
//   for (let i = 1; i < 100; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   let total = 1;
//   for (let j = 2; j <= sum; j++) {
//     if (sum % j === 0) {
//       total += j;
//     }
//   }
//   console.log(sum === total ? "Perfect number" : "Not a perfect number");
// }
// PerfectNumber();

//3. Find divisors/count of divisors/sum of divisors/total of divisors of input number
//İnput ilə daxil olunan ədədin bölənlərini/bölənlərinin sayını/bölənlərinin cəmini/bölənlərinin hasilini tapın
// let number = +prompt("Enter the number");
// let count = 0;
// let sum = 0;
// let total = 1;
// for (let i = 1; i < number; i++) {
//   if (number % i === 0) {
//     count++;
//     sum += i;
//     total *= i;
//     console.log(
//       "Divisor of the number:",
//       i,
//       "Sum of the divisors",
//       sum,
//       "Count of the divisors",
//       count,
//       "Total of the divisors",
//       total,
//     );
//   }
// }
// console.log("Final Sum of Divisors:", sum);
// console.log("Final Count of Divisors:", count);
// console.log("Final Total of Divisors:", total);

//4.Find how many digits the input number has
// //İnput ilə daxil olunan ədədin neçə rəqəmli olduğunu tapın
// let number = +prompt("Enter the number");
// let count = 0;
// while (number > 0) {
//   number = Math.floor(number / 10);
//   count++;
// }
// console.log(count);

//5.Find the sum of the digits of the input number
//İnput ilə daxil olunan ədədin rəqəmlərinin cəmini tapın
// let number = +prompt("Enter the number");
// let sum = 0;
// while (number > 0) {
//   let digit = number % 10;
//   sum += digit;
//   number = Math.floor(number / 10);
// }
// console.log(sum);

//6.Show numbers between 10 and 200 divided by 3 times 2 plus 5
//10 ilə 200 arasında ədədlərin 3 qatının 2 ədəd artığının 5-ə bölünənlərini göstərin
// for (let i = 10; i < 200; i++) {
//   let total = i * 3 + 2;
//   if (total % 5 === 0) {
//     console.log(total);
//   }
// }

//7.Find the sum of the even numbers between 1-100
//1-100 arasındakı cüt ədədlərin toplamını tapın
// let sum = 0;
// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

//8. How many zeros are there in the number you entered?
//Daxil etdiyiniz ədədddə neçə 0 var
// let count = 0;
// let number = +prompt("Enter the number");
// while (number > 0) {
//   let digit = number % 10;
//   if (digit === 0) {
//     count++;
//   }
//   number = number / 10;
// }
// console.log(count);

//9. Find the sum of negative numbers and the result of even numbers of 5 input numbers
// İnput ilə daxil edilən 5 ədəddən mənfi olanların toplamını, cüt olanların hasilini tapın
// let count = 5;
// let sum = 0;
// let total = 1;
// for (let i = 1; i <= count; i++) {
//   let number = +prompt("Enter the number");
//   if (number < 0) {
//     sum += number;
//   }
//   if (number % 2 === 0) {
//     total *= number;
//   }
// }
// console.log("Result of the numbers", total, "Sum of the numbers", sum);

//10. Enter 5 numbers with input, find the number equal to 7 and display it on the screen
//İnput ilə 5 ədəd daxil edin, 7-yə bərabər olanların sayını tapıb ekranda göstərin
// let count = 5;
// let total = 0;
// for (let i = 1; i <= count; i++) {
//   let number = +prompt("Enter the number");
//   if (number === 7) {
//     total++;
//   }
// }
// console.log(total);
