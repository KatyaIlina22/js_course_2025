// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
const costOfTheFirstProduct = parseFloat(prompt("Вартість одиниці першого товару", "15"))
const quantityOfTheFirstProduct = parseFloat(prompt("Кількість товару", "3"))
const costOfTheSecondProduct = parseFloat(prompt("Вартість одиниці другого товару", "100"))
const quantityOfTheSecondProduct = parseFloat(prompt("Кількість товару", "3"))
const costOfTheThirdProduct = parseFloat(prompt("Вартість одиниці третього товару", "24"))
const quantityOfTheThirdProduct = parseFloat(prompt("Кількість товару", "10"))
const totalCostOfTheFirstProduct = costOfTheFirstProduct * quantityOfTheFirstProduct
const totalCostOfTheSecondProduct = costOfTheSecondProduct * quantityOfTheSecondProduct
const totalCostOfTheThirdProduct = costOfTheThirdProduct * quantityOfTheThirdProduct
const totalCost = totalCostOfTheFirstProduct + totalCostOfTheSecondProduct + totalCostOfTheThirdProduct

document.write(`

  
 <h1> Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.</h1>
  <pre>
  <h1>Фіскальний чек</h1>
  <div style="border-top: dashed 2px black; border-bottom: dashed 2px black; margin-right:80%">
  Перший товар  ${costOfTheFirstProduct} х ${quantityOfTheFirstProduct}    ${totalCostOfTheFirstProduct}
  Другий товар  ${costOfTheSecondProduct} х ${quantityOfTheSecondProduct}    ${totalCostOfTheSecondProduct}
  Третій товар  ${costOfTheThirdProduct} х ${quantityOfTheThirdProduct}    ${totalCostOfTheThirdProduct}
  </div>
  Сума                     ${totalCost}
  </pre>
    
     <br></br>
    <a href="./index.html">назад</a>
    `)