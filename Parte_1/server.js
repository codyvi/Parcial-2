const express = require('express');

const app = express();

app.use(express.json());

let Port = process.env.Port || 5000;

//Get
app.get("/", (req,res)=>{
    res.send("You are on the homepage");
})

app.post("/post",(req,res)=>{
    res.send("Welcome "+  req.body.user);
})

app.delete("/delete",(req,res)=>{
    if(req.body.taskId){
        res.send("{delete:true}");
    }
    else{
        res.send("No object to delete");
    }
})

app.put("/put/:id",(req,res)=>{
    res.send("Task "+ req.params.id +" has been updated");
})


app.listen(Port, () =>{
    console.log(`Server on port: ${Port}`)
})