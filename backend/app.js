const express=require("express")
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
// const orderRouter = require('./routers/orders')
const routeLogin = require("./routers/login.js");
const prodRouter=require("./routers/prodlist")
const Createorder =  require("./routers/createorder")
var jwt = require('jsonwebtoken');
const SECRET = "LaundryService";
const url =
  "mongodb+srv://group14:group1410x@laundryservice.m0iy6.mongodb.net/LaundryService?retryWrites=true&w=majority";
mongoose.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  // db.close();
});

const whitelist =[
  "http://localhost:3000"
]

app.use(cors({
  origin:(origin,callback)=>{
      if (whitelist.indexOf(origin)!==-1||!origin){
          callback(null,true)
      }else{
          callback(new Error("Not allowed"))
      }
  },optionsSucsessStatus:200
}))

app.use("/api/Createorder",(req,res,next)=>{
  console.log(req.headers.authorization)
  var token = req.headers.authorization.split("test ")[1]
  // console.log(token)
  if(!token){
     return res.status(401).json({
          status:"failed",
          message:"Token not found"
      })
  }
  // varyfing  token
  jwt.verify(token, SECRET, function(err, decoded) {
      console.log("decoded",decoded)
     
  if(err){
      return res.status(401).json({
          status:"failed",
          message:"Invalid tokan"
      })
  }
  req.user=decoded.data;
  // console.log("req.user",req.user)
});
next();
});


// app.use("/api", orderRouter);
app.use("/api", routeLogin);
app.use("/api",prodRouter)
app.use("/api",Createorder)

app.listen(5000, () => {
  console.log("listening to port 5000");
});

