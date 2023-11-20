console.clear();

const string = ['mayank', 'Anand', 'Pankaj', 'Ashish', 'Badal'];

console.log("\nOF\n")
console.log("-------------------------");
// It will print the value in the array...
// for(of) prints direct value of an iterable data structure...
for (value of string) {
    console.log(value)
}

console.log("-------------------------");
console.log("\nIN\n");
// It will print index in the array...
// for(IN) is basically used to print key or the value associated to the key

for (key in string) {
    console.log(key);
}
// It will print the value in the array...
for (key in string) {
    console.log(string[key]);
}

console.log("-------------------------");
console.log("\nSame in Objects\n");
console.log("-------------KEYS------------");
const object={
    name:"Piyush",
    hobby:"coding",
    address:"patna",
    surname:"singh"
}

for(key in object){
    console.log(key)
}
console.log("------------VALUES-------------");
for(key in object){
    console.log(object[key])
}
console.log("-------------VALUES------------");
//object mein for(of) directly use nhi hga phle uske keys nikal ke phir iterate krna pdga.
//So, this will give error.
// for(value of object){    
//     console.log(value)
// }

const entry= Object.entries(object)

for([key,value] of entry){
    console.log(value)
}
// console.log(entry);