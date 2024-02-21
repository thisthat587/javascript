// // new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     console.log("Hello world...!");
// //     resolve();
// //   }, 2000);
// // })
// //   .then((value) => {
// //     console.log(value);
// //   })
// //   .finally(() => {
// //     console.log("All Promise Done...!");
// //   })

// new Promise((resolve, reject) => {
//         let error = false;
//         if (!error) {
//                 resolve({ username: "piyush", password: "123" });
//         } else {
//                 reject("ERROR: Something went wrong...!");
//         }
// })
//         .then((user) => {
//                 console.log(user);
//                 return user.username;
//         })
//         .then((username) => {
//                 console.log(username);
//         })
//         .catch((error) => {
//                 console.log(error);
//         })
//         .finally(() => console.log("Promise Consumed...!"));

// let promiseFive = new Promise((resolve, reject) => {
//         let error = true;
//         if (!error) {
//                 resolve("Promise Resolved...!");
//         } else {
//                 reject("ERROR: Something went wrong...!")
//         }
// });

// async function consumepromiseFive() {
//         try {
//                 const response = await promiseFive;
//                 console.log(response);

//         } catch (error) {
//                 console.log(error);
//         }
// }

// consumepromiseFive();

// async function getAllusers() {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         try {
//                 console.log(typeof (response));
//                 const data = await response.json();
//                 console.log(data);
//                 console.log(typeof(data));
//         } catch (error) {
//                 console.log("ERROR : ", error);
//         }
// }

// getAllusers();

fetch('https://jsonplaceholder.typicode.com/users').then(value => {

      try {
            const response = value.json();
            return response;
      } catch {
            console.log("Error")
      }
}).then(data => {
      // console.log(data);
      data.map((each) => {
            console.log(each.company);
      })
})

