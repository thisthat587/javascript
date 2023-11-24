setTimeout(function myFunction() {
    console.log("hello world...!")
}, 2000)

setTimeout(fun = () => console.log("hello world...!"), 1000)
const hello = () => "Hello world...!";
hello()
x = 9;
const double = () => 2 * 2;

console.log(double());
console.log(hello());

setInterval(() => {
    const utcTime = new Date(); 
    // UTC time

    const offsetIST = 330; 
    // For IST, which is UTC+5:30
    
    const istTime = new Date(utcTime.getTime() + (offsetIST * 60 * 1000));
    console.log(utcTime.getHours()); // Display IST time
    console.log(istTime.getHours()); // Display IST time


}, 1000);
