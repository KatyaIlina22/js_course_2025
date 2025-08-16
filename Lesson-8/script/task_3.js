// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.
if (confirm('Почати тестування?')) {
    let studentGrades = getRandGrades(15)
    analysisOfGrades(studentGrades)




    function getRandGrades(number) {
        let array = []
        for (let grades = 0; grades < number; grades++) {
            array.push(1 + Math.floor(Math.random() * 12))

        }
        return array
    }

    function analysisOfGrades(grades) {
        document.write(`Оцінки учня: ${grades}<br>`)
        document.write(`Кількість двійок: ${numberOfTwos(grades)}<br>`)
        document.write(`Кількість хороших оцінок (добре, відмінно): ${numberOfGoodGrades(grades)}<br>`)
        let avg = averageGrade(grades)
        document.write(`Середній бал: ${avg.toFixed(2)} <br>`)
        document.write(`Кількість оцінок, які нижче середнього: ${numberOfBelowAverageGrade(grades, avg)}<br>`)

    }

    function numberOfTwos(grades) {
        let count = 0
        for (let index = 0; index < grades.length; index++) {

            if (grades[index] === 2) {
                count++
            }

        }
        return count
    }
    function numberOfGoodGrades(grades) {
        let count = 0
        for (let index = 0; index < grades.length; index++) {

            if (grades[index] > 6 && grades[index] < 13) {
                count++
            }

        }
        return count
    }
    function averageGrade(grades) {
        let sum = 0
        for (let index = 0; index < grades.length; index++) {
            sum += grades[index]

        }
        return sum / grades.length
    }
    function numberOfBelowAverageGrade(grades, averageGrade) {
        let count = 0
        for (let index = 0; index < grades.length; index++) {

            if (grades[index] < averageGrade) {
                count++
            }

        }
        return count

    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}
