// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
if (confirm('Почати тестування?')) {
    let studentsName = ["Іван", "Олег", "Оля", "Іван"]
    document.write(`Імена учнів: ${studentsName} <br>`)

    function getNumberOfNameIvan(array) {
        let numberOfNameIvan = 0
        for (let index = 0; index < array.length; index++) {
            if (array[index] === "Іван") {
                numberOfNameIvan++
            }

        }
        return numberOfNameIvan
    }
    document.write(`Ім'я Іван зустрічається: ${getNumberOfNameIvan(studentsName)} разів`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}