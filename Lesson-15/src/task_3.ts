// Задача 5. Розробити клас «Керівник танців»
// Поля
// Масив імен хлопців
// Масив імен дівчат
// Методи
// Метод випадкового вибору імені хлопця
// Метод випадкового вибору імені дівчини
// Метод виведення пари для танців
// Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців
if (confirm('Почати тестування?')) {
    document.write(`<h1>Задача 5. Розробити клас «Керівник танців»</h1> Поля<br>
Масив імен хлопців<br>
Масив імен дівчат<br>
Методи<br>
Метод випадкового вибору імені хлопця<br>
Метод випадкового вибору імені дівчини<br>
Метод виведення пари для танців<br>
Метод run , який ініціює через кожні 5 секунд виведення нової пари для танців<br><br>`)
    
class DanceDirector {
    boysNames:string[];
    girlsNames:string[]
    constructor( boysNames:string[],  girlsNames:string[]){
        this.boysNames = boysNames
        this.girlsNames=girlsNames
    }
    getRandBoysName ():string{
        const randIndex = 0+Math.floor(Math.random()*this.boysNames.length)
        return this.boysNames[randIndex]
    }
      getRandGirlsName ():string{
        const randIndex = 0+Math.floor(Math.random()*this.girlsNames.length)
        return this.girlsNames[randIndex]
    }
    getCoupleForDancing (){
document.write(` ${ this.getRandBoysName ()}+ ${this.getRandGirlsName()} <br>`)

    }
    run(){
        setInterval (()=>this.getCoupleForDancing() ,5000
 
    )
    }

}
const boysNames:string[] = ["Andew","Poll","Ivan","Petro"]
 const  girlsNames:string[]=["Anna","Olivia","Katya"]
const A = new  DanceDirector (boysNames,girlsNames)
A.run()}
