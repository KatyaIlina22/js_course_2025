// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
const number1 = parseFloat(prompt("Введіть дійсне число", "2.5"))
const number2 = parseFloat(prompt("Введіть дійсне число", "4.7"))
const sum = number1 + number2
const product = number1 * number2
const quotient = number1 / number2
document.write(`
  
  <h1>Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці</h1>
  <pre> 
  Задані числа: ${number1} ${number2}
  Операція      Результат
     +            ${sum}
     *            ${product}
     /            ${quotient}
     <a href="./index.html">назад</a>
  </pre> `)
