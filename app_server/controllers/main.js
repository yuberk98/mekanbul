var express = require("express");
var router = express.Router();


router.get('/',);

module.exports.index=function(req,res,next) {
    res.render('index' , { title: 'Express' })};