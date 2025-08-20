// 10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
if (confirm('Почати тестування?')) {
    document.write(`<h1>10. Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.</h1>`)

    let prices = [1000, 25, 457, 345, 2500, 5]
    document.write(`Початкові ціни: ${prices}<br>`)

    const procent = 0.2
    let tax = prices.map(price => price * procent)
    document.write(`Податок: ${tax}`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}