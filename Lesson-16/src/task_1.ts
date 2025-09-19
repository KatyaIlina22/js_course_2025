	// Наплічник
// Клас із полями #weight і #items. Дозвольте додавати предмети, якщо вага не перевищує 10 кг.
if (confirm('Почати тестування?')) {
class Bag {
    private weight:number=0;
    private items:string[]=[]
    get Weight ():number{
        return this.weight
    }
    set Weight(val){
         this.weight = val
    }
     get Items ():string[]{
        return this.items
    }
 

    addItems (weight:number,item:string){
        if(weight<=0) throw new Error("Вага не може бути 0 або менше 0");
        if(weight+this.Weight>10) throw new Error("Перевищення допустимої ваги");
        this.items.push(item)
        this.Weight+=weight
    }
    toString(){
        return `Предмети: ${this.Items} Загальна вага:${this.Weight}`
    }

}
let bag = new Bag;
 while (true){
try {
   
       const userItem = prompt("Що хочете покласти до рюкзака", "");
        if (userItem === null || userItem === "") {
            throw new Error("Не вказано назву предмета");
        }
        const item = userItem;

        const userWeight = prompt("Яка вага предмету", "2");
        if (userWeight === null) {
            throw new Error("Не вказано вагу предмета");
        }
        const weight = parseFloat(userWeight);

        if (isNaN(weight)) {
            throw new Error("Вага повинна бути числом");
        }
        bag.addItems(weight,item)
        alert(bag)
    }
    
        
        


 catch (error:any) {
   alert(error.message);
    
    break;
}
}

}