// Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
if (confirm('Почати тестування?')) {
type Period = {
    day:number;
    month:number;
    year:number
}
document.write(`<h1>Задача 2. Розробити функцію, у яку передають об’єкт (день, місяць, рік). Визначити, який буде рік через N місяців.
</h1>>`)

function getYear(period:Period,numberOfMonth:number):number {
    let newMonth = period.month+numberOfMonth
    let newYear:number = period.year+Math.floor((newMonth-1)/12)
    return newYear
}
let period:Period={
     day:22,
    month:12,
    year:2005,
}
let numberOfMonth:number = 24
    document.write(`який буде рік через ${numberOfMonth} місяців: ${getYear(period,numberOfMonth)}<br>`)}
