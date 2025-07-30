// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
const numberOfMonth = parseInt(prompt("Введіть номер місяця"))
document.write(`
    <h1>Завдання 7 З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься </h1>`)
switch (numberOfMonth) {
    case 1:
    case 12:
    case 2:
        document.write(`Пора року: зима`)
        break;
    case 3:
    case 4:
    case 5:
        document.write(`Пора року: весна`)
        break;
    case 6:
    case 7:
    case 8:
        document.write(`Пора року: літо`)
        break;
    case 9:
    case 10:
    case 11:
        document.write(`Пора року: осінь`)
        break;
    default:
        document.write(` Некоректний номер місяця`)
}
document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)