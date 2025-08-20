// Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
if (confirm('Почати тестування?')) {
    document.write(`<h1>6. Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2</h1>`)

    let elements = [3, 1, 5, 2, 6, 4]
    document.write(`Початковий масив: ${elements} <br>`)

    elements.forEach((element, index, baseArr) => {
        if (element > baseArr[0]) {
            baseArr[index] *= 2
        }

    });
    document.write(`Змінений масив: ${elements}`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}