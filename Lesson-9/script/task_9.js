// 9. Дано масив імен. Сформувати масив з перших літер цих імен.
if (confirm('Почати тестування?')) {
    document.write(`<h1>9. Дано масив імен. Сформувати масив з перших літер цих імен.</h1>`)

    let names = ["Яна", "Коля", "Саша", "Оля", "Рома", "Таня", "Ярослав"]
    document.write(`Імена: ${names}<br>`)

    let firstNamesLetters = names.map(name => name[0])
    document.write(`Перші літери імен: ${firstNamesLetters}`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}