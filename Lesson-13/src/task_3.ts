// Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.
document.write(`<h1> Задача 7. Тренажер додавання. Кожні 10 секунд користувачу задають випадковий приклад з додавання двох цифр і робиться перевірка.</h1>`)

if (confirm('Почати тестування?')) {
setInterval(()=>{
        const num1:number = 0+Math.floor(Math.random()*30)
         const num2:number = 0+Math.floor(Math.random()*30)
         const sum:number = num1+num2
       let userAnswer:string|null = prompt(`${num1}+${num2}`,'0')
      let userSum:number = userAnswer !==null?parseInt(userAnswer):NaN
      if(userSum===sum) alert("Правильно")
        else alert(`Не вірно, правильна відповідь ${sum}`)
    } ,10000
)
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)}