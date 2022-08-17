const express= require('express')
const router= express.Router()
router.get('/',(req,res)=>{
    res.send("hello there")
})

router.get('/login',(req,res)=>{
    const {username}= req.body
    res.send(username)
})


module.exports=router