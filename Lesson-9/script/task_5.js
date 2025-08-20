// 5.Дано масив елементів. Знайти добуток додатних елементів
if (confirm('Почати тестування?')) {
    document.write(`<h1>5.Дано масив елементів. Знайти добуток додатних елементів</h1>`)

    let elements = getRandArray(15)
    document.write(`Початковий масив: ${elements}<br>`)
    let product = 1
    for (const element of elements) {
        if (element > 0) product *= element

    }
    if (product > 1) document.write(`добуток додатних елементів: ${product}`)
    else document.write(`додатні елементи відсутні`)



    function getRandArray(number) {
        let array = []
        for (let index = 0; index < number; index++) {

            array.push(-10 + Math.floor(Math.random() * 21))
        }
        return array
    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}