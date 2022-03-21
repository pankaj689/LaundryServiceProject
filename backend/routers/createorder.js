const express = require("express")
const router = express.Router();
const Createorder = require("../model/orderhistry")
const summary = require('../model/summery');

var bodyParser = require('body-parser')
router.use(bodyParser.json())
router.post("/Createorder", async (req, res) => {
    try {
        console.log("req.body", req.body)
        const order = await Createorder.create(
            req.body
        )
        const summeryData = await summary.create({
        prodType: req.prodType,
        quantity: req.quantity,
        subTotal: req.body.subTotal,
        total: req.body.total,
        address: req.body.address,
        user: req.user
    })
        res.json({
            status: "success",
            order,
            summeryData
        })
    } catch (e) {
        res.status(400).json({
            status: "failed",
            massege: e.massege
        })
    }
})

module.exports = router;
