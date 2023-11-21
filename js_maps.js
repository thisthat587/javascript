// In maps elements are put in the order in which they are declared unlike object in which the elements are unordered.
// In maps keys can be of any data types and they remain the same ,unlike object in which the keys are implicitly converted into string.

const books = new Map([
    ["masteringc", 200],
    ["letusc", 300],
    ["javacr", 250],
    ['book', "deep work"],
    ["price", 250.55],
    ["priceSet", function () {
        console.log("Hello from function in map")
    }]
]);

books.forEach((keys, values) => {
    if (values === 'priceSet') {

        console.log(keys())
    } else{
        
        console.log(values)
    }
})

books.set("price",120);
console.log(books.get("price"))// console.log(books.get("priceSet")());

