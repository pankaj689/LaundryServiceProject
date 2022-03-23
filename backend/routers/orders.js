const express = require('express');
const router = express.Router();
const orderHistory = require('../model/orderhistry');
const summary = require('../model/summery');

router.get("/Createorder", async (req, res) => {
  
    console.log("req.user",req.user)
    const orders =  await orderHistory.find({user: "6239653a93d7a3b1d634ffe2"}); //user refernce needed for particular person
    if (orders){
        res.status(200).json({
            "status": "success",
            orders
        })
    }else{
        res.status({
            "status": "failed",
            "message" : e.message
        })
    }
})
router.get("/summary", async (req, res) => {
    const summaryData =  await summary.find({user: req.user}); //user refernce needed for particular order
    if (summaryData){
        res.status(200).json({
            "status": "success",
            summaryData
        })
    }else{
        res.status({
            "status": "failed",
            "message" : e.message
        })
    }
})

module.exports = router;