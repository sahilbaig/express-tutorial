const express = require('express');
const app = express()
app.get('/',(req,res)=>{
    res.send("hwllo")
})


app.get('/about',(req,res)=>{
    res.send("about")

})


app.all('*',(req,res)=>{
  res.status(404).send("nothing here")  
})

app.listen(5000,()=>{
    console.log("server running")
}) 