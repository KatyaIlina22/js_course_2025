// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.</h1>`)
    
const namesList:string[] = ["Olga","Oleg","Anna","Oleksand","Alex","Ilyia","Katia","Poll","Olena"]
document.write(`Початковий масив: ${namesList}<br>`)

for (let k = 1; k < namesList.length; k++) {
    let key:string  = namesList[k]
    let i:number = k-1
    while(i>=0&&key.length<namesList[i].length){
        namesList[i+1] =namesList[i]
        i--
    }
    namesList[i+1]=key
    
}
document.write(`Відсортований масив: ${namesList}<br>`)
const searchEl:number = 5
function binarSearch(array:string[],searchEl:number,min:number,max:number):number {
    if(min<=max){
    let middle:number = Math.floor((min+max)/2)
    if(array[middle].length===searchEl) return middle 
    if(array[middle].length>searchEl) return binarSearch(array,searchEl,min,middle-1)
    if(array[middle].length<searchEl) return binarSearch(array,searchEl,middle+1,max)
    }
    return-1
}
const result = binarSearch(namesList,searchEl,0,namesList.length-1)
if (result===-1) {
    document.write(`Ім'я з довжиною: ${searchEl} не знайдено<br>`)
    
} else {
    document.write(`Ім'я з довжиною  ${searchEl} знайдено під індексом:${result}<br>`)
    
}
    document.write(`
    <br></br>
        <a href="./index.html">назад</a>`)}