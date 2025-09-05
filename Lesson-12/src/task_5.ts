// Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
if (confirm('Почати тестування?')) {
  document.write(`<h1>Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.</h1>`)
  
const names :string[] = ["Olga","Oleg","Anna","Oleksand","Alex","Katia","Poll","Olena"]
document.write(`Початковий масив: ${names}<br>`)

for (let k = 1; k < names.length; k++) {
    let key:string = names[k]
    let i:number = k-1
  while(i>=0&&key<names[i]){
    names[i+1]=names[i]
    i--
  }
    names[i+1]=key
}
document.write(`Відсортований масив: ${names}<br>`)
let searchElement:string = "Olga"
function binarySearch(array:string[],searchEl:string,min:number,max:number):number{
    if(min<=max){
    let middle:number = Math.floor((min+max)/2)
    if(array[middle]===searchEl)return middle
    if(array[middle]>searchEl) return binarySearch(array, searchEl,min,max = middle-1)
    if (array[middle]<searchEl)return binarySearch(array, searchEl,middle+1,max )
    }
 return-1
    
}
if(binarySearch(names,searchElement,0,names.length-1)===-1) document.write(`Ім'я ${searchElement} не знайдено <br>`)
    else{
document.write(`Ім'я ${searchElement} знайдено під індексом : ${binarySearch(names,"Olga",0,names.length-1)}<br>`)
}


    document.write(`
    <br></br>
    <a href="./index.html">назад</a>`)}