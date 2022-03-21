const express = require("express");
var mongoose = require("mongoose");
const app = express();
const routeLogin = require("./routers/login.js");
var url =
  "mongodb+srv://group14:group1410x@laundryservice.m0iy6.mongodb.net/LaundryService?retryWrites=true&w=majority";

mongoose.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  // db.close();
});

app.use("/api", routeLogin);

app.listen(5000, () => {
  console.log("listening to port 5000");
});

// app.get("/", (req, res) => {
//   res.send("Server connected");
// });

// //------------------------------------Login---------------------------------------------------------------------------
// app.post("/login", (req, res) => {
//   userDetails = req.body;
//   userID = userDetails.userID;
//   reqPassword = userDetails.password;
// });
