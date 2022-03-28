const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser')
const orderHistory = require('../model/orderhistry');
router.use(bodyParser.json())
router.post("/update/:orderId", async (req, res) =>{
    console.log(req.params.orderId)
    const order = await orderHistory.updateOne({orderId: req.params.orderId}, {$set:{status: "Cancelled"}})
    console.log(order);
})
module.exports = router;