var express = require('express');
const axios = require('axios');
const moment = require('moment');
const fs = require('fs');

var router = express.Router({'strict':true});
/* GET users listing. */
router.get('/abc', function(req, res, next) {
  res.send("/abc");
});
router.get('/abc/', function(req, res, next) {
  res.send("/abc/");
});
router.get('/', function(req, res, next) {
  console.log('processing request (test cache)' + moment().toString() +"/"+ req.header("If-Modified-Since"));
  axios.get('https://randomuser.me/api/?results=10')
  .then(function (response) {  
    let updatesinceHeader  = null;
    if(req.header("If-Modified-Since")){
      updatesinceHeader = moment(req.header("If-Modified-Since"));
    }
    if(updatesinceHeader == null || updatesinceHeader.isBefore(fs.statSync('./routes/users.js').mtime)){
      res.set({"Content-Type":"application/json",
                "Cache-Control":"private, max-age=10",
                "Last-Modified":moment().toString(),
                "Expires":moment().add(1, "day").toString()});
      res.set({"Pagination-Count": 1,
                "Pagination-Page": 1, 
                "Pagination-Limit": 20});
      res.send({"data":response.data});
    }else{
      res.statusCode = 304;
      res.end();
    }
  })
  .catch(function (error) {
    res.statusCode = 500;
    res.send({
      "error":{
        "code":500,
        "message":"Remote service error"
      }      
    });
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
});

router.head('/', function(req, res, next){
  console.log('processing header request (test cache)');
  res.set({"content-type":"application/json"});
  res.send({
    "page":1,
    "version":"1.0"
  });
});

module.exports = router;
