let promise = new Promise((resolve, reject) => {

    x = 0;
    if (x === 0) {
        resolve("SAME");
    }
    else {
        reject("Error Occured...!");
    }
})

promise.then((value) => {
        console.log(value);
        return "OK";
    })
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("It Ends.......");
    })