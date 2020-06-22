/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    propertyNames = Object.getOwnPropertyNames(someObj);
    propertyValues = Object.values(someObj);
    for(i=0; i < propertyNames.length; i++){
        console.log(propertyNames[i] + ": " + propertyValues[i])
    }
}

//testing with different objects
let person = {firstName:"Inna", lastName:"Reznitchenko", age:23, eyeColor:"blue"};
let cat = {name:"sushi", color:"orange", age:3};

objectProperties(person)
objectProperties(cat)