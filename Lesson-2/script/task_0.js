//Задача 0. Обчислити значення виразів


const a = parseFloat(prompt("Введіть значення а:", "2"))
const b = parseFloat(prompt("Введіть значення b:", "3"))
const c = parseFloat(prompt("Введіть значення c:", "4"))
const S1 = a + 12 + b
const S2 = Math.sqrt((a + b) / (2 * a))
const S3 = Math.cbrt((a + b) * c)
const S4 = Math.sin(a / -b)
document.write(`
   <h1>Задача 0. Обчислити значення виразів</h1>
  Початкові значення: а=${a} b=${b} c=${c}
  <br></br>
   S1 = ${S1}
   <br></br>
   S2 = ${S2}
   <br></br>
   S3 = ${S3}
    <br></br>
   S4 = ${S4}
   <br> </br>
    <a href="./index.html">назад</a> `)
