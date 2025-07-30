// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
const priceOfTheProduct = parseFloat(prompt("Ціна товару"))
const amountOfMoney = parseFloat(prompt("Кількість грошей"))
const lotteryPrice = 4
document.write(`
    <h1>Завдання 2 З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
</h1>`)
if (priceOfTheProduct > amountOfMoney) {
        document.write(`
        Грошей не вистачає - відмова у покупці
        `)
}
else if (amountOfMoney - priceOfTheProduct >= lotteryPrice) {
        document.write(`
                Покупка підтвердженна, бажаєте купити лотерею за 4 грн?
        `)
}
else {
        document.write(`
                Покупка підтверджена
        `)
}
document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
