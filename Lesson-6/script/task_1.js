//  Побудувати ялинку
if (confirm('Почати тестування?')) {
    document.write(`<h1>Побудувати ялинку</h1>`)

    for (let i = 0; i < 3; i++) {
        for (let j = 1; j < 6; j++) {
            for (let o = 0; o < j; o++) {
                document.write(`o`)


            }
            document.write(`<br>`)
        }


    }

    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}