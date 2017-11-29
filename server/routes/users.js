var express = require('express');
var router = express.Router();
const sql = require('mssql')

/* GET Users by title */
router.route('/by-name/:namePart')
.get(function (req, res) {
  var request = new sql.Request();
  request.query("SELECT * FROM users WHERE fullName LIKE '%" + req.params.namePart + "%'",
    function (err, data) {
      if (data) {
        res.send(data.recordset);
      }
    }
  )
})

module.exports = router;
