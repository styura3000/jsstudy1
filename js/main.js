class Hater{
    constructor(firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
        }
        sayName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

let hater1=new Hater("Вася", "Пупкин");
hater1.sayName();
console.log(hater1);



