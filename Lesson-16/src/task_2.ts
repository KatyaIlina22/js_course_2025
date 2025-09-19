// Задача 2. Створити клас TMoney для роботи з грошовими сумами. Сума повинна зберігатися у вигляді доларового еквіваленту. Реалізувати методи додавання/вилучення грошової маси, вказуючи необхідну суму у гривнях, та визначення курсу долара, при якому сума у гривнях збільшиться на 100. Курс долара зберігати в окремому полі. 
if (confirm('Почати тестування?')) {
class TMoney {
    amountInDollars:number=0;
    dollarExchangeRate:number=0;
constructor (dollarExchangeRate:number=40){
    this.DollarExchangeRate=dollarExchangeRate
    this.AmountInDollars=0
}
set DollarExchangeRate(val:number){
    if(val<=0|| isNaN(val)) throw new Error("некоректний курс");
    this.dollarExchangeRate = val
    
}
get DollarExchangeRate(){
    return this.dollarExchangeRate
}
    set AmountInDollars (val:number){
if(val<0|| isNaN(val)) throw new Error("некоректна сума грошей");
this.amountInDollars= val
    }

    get AmountInDollars(){
        return this.amountInDollars
    }

    dollarConversion(amountInHryvnias:number){
       return amountInHryvnias/this.dollarExchangeRate
    }
depositMoney(amountInHryvnias:number){
const amountInDollars =this.dollarConversion(amountInHryvnias)
this.AmountInDollars=this.AmountInDollars+amountInDollars
return this.AmountInDollars
}
withdrawMoney(amountInHryvnias:number){
 
const amountInDollars =this.dollarConversion(amountInHryvnias)
   if(this.AmountInDollars<amountInDollars) throw new Error("Недостатньо коштів");
   this.AmountInDollars=this.AmountInDollars-amountInDollars
return this.AmountInDollars
}
// новий_курс = поточний_курс + (100 / сума_в_доларах)
getNewDollarExchangeRate (){
    if(this.AmountInDollars<=0) throw new Error("На рахунку 0, неможливо обчислити");
    
const newDollarExchangeRate = this.DollarExchangeRate+(100/this.AmountInDollars)
return newDollarExchangeRate.toFixed(2)
}
toString(){
    return `$Ваш баланс ${this.AmountInDollars}$ курс долара:${this.DollarExchangeRate}`
}
}

try{
let money = new TMoney();



do {
    let userAnsw = prompt(`1. додавання грошової маси \n2. вилучення грошової маси \n3.визначення курсу долара, при якому сума у гривнях збільшиться на 100.\n4. дізнатись поточний баланс`)
    switch (userAnsw) {
    case "1":
       money.depositMoney(question())
       break;
    case "2":
       money.withdrawMoney(question())
       break;
    case "3":
       alert( money.getNewDollarExchangeRate())
       break;
    case "4":
       alert(money)
        break;
    default: 
     throw new Error("некоректні дані");
     ;
       break;
}

} while (confirm("Бажаєте продовжити?"));
}
 catch (error:any) {
    alert(error.message)
}
function question() {
     const userAnswer = prompt("Вкажіть суму")
    const userMoney:number = userAnswer!==null?parseFloat(userAnswer):NaN
    return userMoney
}

}
