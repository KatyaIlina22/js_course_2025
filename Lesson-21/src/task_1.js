// Задача 4. Користувач задає місяць навчання учня (перевіряти чи є числом, чи від 1 до 12, чи не канікули) та оцінку (перевіряти чи є числом, чи від 1 до 100). Вивести чи зможе він виправити оцінку (якщо оцінка погана і це не останній місяць у семестрі) . Обробку усіх помилок зробити з використанням відповідних класів.
if (confirm('Почати тестування?')) {
    window.onload = function () {

        class IsNotNumberError extends Error {
            constructor() {
                super()
                this.message = 'Має бути числом'
                this.name = 'IsNotNumberError'
            }

        }
        class IsNegativeNumberError extends Error {
            constructor() {
                super()
                this.message = 'Не може бути 0 та менше за 0'
                this.name = ' IsNegativeNumberError'
            }

        }
        class IsTooHightNumberError extends Error {
            constructor(value) {
                super()
                this.message = `Не може бути більше за ${value}`
                this.name = 'IsTooHightNumberError'
            }

        }

        class CorrectionGrades {
            constructor(badGrade = 60, semester = 1) {
                this.badGrade = badGrade
                this.semester = semester
                this.semesterMonth = {
                    1: [9, 10, 11, 12],
                    2: [1, 2, 3, 4, 5]
                }
            }

            createInput(title, id) {
                const wrapper = document.createElement("div")
                const label = document.createElement("label")
                const input = document.createElement("input")
                const error = document.createElement("div")
                error.className = "error"
                error.style.color = "red"
                error.style.marginLeft = "10px"

                input.id = id
                input.type = "number"
                label.innerText = title
                label.appendChild(input)
                wrapper.appendChild(label)

                wrapper.appendChild(error)

                document.body.appendChild(wrapper)
            }
            createBtn(title, id) {
                const btn = document.createElement("button")
                btn.innerText = title
                btn.id = id
                document.body.appendChild(btn)
            }
            render() {
                this.createInput("month", "month")
                this.createInput("grade", "grade")
                this.createBtn("check", "check")
                this.addCheckEvents()
            }
            getValue(id) {
                const value = document.getElementById(id).value
                return value
            }
            addCheckEvents() {
                document.getElementById("check").addEventListener("click", this.btnHandler.bind(this))
                document.getElementById("month").addEventListener("input", this.correctChecker.bind(this))
                document.getElementById("grade").addEventListener("input", this.correctChecker.bind(this))

            }
            btnHandler() {
                try {
                    const month = Number(this.getValue("month"))
                    const grade = Number(this.getValue("grade"))
                    const semesterMonths = this.semesterMonth[this.semester]
                    const firstMonth = semesterMonths[0]
                    const lastMonth = semesterMonths[semesterMonths.length - 1]
                    this.validateGrade(grade)
                    this.validateMonth(month)
                    if (month < lastMonth && month >= firstMonth && grade <= this.badGrade) {
                        alert("Можна виправити ")
                    }
                    else alert("Не можна виправити")
                } catch (error) {
                    alert(error.message)
                }

            }
            correctChecker(e) {
                const input = e.target
                const errorEl = input.closest("label").nextElementSibling
                try {


                    const val = input.value
                    if (val === "") throw new IsNotNumberError()
                    const value = Number(val)
                    if (input.id === 'month') {
                        this.validateMonth(value)

                    } else if (input.id === 'grade') {
                        this.validateGrade(value)

                    }

                    errorEl.innerText = ''
                } catch (err) {
                    errorEl.innerText = `${err.message}`
                }
            }
            validateMonth(value) {
                if (value <= 0) throw new IsNegativeNumberError()
                if (value > 12) throw new IsTooHightNumberError(12)
                if (isNaN(value)) throw new IsNotNumberError()

            }
            validateGrade(value) {
                if (value <= 0) throw new IsNegativeNumberError()
                if (isNaN(value)) throw new IsNotNumberError()
                if (value > 100) throw new IsTooHightNumberError(100)
            }
        }

        const correctionGrades = new CorrectionGrades
        correctionGrades.render()











    }
}