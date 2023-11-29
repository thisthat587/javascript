// import expres from 'express';

// const app=expres();

// app.get('/',(req,res)=>{
//     res.send("Server is ready.....");
// })

// const port=process.env.PORT || 4000;

// app.listen(port,()=>{
//     console.log("GOOD TO GO.....");
// })
const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Developer'
  };
  
  const { name, age, occupation, city = 'Unknown' } = person;
console.log(name,"\n",age,"\n",occupation,"\n",city);  
// const print = console.log
// let arr = [1,2,4,5]
// let sum = arr.map(element => {
//     print(element+1)
//     if (element== 2){}
//     else return element
// });

// print("sum",sum,arr)