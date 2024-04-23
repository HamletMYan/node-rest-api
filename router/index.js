const router = require("express").Router();
const multer = require("multer");
const { Genre, Film, User, WishList } = require("../model/index");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.get("/", async (req, res) => {
  res.send("hii");
});

module.exports = router;
