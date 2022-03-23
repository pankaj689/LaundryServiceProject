const express = require("express")
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://group14:group1410x@laundryservice.m0iy6.mongodb.net/LaundryService?retryWrites=true&w=majority";
var bodyParser = require('body-parser')
router.use(bodyParser.json())
router.get("/prodlist", async (req, res) => {
    MongoClient.connect(url, function (err, db) {
        var resultArray = []
        if (err) throw err;
        var dbo = db.db("LaundryService");
        var curser = dbo.collection("prodlist").find();
        console.log("curser", curser)

        curser.forEach(function (doc, err) {
            resultArray.push(doc)

        }, function () {
            res.json({
                status: "success",
                resultArray
            })
        })
    })
});
// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("LaundryService");
//     var myobj = [
//         {
//             prodType: "Shirts",
//             prodDesc: "Lorem Ipsum is simply dummy text of the",
//             prodImg: "https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
//         },
//         {
//             prodType: "T-shirts",
//             prodDesc: "Lorem Ipsum is simply dummy text of the",
//             prodImg: "https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
//         },
//         {
//             prodType: "Trouseres",
//             prodDesc: "Lorem Ipsum is simply dummy text of the",
//             prodImg: "https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
//         },
//         {
//             prodType: "Jeans",
//             prodDesc: "Lorem Ipsum is simply dummy text of the",
//             prodImg: "https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
//         },
//         {
//             prodType: "Boxser",
//             prodDesc: "Lorem Ipsum is simply dummy text of the",
//             prodImg: "https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
//         },
//         {
//             prodType: "Joggers",
//             prodDesc: "Lorem Ipsum is simply dummy text of the",
//             prodImg: "https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
//         },
//         {
//             prodType: "others",
//             prodDesc: "Lorem Ipsum is simply dummy text of the",
//             prodImg: "https://image.shutterstock.com/image-vector/check-back-soon-hand-lettering-600w-1379832464.jpg"
//         }

//     ];
//     dbo.collection("prodlist").insertMany(myobj, function (err, res) {
//         if (err) throw err;
//         // console.log("Number of documents inserted: " + res.insertedCount);
//         db.close();
//     });
// });

module.exports = router;

