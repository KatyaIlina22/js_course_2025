// Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)
if (confirm('Почати тестування?')) {
    const number = 10
    let pricesHistory = getPricesArray(number)
    document.write(`Історія цін: ${pricesHistory}<br>`)
    //   1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.
    const pricesGreater1000 = pricesHistory.filter(prices => prices > 1000)
    document.write(`1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.: ${pricesGreater1000}<br>`)
    // 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

    const priceNumbersGreater1000 = []
    pricesHistory.forEach((price, index) => {
        if (price > 1000) priceNumbersGreater1000.push(index)
    });
    document.write(`2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
: ${priceNumbersGreater1000}<br>`)

    //   3)Сформувати список з тих цін, які більші за попереднє значення

    const pricesGreaterThanPrevious = pricesHistory.filter((price, index, baseArr) => index > 0 && price > baseArr[index - 1])
    document.write(` 3)Сформувати список з тих цін, які більші за попереднє значення: ${pricesGreaterThanPrevious}<br>`)
    //   4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
    const max = pricesHistory.reduce((prevMax, price) => price > prevMax ? price : prevMax)
    const pricesAsAPercentageOfTheMaximum = pricesHistory.map(price => Math.floor(price * 100 / max))
    document.write(`4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального: ${pricesAsAPercentageOfTheMaximum}<br>`)

    //   5)Підрахувати кількість змін цін
    const numberOfPriceChanges = pricesHistory.reduce((prevCount, price, index, baseArr) => index > 0 && price !== baseArr[index - 1] ? prevCount += 1 : prevCount, 0)
    document.write(` 5)Підрахувати кількість змін цін: ${numberOfPriceChanges}<br>`)


    //  6)Визначити, чи є ціна, що менше 1000
    const result1 = pricesHistory.some(price => price < 1000)
    document.write(`6)Визначити, чи є ціна, що менше 1000: `)

    if (result1) document.write(`є ціна, що менше 1000<br>`)
    else document.write(`немає цін, що менше 1000<br>`)


    //   7)Визначати, чи усі ціни більше за 1000
    const result2 = pricesHistory.every(price => price > 1000)
    document.write(`7)Визначати, чи усі ціни більше за 1000: `)

    if (result2) document.write(`усі ціни більше за 1000<br>`)
    else document.write(`не усі ціни більше за 1000<br>`)


    //   8)Підрахувати кількість цін, що більше за 1000
    const numberOfPricesreater1000 = pricesHistory.reduce((prevCount, price) => price > 1000 ? prevCount += 1 : prevCount, 0)
    document.write(`8)Підрахувати кількість цін, що більше за 1000: ${numberOfPricesreater1000}<br>`)

    //   9)Підрахувати суму цін, що більше за 1000
    const sumPriceGreater1000 = pricesHistory.reduce((prevSum, price) => price > 1000 ? prevSum += price : prevSum, 0)
    document.write(`Підрахувати суму цін, що більше за 1000: ${sumPriceGreater1000}<br>`)


    // 10)Знайти першу ціну, що більше за 1000
    const priceGreater1000 = pricesHistory.find(price => price > 1000)
    document.write(`10)Знайти першу ціну, що більше за 1000: ${priceGreater1000}<br>`)

    //  11)Знайти індекс першої ціни, що більше за 1000
    const indexOfPricesGreater1000 = pricesHistory.findIndex(price => price > 1000)
    document.write(`11)Знайти індекс першої ціни, що більше за 1000: ${indexOfPricesGreater1000}<br>`)


    // 12)Знайти останню ціну, що більше за 1000

    const lastPriceGreater1000 = pricesHistory.findLast(price => price > 1000)
    document.write(`12)Знайти останню ціну, що більше за 1000: ${lastPriceGreater1000}<br>`)


    // 13)Знайти індекс останньої ціни, що більше за 1000
    const indexOflastPricesGreater1000 = pricesHistory.findLastIndex(price => price > 1000)
    document.write(`13)Знайти індекс останньої ціни, що більше за 1000: ${indexOflastPricesGreater1000}<br>`)







    function getPricesArray(number) {
        let prices = []
        for (let index = 0; index < number; index++) {
            prices.push(1 + Math.floor(Math.random() * 10000))

        }
        return prices
    }
}
document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)