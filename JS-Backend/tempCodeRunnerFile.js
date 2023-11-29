import expres from 'express';

const app=expres();

app.get('/githubapi',(req,res)=>{
    console.log(req,res)
    fetch('https://api.github.com/users/thisthat587').then(value=>{
        return value.json();
    }).then(data=>{
        res.send(data);
    })
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("GOOD TO GO.....");
})
