// 4.Дано масив елементів. Вивести на екран елементи, що більші за 100
if (confirm('Почати тестування?')) {
    document.write(`<h1> 4.Дано масив елементів. Вивести на екран елементи, що більші за 100</h1>`)

    let elements = getRandArray(15)
    document.write(`Початковий масив: ${elements}<br>`)
    document.write(`елементи більші 100:`)

    for (const element of elements) {
        if (element > 100) document.write(` ${element}, `)

    }



    function getRandArray(number) {
        let array = []
        for (let index = 0; index < number; index++) {

            array.push(1 + Math.floor(Math.random() * 200))
        }
        return array
    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}