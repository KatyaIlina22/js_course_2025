// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
if (confirm("Почати тестування?")) {
    const numberOfColumns = parseInt(prompt('Вкажіть кількість стовпців', '2'))
    const numberOfRows = parseInt(prompt('Вкажіть кількість рядків', '2'))
    const message = prompt('Вкажіть повідомлення, якими буде заповнена таблиця', 'hello')
    document.write(`<h1>Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).</h1>`)

    getTable(numberOfRows, numberOfColumns, message)

    function getTable(rows, columns, message) {
        document.write(`<table border = "1">`)
        for (let row = 0; row < rows; row++) {
            document.write(`<tr>`)
            for (let col = 0; col < columns; col++) {
                document.write(`<td>${message}</td>`)


            }
            document.write(`</tr>`)

        }
        document.write(`</table>`)

    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}