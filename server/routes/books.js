var express = require('express');
var router = express.Router();
const sql = require('mssql')


/* GET  Books by title */
router.route('/by-title/:titlePart')
  .get(function (req, res) {
    var request = new sql.Request();
    request.query("SELECT * FROM books WHERE title LIKE '%" + req.params.titlePart + "%'",
      function (err, data) {
        if (data) {
          res.send(data.recordset);
        }
      }
    )
  })

/* GET  Books by author */
router.route('/by-author/:authorPart')
  .get(function (req, res) {
    var request = new sql.Request();
    request.query("SELECT * FROM books WHERE author LIKE '%" + req.params.authorPart + "%'",
      function (err, data) {
        if (data) {
          res.send(data.recordset);
        }
      }
    )
  })

module.exports = router;
