// Вивести на екран N абзаців (N вводиться користувачем) за зразком:
if (confirm('Почати тестування?')) {
    document.write(`<h1>Вивести на екран N абзаців (N вводиться користувачем) за зразком</h1>`)

    const numberOfParagraphs = parseInt(prompt('Введіть кількість абзаців', '1'))
    for (let i = 1; i <= numberOfParagraphs; i++) {
        document.write(`<h1>Заголовок ${i}</h1>`)
        for (let j = 1; j <= i; j++) {
            document.write(`<p>Розділ ${i}, параграф ${j}</p>`)


        }
        document.write(`<hr>`)

    }

    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}
