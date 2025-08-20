// 7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
if (confirm('Почати тестування?')) {
    document.write(`<h1>7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.</h1>`)

    let prices = [450, 230, 1020, 1000, 3, 3000, 1500]
    document.write(`Початкові ціни: ${prices}<br>`)

    prices.forEach((price, index, baseArr) => {
        if (price > 1000) baseArr[index] = price - (price * 0.3)
    });
    document.write(`Змінені ціни: ${prices}`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}