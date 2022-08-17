const express = require('express')
const router = express.Router()
const {
    getProductData,
    somethingAnotherRoute,
    test,
    postTest
}=require('../controllers/api')
router.get('/product',getProductData)
router.get('/something/another-route',somethingAnotherRoute)
router.get("/test",test)
router.post("/test",postTest)

module.exports=router