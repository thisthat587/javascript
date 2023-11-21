const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function (firstName) {
        return this;
        // console.log(this.firstName)
    }
};

const fun = person.myFunction();
console.log(fun);//refering to object in which this is written...

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
console.log(this)//module exports
function exampleFunction() {
    console.log(this);//It will print the global object...
}
exampleFunction(); // Output: window (non-strict mode), undefined (strict mode)
