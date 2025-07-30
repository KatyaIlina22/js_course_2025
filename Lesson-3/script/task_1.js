// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
const nameOfFirstChild = prompt("Ім'я першої дитини")
const nameOfSecondChild = prompt("Ім'я другої дитини")
const numberOfCandiesForFirstChild = parseInt(prompt("Кількість цукерок у першої дитини"))
const numberOfCandiesForSecondChild = parseInt(prompt("Кількість цукерок у другої дитини"))
document.write(`

    <h1>Завдання 1 З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.</h1>`)

if (numberOfCandiesForFirstChild > numberOfCandiesForSecondChild) {
    document.write(
        `У ${nameOfFirstChild} більше цукерок`
    )
}
else if (numberOfCandiesForFirstChild == numberOfCandiesForSecondChild) {
    document.write(
        `У дітей порівну цукерок`
    )
}
else {
    document.write(
        `У ${nameOfSecondChild} більше цукерок`
    )
}
document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
