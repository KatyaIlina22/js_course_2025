// Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
if (confirm('Почати тестування?')) {
    document.write(`<h1>Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.</h1>`)

    let numberOfEvenNumbers = 0
    let numberOfOddNumbers = 0
    document.write(`Рандомні числа:  `)

    for (let number = 0; number < 100; number++) {
        let randNumber = 1 + Math.floor(Math.random() * 1000)
        document.write(` ${randNumber}, `)

        if (randNumber % 2 === 0) {
            numberOfEvenNumbers += 1
        }
        else {
            numberOfOddNumbers += 1
        }

    }
    document.write(`<br> Парних: ${numberOfEvenNumbers}, Непарних: ${numberOfOddNumbers}<br>`);
    if (numberOfEvenNumbers > numberOfOddNumbers) {
        document.write(`Парних більше`)

    }
    else if (numberOfEvenNumbers === numberOfOddNumbers) {
        document.write(`Парних та непарних однакова кількість`)
    }
    else {
        document.write(`Непарних більше`)
    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)

}
