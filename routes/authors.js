var express = require('express');
var router = express.Router();

/* GET book page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  db.query('SELECT * FROM tbl_author', function(err, results, fields){
    if (err) {
        res.send('error in database');
    }else{
        res.send({ title: 'List of All Authors',
                         authors:results});
    }
  })
});

module.exports = router;