// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
if (confirm('Почати тестування?')) {
    document.write(`<h1> Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :</h1>`)

    const profits = [
        [1200, 100, 1100, 1700, 190, 1800, 50], // Магазин 1
        [900, 950, 1000, 135, 1200, 1300, 1250],   // Магазин 2
        [2000, 2100, 1900, 2200, 150, 2400, 200]  // Магазин 3
    ];
    profits.forEach(row => document.write(`${row} <br>`)
    )


    // 1) загальний прибуток кожного масиву за тиждень;
    const weeksProfits = profits.map((profit) => profit.reduce((prevSum, el) => prevSum + el))
    document.write(` 1) загальний прибуток кожного масиву за тиждень: ${weeksProfits}<br>`)
    // 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
    const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "Пʼятниця", "Субота", "Неділя"]



    for (let colIndex = 0; colIndex < 7; colIndex++) {
        let sum = 0
        for (let rowIndex = 0; rowIndex < profits.length; rowIndex++) {
            sum += profits[rowIndex][colIndex]

        }
        document.write(`2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);<br>`)

        document.write(` ${days[colIndex]}: ${sum}<br>`)

    }
    // 3) загальний прибуток за робочі дні
    let totalProfitForWorkingDays = 0
    for (const week of profits) {
        for (let profitIndex = 0; profitIndex < 5; profitIndex++) {

            totalProfitForWorkingDays += week[profitIndex]
        }
    }
    document.write(`3) загальний прибуток за робочі дні: ${totalProfitForWorkingDays}<br>`)


    // 4) загальний прибуток за вихідні дні

    let totalProfitForWeekend = 0
    for (const week of profits) {
        for (let profitIndex = 5; profitIndex < week.length; profitIndex++) {
            totalProfitForWeekend += week[profitIndex]

        }

    }
    document.write(`4) загальний прибуток за вихідні дні: ${totalProfitForWeekend}<br>`)
    // 5) максимальний прибуток за середу
    let maxWednesdayProfit = -Infinity
    for (const week of profits) {
        if (week[2] > maxWednesdayProfit) maxWednesdayProfit = week[2]
    }
    document.write(`5) максимальний прибуток за середу: ${maxWednesdayProfit}<br>`)

    // 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
    const profitsOver200 = profits.flat().filter(profit => profit > 200)
    document.write(`6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200: ${profitsOver200}<br>`)
    // 7) відсортувати кожен тиждень за зростанням
    profits.forEach(profit => profit.sort((a, b) => a - b))
    document.write(`7) відсортувати кожен тиждень за зростанням <br>`)

    profits.forEach(row => document.write(`${row} <br>`))
    // 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
    profits.sort((a, b) => Math.max(...b) - Math.max(...a))
    document.write(` 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків <br>`)
    profits.forEach(row => document.write(`${row} <br>`))
    // 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
    profits.sort((a, b) => {
        let sumA = a.reduce((prevSum, el) => prevSum + el)
        let sumB = b.reduce((prevSum, el) => prevSum + el)
        return sumB - sumA
    })
    document.write(`9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше). <br>`)
    profits.forEach(row => document.write(`${row} <br>`))
    document.write(`
    <br></br>
            <a href="./index.html">назад</a>`)
}
