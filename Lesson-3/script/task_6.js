// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
const dayOfTheWeekNumber = parseInt(prompt("Вкажіть номер дня тижня"))
document.write(`
    <h1>Завдання 6  З клавіатури вводиться номер дня тижня. Вивести на екран назву дня. </h1>`)
switch (dayOfTheWeekNumber) {
    case 1:
        document.write(`Понеділок`)
        break;
    case 2:
        document.write(`Вівторок`)
        break;
    case 3:
        document.write(`Середа`)
        break;
    case 4:
        document.write(`Четвер`)
        break;
    case 5:
        document.write(`П'ятниця`)
        break;
    case 6:
        document.write(`Субота`)
        break;
    case 7:
        document.write(`Неділя`)
        break;
    default:
        document.write(`Некоректний номер`)

}
document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
