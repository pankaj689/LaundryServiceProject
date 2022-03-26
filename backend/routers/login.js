const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userdetails = require("../model/userschema.js");
const bodyparser = require("body-parser");
const { body, oneOf, validationResult } = require("express-validator");
const SECRET = "LaundryService";
router.use(bodyparser.json());
router.get("/details", async (req, res) => {
  const user = await userdetails.find();
  return res.json({
    status: "Sucess",
    user,
  });
});
//---------------------------------------------Registration-----------------------------------------------------------//
router.post(
  "/register",
  body("name"),
  body("email"),
  body("phone"),
  body("password"),
  body("state"),
  body("district"),
  body("address"),
  body("pincode"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {
        name,
        email,
        password,
        phone,
        state,
        district,
        address,
        pincode,
      } = req.body;
      bcrypt.hash(password, 10, async function (err, hash) {
        if (err) {
          res.status(400).json({
            status: "failed",
            message: "Invalid details",
          });
        }
        const user = await userdetails.create({
          name,
          email,
          password: hash,
          phone,
          state,
          district,
          address,
          pincode,
        });
        res.json({
          status: "success",
          user,
        });
      });
    } catch (e) {
      res.json({
        status: "failed",
        message: e.message,
      });
    }
  }
);

//---------------------------login----------------------------//

router.post(
  "/login",
  oneOf([body("email"), body("phone")]),
  body("password"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      console.log(req.body);
      const { email, password } = req.body;

      if (email) {
        const user = await userdetails.findOne({ email: email });
        console.log(user)
        if (!user) {
          return res.status(404).json({
            status: "failed",
            message: "Invalid user",
          });
        }
        bcrypt.compare(password, user.password).then(function (result) {
          if (result) {
            var token = jwt.sign({ exp: Math.floor(Date.now() / 1000) + (120 * 120),data: user._id }, SECRET);      //_id: user._id
            return res.json({ 
              status: "sucess",
              token,
            });
          } else {
            return res.status(401).json({
              status: "failed",
              message: "Not Authenticated",
            });
          }
        });
      } else if (phone) {
        const user = await userdetails.findOne({ phone: phone });
        if (!user) {
          return res.status(401).json({
            status: "failed",
            message: "Invalid user",
          });
        }
        bcrypt.compare(password, user.password).then(function (result) {
          if (result) {
            var token = jwt.sign({exp: Math.floor(Date.now() / 1000) + (120 * 120), data: user._id }, SECRET);
            return res.json({
              status: "sucess",
              token,
            });
          } else {
            return res.status(401).json({
              status: "failed",
              message: "Not Authenticated",
            });
          }
        });
      }

      //------------------------compare-------------------------------//
    } catch (e) {
      res.json({
        status: "user-failed",
        message: e.message,
      });
    }
  }
);

module.exports = router;
