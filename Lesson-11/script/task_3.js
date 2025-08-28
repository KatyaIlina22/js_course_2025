// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.
if (confirm('Почати тестування?')) {
    document.write(` Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.<br>`)

    let numberOfShips = 5
    const size = 6
    let field = Array.from({ length: size }, () => Array(size).fill(0))
    while (numberOfShips > 0) {

        const randRow = 0 + Math.floor(Math.random() * 6)
        const randCol = 0 + Math.floor(Math.random() * 6)
        if (field[randRow][randCol] === 0) {
            field[randRow][randCol] = 1
            numberOfShips--
        }

    }

    numberOfShips = 5
    let numberOfAmmunition = 12
    while (numberOfAmmunition > 0 && numberOfShips > 0) {
        let userRowNumber = parseInt(prompt(`У вас є ${numberOfAmmunition} снарядів,  номер рядка для пострілу (0-5):`, '1'))
        let userColNumber = parseInt(prompt(`У вас є ${numberOfAmmunition} снарядів,  номер стовпця для пострілу (0-5):`, '1'))
        if (field[userRowNumber][userColNumber] === 1) {
            field[userRowNumber][userColNumber] = 0
            numberOfShips--
            alert(`Ви влучили, залишилось потопити ${numberOfShips} кораблів`)
        }
        else alert(`Ви не влучили`)

        numberOfAmmunition--
    }
    if (numberOfShips === 0) document.write(`Вітаю ви потопили всі кораблі`)
    else {
        document.write(`На жаль, у вас закінчились снаряди<br>`)
        document.write(`Де залишились кораблі: <br>`)


        field.forEach(row => {
            document.write(`${row.join(' ')} <br>`)
        });
    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}

