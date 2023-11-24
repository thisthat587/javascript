// A callback is a function passed as an argument to another function.
let numbers=[2,-2,3,4,5,-21,-3,33];

function removeNegative(numbers){
    numbers=numbers.filter(positiveNumbers=(num) => num>=0)
    // console.log(index);
    return numbers;
}

console.log("Positive numbers : ",removeNegative(numbers))
console.log("Original array : ",numbers);