const express = require('express');
const router = express.Router();
const sql = require('mssql')

/* GET Users by title */
router.route('/by-name/:namePart')
.get(function (req, res) {
  const request = new sql.Request();
  request.query("SELECT * FROM users WHERE fullName LIKE '%" + req.params.namePart + "%'",
    function (err, data) {
      if (data) {
        res.send(data.recordset);
      }
    }
  )
})

module.exports = router;
