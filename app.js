//core modules
/*
http -> Launh a server send reques
https -> launch a ssl server,fs,path,os
*/

const express = require("express");
const { rmSync } = require("fs");
const path = require("path");

//root bilgisini alır
const rootDir = require("./util/path");

const app = express();

app.use(express.urlencoded({ extended: true }));

//to use js and css files
app.use(express.static(path.join(rootDir, "public")));

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

//const bodyParser = require("body-parser");
//se should create server

//for body parsing we neet to install body-parser
// you can also do with express

//we are listening 3000 port
app.listen(3000);
