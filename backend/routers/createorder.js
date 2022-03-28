const express = require("express")
const router = express.Router();
const Createorder = require("../model/orderhistry")
// const summary = require('../model/summery');
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:true}))
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

    // console.log("orderId", req.params);
    const odi = req.params.orderId
    const summaryData =  await Createorder.findOne({_id: odi}); //user refernce needed for particular order

  

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
       console.log("req.body", req.body)
    try {
        // console.log("req.body", req.body)
        const order = await Createorder.create({
            prodType: req.body.prodType,
            orderId:req.body.orderId,
            orderDate:req.body.orderDate,
            storeLocation:req.body.storeLocation,
            storeaddress:req.body.storeaddress,
            city:req.body.city,
            storePhone :req.body.storePhone,
            totalItem:req.body.totalItem,
            subTotal: req.body.subTotal,
            price :req.body.price,
            pickupcharges :req.body.pickupcharges,
            status:req.body.status,
            address: req.body.address,
            user:req.user
        })


        // console.log("summeryData",summeryData)
        res.json({
            status: "success",
            order,
            massege : "orderPlace"
        })
    } catch (e) {
        res.status(400).json({
            status: "failed",
            massege: e.message
        })
    }
})

module.exports = router;

