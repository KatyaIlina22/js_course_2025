// Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
const length = parseFloat(prompt('Вкажіть довжину у см', "300"))
const meter = length * 0.01
const kilometer = length * 0.00001
document.write(`
   <h1>  Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.</h1>
    Задана довжина в см: ${length}
    <br> </br>
    Довжина у метрах: ${meter}
    <br> </br>
    Довжина у кілометрах: ${kilometer}
     <br></br>
    <a href="./index.html">назад</a> `)