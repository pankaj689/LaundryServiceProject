const express=require("express")
var mongoose = require('mongoose');
const app=express()
var url = "mongodb+srv://group14:group1410x@laundryservice.m0iy6.mongodb.net/LaundryService?retryWrites=true&w=majority";
const prodRouter=require("./routers/prodlist")
const Createorder =  require("./routers/createorder")

mongoose.connect(url,  async function(err, db) {
  if (err) throw err;
  const te="Database created!"
  console.log( te);
  // db.close();
});

app.use("/api",prodRouter)
app.use("/api",Createorder)


app.listen(5000,()=>{console.log("listening to port 5000")})