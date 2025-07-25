// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
const price = parseFloat(prompt("Вартість одиниці товару", "35"))
const quantityOfGoods = parseFloat(prompt("Кількість товару", "5"))
const percent = 0.05
const totalCost = price * quantityOfGoods
const VAT = totalCost * percent

document.write(`
    <h1>Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).</h1>
    Задана вартість товару: ${price} та кількість:${quantityOfGoods}
     <br> </br>
    Загальна вартість товару: ${totalCost}
    <br> </br>
    ПДВ: ${VAT}
     <br></br>
    <a href="./index.html">назад</a>`)
