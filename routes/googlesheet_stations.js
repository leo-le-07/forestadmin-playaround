const Liana = require('forest-express-sequelize');
const express = require('express');
const router = express.Router();
const JSONAPISerializer = require('jsonapi-serializer').Serializer
const GoogleSpreadsheet = require('google-spreadsheet')
const uuidv1 = require('uuid/v1');

const creds = require('../.bigquerytoken.json')

router.get('/googlesheet_stations', Liana.ensureAuthenticated, async (req, res) => {
  const limit = parseInt(req.query.page.size) || 20;
  const offset = (parseInt(req.query.page.number) - 1) * limit;

  const doc = new GoogleSpreadsheet('1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms')
  const options = {
    limit,
    offset,
  }

  const authServiceCallback = (error) => {
    doc.getRows(1, options, getRowsCallback)
  }

  const getRowsCallback = (error, rows) => {
    const data = rows.map(item => ({
      id: uuidv1(),
      name: item.studentname,
      gender: item.gender,
      classlevel: item.classlevel,
    }))

    const serializer = new JSONAPISerializer('googlesheet_stations', {
      attributes: ['name', 'gender', 'classlevel'],
    })
    const students = serializer.serialize(data)
    const count = students.length
    res.send({
      ...students,
      meta: { count },
    })
  }

  doc.useServiceAccountAuth(creds, authServiceCallback)
})

module.exports = router;
