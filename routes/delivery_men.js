const express = require('express');
const router = express.Router();
const liana = require('forest-express-sequelize');
const models = require('../models');

router.post('/actions/mark-as-unavailable', liana.ensureAuthenticated,
  (req, res) => {
    const ids = req.body.data.attributes.ids
    const attributes = req.body.data.attributes.values
    const reason = attributes['Reason']

    return models.delivery_men.update(
      { available: false, note: reason },
      { where: { id: ids } },
    ).then(() => {
      res.send({ success: 'Update available successfully' })
    })
  }
);

module.exports = router;
