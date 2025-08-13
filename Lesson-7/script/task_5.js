// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
const numberOfMonth = parseInt(prompt('Вкажіть номер місяця', ''))
document.write(`<h1>Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.</h1>`)

document.write(`Пора року: ${getSeason(numberOfMonth)}`)

function getSeason(month) {
    let season
    switch (month) {

        case 1:
        case 2:
        case 12:
            season = "Зима"
            return season

        case 3:
        case 4:
        case 5:
            season = "Весна"
            return season

        case 6:
        case 7:
        case 8:
            season = "Літо"
            return season

        case 9:
        case 10:
        case 11:
            season = "Осінь"
            return season
        default:
            season = "ви ввели некоректні дані"
            return season
    }
}



document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)