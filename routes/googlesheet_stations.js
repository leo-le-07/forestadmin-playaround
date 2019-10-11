const Liana = require('forest-express-sequelize');
const express = require('express');
const router = express.Router();
const JSONAPISerializer = require('jsonapi-serializer').Serializer
const GoogleSpreadsheet = require('google-spreadsheet')

const creds = require('../.bigquerytoken.json')

router.get('/googlesheet_stations', Liana.ensureAuthenticated, async (req, res) => {
  const doc = new GoogleSpreadsheet('1kqQ0zyoVD4R5qyXeDWOeNdRECp_C1x0uMwppSy05K_I')

  const authServiceCallback = (error) => {
    doc.getRows(1, getRowsCallback)
  }

  const getRowsCallback = (error, rows) => {
    const data = rows.map(item => ({
      id: item.id,
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

router.post('/actions/reverse-gender', Liana.ensureAuthenticated, (req, res) => {
  const id = req.body.data.attributes.ids[0]

  const doc = new GoogleSpreadsheet('1kqQ0zyoVD4R5qyXeDWOeNdRECp_C1x0uMwppSy05K_I')

  const authServiceCallback = (error) => {
    doc.getRows(1, getRowsCallback)
  }

  const saveRowCallback = (error) => {
    if (error) {
      res.send({ error: 'Revert error' })
    } else {
      res.send({ success: 'Revert successfully' })
    }
  }

  const getRowsCallback = (error, rows) => {
    const index = rows.findIndex(item => item.id === id)

    if (index === -1) {
      res.send({ error: 'Cannot find any record on Google sheets' })
    } else {
      const foundedRow = rows[index]
      foundedRow.gender = foundedRow.gender === 'Male' ? 'Female' : 'Male'
      foundedRow.save(saveRowCallback)
    }
  }

  doc.useServiceAccountAuth(creds, authServiceCallback)
})

module.exports = router;
