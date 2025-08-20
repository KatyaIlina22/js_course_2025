// 8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»
if (confirm('Почати тестування?')) {
    document.write(`<h1>8. Дано масив номерів авто. Сформувати новий масив тих, які починаються на «А»</h1>`)

    let carNumbers = ["AA2345AA", "BA2345AA", "CD2345AA", "BA2345AB", "AB2345AA", "AC2345AA"]
    document.write(`Масив усіх номерів: ${carNumbers}<br>`)

    let numbersStartWithLetterA = []
    carNumbers.forEach((number) => {
        if (number[0] === "A") numbersStartWithLetterA.push(number)

    });
    document.write(`Новий масив тих, які починаються на «А»: ${numbersStartWithLetterA}`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}