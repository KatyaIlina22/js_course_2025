// 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
if (confirm('Почати тестування?')) {
    document.write(`<h1>2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.</h1>`)

    const numberOfEl = parseInt(prompt('кількість елементів', '2'))
    const array = new Array(numberOfEl).fill(1, 0, Math.floor(numberOfEl / 2)).fill(7, Math.floor(numberOfEl / 2))
    document.write(`array: ${array}`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}