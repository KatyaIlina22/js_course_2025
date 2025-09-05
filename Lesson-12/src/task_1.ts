// Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою

if (confirm('Почати тестування?')) {
document.write(`<h1>Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою</h1>`)

let number:number = 30
let randArray:number[]= getRandArray(number)


function getRandArray(num:number):number[]{
const array:number[] = Array.from({length:num},()=>-10+Math.floor(Math.random()*20))
return array
}
document.write(`початковий масив: ${randArray}<br>`)

let changed:boolean
let rightLimit:number = randArray.length-1
let numberOfChanges:number = 0
do {
    changed=false
    for (let index = 1; index < rightLimit; index++) {
        if(randArray[index]<randArray[index-1]){
            const temp:number = randArray[index]
            randArray[index] = randArray[index-1]
            randArray[index-1] = temp
            changed = true
            numberOfChanges++
        }
 
        
    }
         rightLimit--
} while (changed);

document.write(`Відсортований: ${randArray}<br>`)

}
    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)


