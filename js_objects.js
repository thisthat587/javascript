// const person = {
//     name: "piyush",
//     age: 22,
//     car: {
//         brand: 'BMW'
//     }
// }

// person.address = 'purnia';

// const array = JSON.stringify(person)//object into array...

// console.log(person)
// // console.log(array)

// for (value in person) {
//     // console.log(person[value])
// }
// const jsonstring=
//     `{
//     "name": "piyush",
//     "age": 22,
//     "car": {
//         "brand": "BMW"
//     },
//     "address": "purnia"
//     }`; 
// console.log(jsonstring)

// const date=new Date()

// console.log(JSON.stringify(date));

// const person = {
//     name: "John",
//     age: function () {
//         return 30;
//     }
// };
// person.age = person.age.toString();
// console.log(person)
console.log("getter--------------------\n");
const person1 = {
    firstName: "John",
    lastName: "Doe",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
};
//getter must have return value as this function is used to get any type of value...
const fullname=person1.fullName
console.log(fullname)
console.log("\nsetter--------------------\n");
const person2 = {
    firstName: "",
    lastName: "",
    set fullName(value){
        const name=value.split(' ')
        this.firstName=name[0];
        this.lastName=name[1];
    }
};
person2.fullName="Dilip singh";
console.log(person2.firstName);
console.log(person2.lastName);
// setter must have parameters bcoz it is used to set value of properties in object provided by users...

// #####################################################################################################
// Built-In javascript constructors... 
// new String()    // A new String object
// new Number()    // A new Number object
// new Boolean()   // A new Boolean object
// new Object()    // A new Object object
// new Array()     // A new Array object
// new RegExp()    // A new RegExp object
// new Function()  // A new Function object
// new Date()      // A new Date object
