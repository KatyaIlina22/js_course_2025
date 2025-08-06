//  Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем. Приклад:
if (confirm('Почати тестування?')) {

    const numberOfNumbers = parseInt(prompt('Введіть кількість випадкових чисел', '1'))
    document.write(`<h1>Вивести з використанням циклів маркований список з випадковими числами (1-100). Кількість випадкових чисел вводиться користувачем.</h1>`)

    document.write(`<ul>`)

    for (let i = 0; i < numberOfNumbers; i++) {
        let randNumber = 1 + Math.floor(Math.random() * 100)
        document.write(`<li>${randNumber}</li>`)


    }
    document.write(`</ul>`)

    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}
