// З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати.
const userCategory = prompt("Вкажіть вашу категорію водія")
const categoryA = "A"
const categoryB = "B"
const categoryC = "C"

const transportA = "мотоцикл"
const transportB = "легковий автомобіль"
const transportC = "вантажний автомобіль"
document.write(`
    <h1>Завдання 5 З клавіатури вводиться назва категорії водія (А-мотоцикл, В-легковий автомобіль, С-вантажний автомобіль). Вивести на екран назву транспортного засобу, яким він може керувати. </h1>`)
if (userCategory == categoryA) {
    document.write(`назва транспортного засобу, яким ви може керувати: ${transportA}`)
}
else if (userCategory == categoryB) {
    document.write(`назва транспортного засобу, яким ви може керувати: ${transportB}`)
}
else if (userCategory == categoryC) {
    document.write(`назва транспортного засобу, яким ви може керувати: ${transportC}`)
}
else {
    document.write(`
        Такої категорії не існує`)
}
document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
