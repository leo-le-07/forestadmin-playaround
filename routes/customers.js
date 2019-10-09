const express = require('express');
const router = express.Router();
const liana = require('forest-express-sequelize');
const models = require('../models');

router.post('/actions/mark-as-live', liana.ensureAuthenticated,
  (req, res) => {
    const customerId = req.body.data.attributes.ids[0]

    return models.customers.update(
      { stripeId: 'livelivelive' },
      { where: { id: customerId } },
    ).then(() => {
      res.send({ success: 'Updated stripe livelivelive' })
    })
  });

module.exports = router;
