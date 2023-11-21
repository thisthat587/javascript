// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     myFunction: function (firstName) {
//         return this;
//         // console.log(this.firstName)
//     }
// };

// const fun = person.myFunction();
// console.log(fun);
const object={
    name:"piyush",
    x:this,
    thisFunction: function(){
        console.log(this.name);
    }
}

object.thisFunction();
let x=this;
console.log(x);