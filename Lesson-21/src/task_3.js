
if (confirm('Почати тестування?')) {
    window.onload = function () {
        // Задача 1. Виводити на екран скільки хвилин користувач вже на сайті
        const startTime = new Date()
        function usingTime() {
            const nowTime = new Date()
            const differ = nowTime - startTime
            const minutes = Math.floor(differ / 1000 / 60)
            document.getElementById("time").innerText = minutes
        }
        setInterval(usingTime, 1000)
        // Задача 2. Вводимо час початку процедури (процедура триває 30хв). Визначити, чи процедура ще триває. 

        const btn = document.getElementById("check")
        btn.addEventListener("click", checkHandler)
        function checkHandler() {
            const procedureInput = document.getElementById("procedure__time")
            const [hours, minutes] = procedureInput.value.split(":").map(Number)
            const startT = new Date()
            startT.setHours(hours, minutes, 0, 0)
            const now = new Date()
            const endT = new Date(startT.getTime() + 30 * 60 * 1000)
            const result = document.getElementById("result")
            if (now < startT) result.innerText = "Процедура ще не почалась"
            else if (now > endT) result.innerHTML = "Процедура вже закінчилась"
            else result.innerHTML = "Процедура ще триває"
        }
        // Задача 3. Визначити скільки залишилось до кінця робочого дня (до 17.00)


        function getEndOfWorkTime() {
            const now = new Date()
            const endOfWork = new Date()
            endOfWork.setHours(17, 0, 0, 0)
            const differ = endOfWork - now
            const minutes = Math.floor(differ / 1000 / 60)
            if (minutes > 0) {
                document.getElementById("job__time").innerText = `${minutes} хв`
            }
            else document.getElementById("job__time").innerText = "Робочий день вже закінчився"
        }

        setInterval(getEndOfWorkTime, 1000)

        // Задача 4. Створити функцію, яка дозволяє визначити, чи знаходиться вказана дата і час у межах поточного тижня (від понеділка 0 год, 0хв, до неділі 23год.59хв)
        function checkDate(dateToCheck) {
            const nowDate = new Date()
            const startOfWeek = new Date(nowDate)
            const day = startOfWeek.getDay()
            const diffToMonday = day === 0 ? -6 : 1 - day
            startOfWeek.setDate(startOfWeek.getDate() + diffToMonday)
            startOfWeek.setHours(0, 0, 0, 0)
            const endOfWeek = new Date(startOfWeek)
            endOfWeek.setDate(endOfWeek.getDate() + 6)
            endOfWeek.setHours(23, 59, 59, 999)
            return dateToCheck >= startOfWeek && dateToCheck <= endOfWeek
        }
        function resultHandler() {
            const userDateStr = document.getElementById("user__date").value
            const userDate = new Date(userDateStr)
            const result = checkDate(userDate)
            if (result) resultDate.innerText = "Вказана дата знаходиться в межах поточного тижня"
            else resultDate.innerText = "Вказана дата не знаходиться в межах поточного тижня"
        }

        const resultbtn = document.getElementById("check__date")
        resultbtn.addEventListener("click", resultHandler)
        const resultDate = document.getElementById("date__result")

        // Задача 5. При заході на сайт вітати користувача або відображати повідомлення про те,  скільки хвилин залишилось до початку робочого дня (початок о 8.00).

        const current = new Date()
        const startjobTime = new Date(current).setHours(8, 0, 0, 0)
        if (startTime > current) {
            const diffTime = startjobTime - current
            const differMinutes = diffTime / 1000 / 60
            this.alert(`До початку робочого дня: ${differMinutes} хвилин`)
        }
        else {
            this.alert('Вітаю')
        }

        // Задача 6. Вивести скільки зараз годин у Лондоні, Парижі, Сіднеї.
        function showWorldTime() {
            const london = document.querySelector(".london__time")
            const paris = document.querySelector(".paris__time")
            const sydney = document.querySelector(".sydney__time")
            const currentTime = new Date()

            const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
            london.innerText = new Intl.DateTimeFormat('en-GB', { ...options, timeZone: 'Europe/London' }).format(currentTime)
            paris.innerText = new Intl.DateTimeFormat('fr-FR', { ...options, timeZone: 'Europe/Paris' }).format(currentTime)
            sydney.innerText = new Intl.DateTimeFormat('en-AU', { ...options, timeZone: 'Australia/Sydney' }).format(currentTime)
        }
        setInterval(showWorldTime, 1000)

        // Задача 7. Дано список студентів (ім’я і дата народження: у формі тексту (день.місяць.рік). Знайти найстаршого студента
        const students = [
            { name: "Оля", birth: "15.05.2000" },
            { name: "Іван", birth: "02.03.1999" },
            { name: "Марія", birth: "20.07.2001" }
        ]
        function parseDate(studentDate) {
            const [day, month, year] = studentDate.split('.').map(Number)
            return new Date(year, month - 1, day);
        }

        function findOldestStudent(students) {
            let oldestStudent = students[0]
            let oldestDate = parseDate(oldestStudent.birth)
            for (const student of students) {
                const studentDate = parseDate(student.birth);
                if (studentDate < oldestDate) {
                    oldestStudent = student;
                    oldestDate = studentDate;
                }
            }

            return oldestStudent;
        }
        const oldestStudent = findOldestStudent(students);
        console.log(`Найстарший студент: ${oldestStudent.name}, дата народження: ${oldestStudent.birth}`);

        // Задача 8. Визначити скільки пройшло секунд після заходу на сайт перш ніж користувач зробив рух мишкою.
        const startTm = new Date()

        function mouseMoved() {
            const endTm = new Date()
            const differTime = (endTm - startTm) / 1000
            alert(`Ви не рухали мишею впродовж ${differTime.toFixed(2)} секунд`)
            window.removeEventListener("mousemove", mouseMoved)
        }
        setTimeout(() => { this.window.addEventListener("mousemove", mouseMoved) }, 4000)

        // Задача  9. Користувачка планувала оформила дектретну відпустку на 200 днів (дата початку відпустки вводиться). Визначити чи відпустка вже триває і чи не закінчилась.

        const vocationInput = document.getElementById("vocation__time")
        const vocationcheckBtn = document.getElementById("check__vocation")
        vocationcheckBtn.addEventListener("click", vocationResultHandler)
        const vocationResult = document.getElementById("vocation__result")
        function vocationResultHandler() {
            const vocationDateStr = vocationInput.value
            const [vocationDay, vocationMonth, vocationYear] = vocationDateStr.split('.').map(Number)
            const currentDate = new Date()
            const vocationDate = new Date(vocationYear, vocationMonth - 1, vocationDay)
            const endDate = new Date(vocationDate.getTime() + 200 * 24 * 60 * 60 * 1000)
            if (currentDate < vocationDate) vocationResult.innerText = "Відпустка ще не почалась"
            else if (currentDate > endDate) vocationResult.innerText = "Відпустка закінчилась"
            else vocationResult.innerText = "Відпустка ще триває"
        }

        // Задача 10 . Дано дата виробництва йогурта (вводимо рік, місяць, день) та кількість днів придатності. Визначити чи є він придатним на даний момент.
        function checkSuitabilityHandler() {
            const dateOfManufactureInput = document.getElementById("date__of__manufacture")
            const dateOfManufactureStr = dateOfManufactureInput.value
            const [manufactureDay, manufactureMonth, manufactureYear] = dateOfManufactureStr.split(".").map(Number)
            const expirationDateInput = document.getElementById("expiration__date")
            const expirationDate = Number(expirationDateInput.value)
            const dateOfManufacture = new Date(manufactureYear, manufactureMonth - 1, manufactureDay)
            const dueDate = new Date(dateOfManufacture.getTime() + expirationDate * 24 * 60 * 60 * 1000)
            const nowDat = new Date()
            const suitabilityResult = document.getElementById("suitability__result")
            if (dateOfManufacture > nowDat) {
                suitabilityResult.innerText = "Ще не виготовлений"
            } else if (dueDate < nowDat) {
                suitabilityResult.innerText = "Строк придатності вийшов"
            } else {
                suitabilityResult.innerText = "Ще придатний"
            }
        }

        const checkSuitabilityBtn = document.getElementById("check__suitability")
        checkSuitabilityBtn.addEventListener("click", checkSuitabilityHandler)
        // Задача 12. Сформувати масив з 1000 елементів від 1 до 800. Порівняти час сортування бульбашкою і  вставкою.
        let number = 1000;
        let randArray = getRandArray(number);
        function getRandArray(number) {
            const array = Array.from({ length: number }, () => 1 + Math.floor(Math.random() * 800));
            return array;
        }

        const startBubble = performance.now()
        bubleSort([...randArray])
        const endBubble = performance.now()
        console.log(`Час сортування бульбашкою: ${(endBubble - startBubble).toFixed(2)} ms`)

        const startInsert = performance.now();
        insertSort([...randArray])
        const endInsert = performance.now()
        console.log(`Час сортування вставками: ${(endInsert - startInsert).toFixed(2)} ms`)



        function bubleSort(randArray) {
            let changed;
            let rightLimit = randArray.length - 1;

            do {
                changed = false;
                for (let index = 1; index < rightLimit; index++) {
                    if (randArray[index] < randArray[index - 1]) {
                        const temp = randArray[index];
                        randArray[index] = randArray[index - 1];
                        randArray[index - 1] = temp;
                        changed = true;

                    }
                }
                rightLimit--;
            } while (changed);

        }
        function insertSort(randArray) {
            for (let k = 1; k < randArray.length; k++) {
                let key = randArray[k];
                let i = k - 1;
                while (i >= 0 && key < randArray[i]) {
                    randArray[i + 1] = randArray[i];
                    i--;

                }
                randArray[i + 1] = key;

            }

        }

    }

}

