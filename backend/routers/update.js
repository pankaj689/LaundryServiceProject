const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')
const orderHistory = require('../model/orderhistry');
const summary = require('../model/summery');

router.use(bodyParser.json())

router.post("/update", async (req, res) =>{
    const order = await orderHistory.updateOne({orderId: req.body.orderId}, {$set:{status: "Cancelled"}})
    console.log(order);
})

module.exports = router;