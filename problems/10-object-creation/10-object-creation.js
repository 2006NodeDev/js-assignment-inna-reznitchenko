/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//create an object using object literal
let objLiteral = {name: "Inna", color: "pink", food: "pizza", animal: "cat", age: 23};

//create an object using a constructor function
function objConstructor(name, color, food, animal, age){
    this.name = name;
    this.color = color;
    this.food = food;
    this.animal = animal;
    this.age = age;
}

let objectC = new objConstructor("Max", "blue", "sushi", "fish", 20);


//create an object using an es6 class
class objES6{
    constructor(entre, drink, dessert, price){
        this.entre = entre;
        this.drink = drink;
        this.dessert = dessert;
        this.price = price;
    }

    getDrink(){
        return this.drink;
    }

    getEntre(){
        return this.entre;
    }

    getDessert(){
        return this.dessert;
    }

    getPrice(){
        return this.price;
    }

}
let meal = new objES6("Steak", "Pepsi", "Cake", 15);

//testing to make sure the objects are being created properly
console.log(objLiteral);
console.log(typeof objLiteral);
console.log(objectC);
console.log(typeof objectC);
console.log(meal);
console.log(typeof meal);