let promise = new Promise((resolve, reject) => {
    // setTimeout( 3000)
    x = 9;
    if (x === 0) {
        resolve("SAME");
    }
    else {
        reject("Error Occured...!");
    }
})

promise
    .then((value) => {
        console.log(value);
        return "OK";
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })