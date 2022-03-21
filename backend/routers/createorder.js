const express = require("express")
const router = express.Router();
const Createorder = require("../model/orderhistry")
var bodyParser = require('body-parser')
router.use(bodyParser.json())
router.post("/Createorder", async (req, res) => {
    try {
        console.log("req.body", req.body)
        const order = await Createorder.create(
            req.body
        )
        res.json({
            status: "success",
            order
        })
    } catch (e) {
        res.status(400).json({
            status: "failed",
            massege: e.massege
        })
    }
})

module.exports = router;