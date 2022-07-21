const express = require('express');
const router = express.Router();
const multer = require("multer");
const md5 = require("md5");
const path = require("path");
const File = require("../controller/file");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/uploads/file") 
    },  
    filename: function (req, file, cb) {
        cb(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
    }
})  
 
const upload = multer({ storage: storage }) 
 
router.post('/add', upload.single("image"), File.fileAdd);

module.exports = router;