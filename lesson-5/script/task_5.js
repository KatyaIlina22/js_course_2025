//  Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.
if (confirm('Почати тестування?')) {
    document.write(`<h1>Користувач поступово вводить прибуток магазину за кожен день протягом N тижнів. Знайти загальну величину прибутку та вивести величину прибутку протягом кожного окремого тижня.</h1>`)

    const numberOfWeeks = parseInt(prompt('Вкажіть кількість тижнів', '1'))
    let weeklyProfit
    let totalProfit = 0
    for (let weeks = 1; weeks <= numberOfWeeks; weeks++) {
        weeklyProfit = 0
        for (let days = 1; days <= 7; days++) {
            let dailyProfit = parseFloat(prompt(`Тиждень:${weeks} день: ${days} величина прибутку:`, '1'))
            weeklyProfit += dailyProfit
        }
        totalProfit += weeklyProfit
        document.write(`Прибуток за тиждень № ${weeks}: ${weeklyProfit.toFixed(2)} <br>`)
    }
    document.write(`Загальна величина прибутку: ${totalProfit.toFixed(2)}`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}
