// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля
// Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
// Кількість правильних відповідей
// Кількість неправильних відповідей
// Методи
// Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
// Перевірка правильності вказаної відповіді
// render - виведення інформації про тестування на екран
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 3. Розробити клас MultChecker для перевірки таблиці множення</h1> Поля <br>
Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7) <br>
Кількість правильних відповідей <br>
Кількість неправильних відповідей <br>
Методи <br>
Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване) <br>
Перевірка правильності вказаної відповіді <br>
render - виведення інформації про тестування на екран <br><br>`) 
    
class MultChecker {
    number:number
    numberOfCorrectAnswers:number
    numberOfIncorrectAnswers:number
    lastCorrectAnswer:number
    constructor(number:number){
        this.number = number
        this.numberOfCorrectAnswers = 0
        this.numberOfIncorrectAnswers =0
        this.lastCorrectAnswer = 0
    }

    exercise ():string{
        const randNum = 1+Math.floor(Math.random()*10)
        this.lastCorrectAnswer = randNum*this.number
        return `${this.number}*${randNum}`
    }
    
    check(userAnswer:number):void{
if(this.lastCorrectAnswer===userAnswer)  this.numberOfCorrectAnswers++
else this.numberOfIncorrectAnswers++
return 
    }
render():void{
    document.write(`Кількість правильних відповідей: ${this.numberOfCorrectAnswers},кількість неправильних відповідей: ${this.numberOfIncorrectAnswers}`)
    
}
}

let userNum = prompt("Яке число хочете перевірити?",'7')
let num = userNum!==null?parseInt(userNum):NaN
let checker = new MultChecker(num)
const numberOfExercise = 6
alert(`Всього буде: ${numberOfExercise} прикладів`)

for (let index = 1; index <=numberOfExercise; index++) {
    const userAns = prompt(`Приклад № ${index}: ${checker.exercise()}`,`0`)
    let answer = userAns!==null?parseInt(userAns):NaN
    checker.check(answer)

    
}
checker.render()


}


