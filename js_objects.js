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
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// };

// const full=person.fullName
// console.log(full)
const person = {
    firstName: "",
    lastName: "",
    set fullName(value){
        const name=value.split(' ')
        this.firstName=name[0];
        this.lastName=name[1];
    }
};
person.fullName="Dilip singh";
console.log(person.firstName);
console.log(person.lastName);