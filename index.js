const express = require("express");
const app = express();
const multer  = require('multer')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))
const router = require("./router/index");


app.use("/", router);

app.listen(8080);
