// Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 1. Знайти суми елементів у вказаній області (зафарбована область охоплює відповідну половину рядків і стовпців)</h1>`)

    const getRandomRow = (elCount, min, max) => {
        return Array.from(
            { length: elCount }, () => min + Math.floor(Math.random() * (max - min + 1))
        )
    }
    const getRandomMatrix = (elCount, rowCount, min, max) => {
        return Array.from(
            { length: rowCount }, () => getRandomRow(elCount, min, max)
        )
    }
    const randArray = getRandomMatrix(4, 4, 1, 10)
    randArray.forEach(row => {
        document.write(` ${row} <br>`)

    })

    function getSumOfMatrix(matrix, startRow, endRow, startCol, endCol) {
        let sum = 0
        for (let rowIndex = startRow; rowIndex < endRow; rowIndex++) {
            for (let colIndex = startCol; colIndex < endCol; colIndex++) {
                sum += matrix[rowIndex][colIndex]

            }

        }
        return sum
    }
    const halfRow = Math.floor(randArray.length / 2)
    const halfCol = Math.floor(randArray[0].length / 2)
    //1) номери рядків від 0 до половини, стовпці від 0 до половини
    const sum1 = getSumOfMatrix(randArray, 0, halfRow, 0, halfCol)
    document.write(`сума квадрата зверху зліва (номери рядків від 0 до половини, стовпці від 0 до половини): ${sum1}<br>`)

    // 2) номери рядків від 0 до половини, стовпці від половини до кінця

    const sum2 = getSumOfMatrix(randArray, 0, halfRow, halfCol, randArray[0].length)
    document.write(`сума квадрата зверху справа(номери рядків від 0 до половини, стовпці від 0 до половини): ${sum2}<br>`)

    // 3)номери рядків (від половини до кінця, стовпці від 0 до половини

    const sum3 = getSumOfMatrix(randArray, halfRow, randArray.length, 0, halfCol,)
    document.write(`сума квадрата знизу зліва : ${sum3}<br>`)




    // 4) номери рядків від половини до кінця , стовпці від половини до кінця
    const sum4 = getSumOfMatrix(randArray, halfRow, randArray.length, halfCol, randArray[0].length)
    document.write(`сума квадрата знизу справа : ${sum4}<br>`)
    // 5) Суму парних рядків
    let sum5 = 0
    for (let rowIndex = 0; rowIndex < randArray.length; rowIndex += 2) {
        for (let colIndex = 0; colIndex < randArray[rowIndex].length; colIndex++) {
            sum5 += randArray[rowIndex][colIndex]
        }

    }
    document.write(`сума парних рядків : ${sum5}<br>`)
    // 6) Суму непарних стовпців
    let sum6 = 0
    for (let rowIndex = 0; rowIndex < randArray.length; rowIndex++) {
        for (let colIndex = 1; colIndex < randArray[rowIndex].length; colIndex += 2) {
            sum6 += randArray[rowIndex][colIndex]
        };

    }
    document.write(`сума непарних стовпців : ${sum6}<br>`)
    // 7) У парних рядках – непарні стовпці, у непарних – парні.
    let sum7 = 0
    for (let rowIndex = 0; rowIndex < randArray.length; rowIndex++) {
        if (rowIndex % 2 == 0) {
            for (let colIndex = 1; colIndex < randArray[rowIndex].length; colIndex += 2) {
                sum7 += randArray[rowIndex][colIndex]

            }
        }
        else {
            for (let colIndex = 0; colIndex < randArray[rowIndex].length; colIndex += 2) {
                sum7 += randArray[rowIndex][colIndex]

            }
        }

    }
    document.write(`У парних рядках – непарні стовпці, у непарних – парні: ${sum7}`)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}