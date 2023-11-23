//this is the functions which are passed to the parameter of another function.

let numbers=[2,-2,3,4,5,-21,-3,33];

function removeNegative(numbers){
    numbers=numbers.filter(num=>num>=0)
    return numbers;
}

console.log(removeNegative(numbers))