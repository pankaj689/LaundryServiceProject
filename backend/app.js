const express=require("express")

var mongoose = require('mongoose');
const app=express()
var url = "mongodb+srv://group14:group1410x@laundryservice.m0iy6.mongodb.net/LaundryService?retryWrites=true&w=majority";

mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
//svsvsfbsfsbsfvsgot

// const username = "group14";
// const password = "group14@10x";
// const cluster = "cluster0.vlyun";
// const dbname = "Laundryservices";


// mongoose.connect(
//   `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );

app.listen(5000,()=>{console.log("listening to port 5000")})