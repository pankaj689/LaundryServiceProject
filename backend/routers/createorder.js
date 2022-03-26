const express = require("express")
const router = express.Router();
const Createorder = require("../model/orderhistry")
const summary = require('../model/summery');
var bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get("/Createorder", async (req, res) => {
    // console.log("req.user",req.user)
    const orders =  await Createorder.find({user: req.user}); //user refernce needed for particular person
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
router.get("/summary/:orderId", async (req, res) => {
    // console.log("orderID",req.params.orderId)
    const summaryData =  await summary.find({user:req.params.orderId}); //user refernce needed for particular order
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


router.post("/Createorder", async (req, res) => {
    try {
        // console.log("req.body", req.body)
        const order = await Createorder.create({
            prodType: req.body.prodType,
            orderId:req.body.orderId,
            orderDate:req.body.orderDate,
            storeLocation:req.body.storeLocation,
            city:req.body.city,
            storePhone :req.body.storePhone,
            totalItem:req.body.totalItem,
            price :req.body.price,
            status:req.body.status,
            user:req.user
        })

        // console.log("order",order)
        const summeryData = await summary.create({
            prodType: req.body.prodType,
            storeLocation:req.body.storeLocation,
            storeaddress:req.body.storeaddress,
            storePhone :req.body.storePhone,
            quantity: req.body.quantity,
            subTotal: req.body.subTotal,
            total: req.body.total,
            pickupcharges :req.body.pickupcharges,
            address: req.body.address,
            user:req.body.orderId
            
        })
        // console.log("summeryData",summeryData)
        res.json({
            status: "success",
            order,
            summeryData
        })
    } catch (e) {
        res.status(400).json({
            status: "failed",
            massege: "e.massege in side catch"
        })
    }
})

module.exports = router;
