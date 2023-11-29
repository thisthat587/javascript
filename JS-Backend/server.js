import expres from 'express';

const app=expres();

app.get('/',(req,res)=>{
    res.send("Server is ready.....");
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("GOOD TO GO.....");
})
// const print = console.log
// let arr = [1,2,4,5]
// let sum = arr.map(element => {
//     print(element+1)
//     if (element== 2){}
//     else return element
// });

// print("sum",sum,arr)