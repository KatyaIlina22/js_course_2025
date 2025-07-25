// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
const randNumberOfMonth = Math.floor(Math.random() * 12) + 1
const randNumberOfDay = Math.floor(Math.random() * 7)
const sum = randNumberOfDay + randNumberOfMonth
document.write(`
  <h1>Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).</h1>
    Випадковий номер місяця: ${randNumberOfMonth}
    <br></br>
    Випадковий номер дня: ${randNumberOfDay} 
      <br></br>
    Сума: ${sum}
     <br></br>
    <a href="./index.html">назад</a>`)