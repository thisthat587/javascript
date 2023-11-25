// let promise = new Promise((resolve, reject) => {

//     x = 0;
//     if (x === 0) {
//         resolve("SAME");
//     }
//     else {
//         reject("Error Occured...!");
//     }
// })

// promise.then((value) => {
//     console.log(value);
//     return "OK";
// })
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     }).finally(() => {
//         console.log("It Ends.......");
//     })


function myDisplayer(){
    console.log("Hello world...!");
}
function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function() {
      if (req.status == 200) {
        myCallback(req.responseText);
      } else {
        myCallback("Error: " + req.status);
      }
    }
    req.send();
  }
  
  getFile(myDisplayer)