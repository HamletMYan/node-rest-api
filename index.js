const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'))
const router = require("./router/index");

console.log(34343434);
app.use("/", router);

app.listen(8080);
