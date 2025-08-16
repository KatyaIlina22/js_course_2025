// Задача 2. Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була мінімальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість днів на вихідних.
if (confirm('Почати тестування?')) {
    function getArray(numberOfDays) {
        let array = []
        for (let day = 0; day < numberOfDays; day++) {
            array[day] = 1 + Math.floor(Math.random() * 300)

        }
        return array
    }
    let numberOfStoreVisitorsDuringTheWeek = getArray(7)
    storeTrafficAnalysis(numberOfStoreVisitorsDuringTheWeek)



    function storeTrafficAnalysis(numberOfStoreVisitor) {
        document.write(`Кількість відвідувачів протягом тижня: ${numberOfStoreVisitorsDuringTheWeek}<br>`)

        document.write(`номери днів, протягом яких кількість відвідувачів була меншою за 20: ${daysWithFewerThan20Visitors(numberOfStoreVisitor)} <br>`)
        document.write(`номери днів, коли кількість відвідувачів була мінімальною: ${daysWithTheMinimumNumberOfVisitors(numberOfStoreVisitor)}<br>`)
        document.write(`номери днів, коли кількість відвідувачів була максимальною: ${daysWithTheMaximumNumberOfVisitors(numberOfStoreVisitor)}<br>`)
        document.write(` загальну кількість у робочі дні: ${totalNumberOfVisitorsOnWeekdays(numberOfStoreVisitor)}<br>`)
        document.write(`загальну кількість клієнтів на вихідних: ${totalNumberOfVisitorsOnweekends(numberOfStoreVisitor)}<br>`)
    }




    function daysWithFewerThan20Visitors(numberOfStoreVisitor) {
        let daysWithFewerThan20Visitors = []
        for (let index = 0; index < numberOfStoreVisitor.length; index++) {
            if (numberOfStoreVisitor[index] < 20) {
                daysWithFewerThan20Visitors.push(index + 1)
            }

        }
        if (!daysWithFewerThan20Visitors[0]) return "Таких днів не було"

        return daysWithFewerThan20Visitors
    }
    function minimumNumberOfVisitors(numberOfStoreVisitor) {
        let min = numberOfStoreVisitor[0]
        for (let index = 1; index < numberOfStoreVisitor.length; index++) {
            if (numberOfStoreVisitor[index] < min) {
                min = numberOfStoreVisitor[index]
            }

        }
        return min
    }
    function daysWithTheMinimumNumberOfVisitors(numberOfStoreVisitor) {
        let daysWithTheMinimumNumberOfVisitors = []
        let min = minimumNumberOfVisitors(numberOfStoreVisitor)
        for (let index = 0; index < numberOfStoreVisitor.length; index++) {
            if (numberOfStoreVisitor[index] === min) {
                daysWithTheMinimumNumberOfVisitors.push(index + 1)
            }

        }
        return daysWithTheMinimumNumberOfVisitors

    }


    function maximumNumberOfVisitors(numberOfStoreVisitor) {
        let max = numberOfStoreVisitor[0]
        for (let index = 1; index < numberOfStoreVisitor.length; index++) {
            if (numberOfStoreVisitor[index] > max) {
                max = numberOfStoreVisitor[index]
            }

        }
        return max
    }
    function daysWithTheMaximumNumberOfVisitors(numberOfStoreVisitor) {
        let daysWithTheMaximumNumberOfVisitors = []
        let max = maximumNumberOfVisitors(numberOfStoreVisitor)
        for (let index = 0; index < numberOfStoreVisitor.length; index++) {
            if (numberOfStoreVisitor[index] === max) {
                daysWithTheMaximumNumberOfVisitors.push(index + 1)
            }

        }
        return daysWithTheMaximumNumberOfVisitors

    }
    function totalNumberOfVisitorsOnWeekdays(numberOfStoreVisitor) {
        let sum = 0
        for (let index = 0; index < 5; index++) {
            sum += numberOfStoreVisitor[index]

        }
        return sum
    }


    function totalNumberOfVisitorsOnweekends(numberOfStoreVisitor) {
        let sum = 0
        for (let index = 5; index < 7; index++) {
            sum += numberOfStoreVisitor[index]

        }
        return sum
    }
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)
}