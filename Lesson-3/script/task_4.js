// З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
const userAge = parseFloat(prompt("Вкажіть ваш вік"))
const kindergartenMax = 6;
const schoolMax = 17;
const universityMax = 22;
const workMax = 60;
document.write(`
 
    <h1>Завдання 4 З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, студентом, працівником, пенсіонером).
 </h1>`)
if (userAge < 0 || userAge > 110) {
    document.write(`Некоректні дані`)
}
else if (userAge < 1) {
    document.write(`Ви немовля`)
}
else if (userAge <= kindergartenMax) {
    document.write(`Ви дитина в садочку`)
}
else if (userAge <= schoolMax) {
    document.write(`Ви школяр`)
}
else if (userAge <= universityMax) {
    document.write(`Ви студент`)
}
else if (userAge <= workMax) {
    document.write(`Ви працівник`)
}

else if (userAge > workMax) {
    document.write(`Ви пенсіонер`)
}
document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)




