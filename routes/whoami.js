const express = require('express');
const router = express.Router();
const liana = require('forest-express-sequelize');

router.get('/actions/whoami', liana.ensureAuthenticated,
  (req, res) => {
    return res.send({
      success: `You are ${req.user.data.first_name} ${req.user.data.last_name}.`
    })
  }
)

module.exports = router;
