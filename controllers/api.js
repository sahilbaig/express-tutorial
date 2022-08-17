const getProductData=(req,res)=>{
    res.send("product page")
}

const somethingAnotherRoute =(req,res)=>{
    res.send("the same thing")
}

const test =(req,res)=>{
    res.send("wow")
}
const postTest =(req,res)=>{
    const {test}= req.body
    res.send(test)
}

module.exports={
    getProductData,
    somethingAnotherRoute,
    test,
    postTest,
}