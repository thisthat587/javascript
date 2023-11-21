const arrowfunction = (name) => {
    console.log(this)
}

const myFunction = () => {
    console.log("hello from myFunction...");
}

const obj = {
    name:"piyush",
    roll:822071
}
const object = {
    method1: arrowfunction,
    method2: myFunction,
    object1:obj
};

object.method1("piyush");
object.method2();

console.log(object.object1);