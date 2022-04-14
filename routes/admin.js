const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

//next is a function
router.get("/add-product", (req, res, next) => {
  console.log("In the Midlleware!");
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // next(); //allows request to continue another middle ware
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
