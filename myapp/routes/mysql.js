var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "sbm381",
  password: "sbm381@421"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //res.send('MySQL::Connected!');
  });

/* GET adoption data. */
router.get('/adoption_record', function(req, res, next) {
  con.query("SELECT * FROM sbm381.adoption_record", function (err, result, fields) {
    if (err) {
      // throw err;
    }
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post adoption data. */
router.post('/adoption_record', function(req, res, next) {
  var sql = con.query("INSERT INTO sbm381.adoption_record set ? ", req.body, function (err, result, fields) {
    if (err) {
      //throw err;
      res.sendStatus(400); // send an error 
    } else {      
      console.log(sql);
      // res.send(result);
      res.json({"status": "OK"}); // your own code
    }
  });
});

//get animal data
router.get('/animal', function(req, res, next) {
  con.query("SELECT * FROM sbm381.animal", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post animal data. */
router.post('/animal', function(req, res, next) {
  var sql = con.query("INSERT INTO sbm381.animal  set ? ", req.body, function (err, result, fields) {
    if (err) {
      //throw err;
      res.sendStatus(400); // send an error 
    } else {      
      console.log(sql);
      // res.send(result);
      res.json({"status": "OK"}); // your own code
    }
  });
});

/* GET foster data. */
router.get('/foster_record', function(req, res, next) {
  con.query("SELECT * FROM sbm381.foster_record", function (err, result, fields) {
    if (err) {
      // throw err;
    }
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post foster data. */
router.post('/foster_record', function(req, res, next) {
  var sql = con.query("INSERT INTO sbm381.foster_record set ? ", req.body, function (err, result, fields) {
    if (err) {
      //throw err;
      res.sendStatus(400); // send an error 
    } else {      
      console.log(sql);
      // res.send(result);
      res.json({"status": "OK"}); // your own code
    }
  });
});




module.exports = router;

