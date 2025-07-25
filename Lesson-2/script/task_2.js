// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
const currentYear = 2025
const yearOfBirth = parseInt(prompt("Ваш рік народження", "2006"))
const years = currentYear - yearOfBirth
document.write(`
   <h1> Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.</h1>
    Ваш рік народження: ${yearOfBirth}
    <br></br>
    Вам ${years} років
     <br></br>
    <a href="./index.html">назад </a>`)
