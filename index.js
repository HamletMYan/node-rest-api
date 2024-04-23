const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))
const router = require("./router/index");

app.use("/", router);
console.log("hii")
app.listen(8080);
