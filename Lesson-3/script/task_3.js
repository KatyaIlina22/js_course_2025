// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
const randNumber = Math.floor(Math.random() * 5) + 1
let userNumber = parseInt(prompt("Спробуйте вгадати число від 1 до 5:"))
document.write(`
    <h1>Завдання 3 Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби. </h1>`)
if (userNumber == randNumber) {
    document.write(`
    Вітаю! Ви вгадали число з першої спроби `)
}
else {
    userNumber = parseInt(prompt("Ви не вгадал, спробуйте ще раз:"))
    if (userNumber == randNumber) {
        document.write(`
    Вітаю! Ви вгадали число з другої спроби `)
    }
    else {
        document.write(`
        На жаль, ви не вгадали це було число ${randNumber}`)
    }
}

document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)