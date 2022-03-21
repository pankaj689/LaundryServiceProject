const express=require("express")
const mongoose = require('mongoose');
const app = express();
const orderRouter = require('./routers/orders')
const createRouter = require('./routers/createOrder');


var url = "mongodb+srv://group14:group1410x@laundryservice.m0iy6.mongodb.net/LaundryService?retryWrites=true&w=majority";

mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  // db.close();
});

app.use("/api", orderRouter);
app.use("/api", createRouter);



app.listen(5000,()=>{console.log("listening to port 5000")})