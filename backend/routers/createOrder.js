const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const orderHistory = require('../model/orderhistry');
const summary = require('../model/summery');


router.use(bodyParser.json());

router.post("/create", async (req, res) => {
    console.log(req.body);
    const order = await orderHistory.create(req.body)
    const summeryData = await summary.create({
        prodType: req.prodType,
        quantity: req.quantity,
        subTotal: req.body.subTotal,
        total: req.body.total,
        address: req.body.address,
        user: req.user
    })
    res.json({
        "status": "sucess",
        order, 
        summeryData
    })
})





module.exports = router;