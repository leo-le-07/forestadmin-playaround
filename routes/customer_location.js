const Liana = require('forest-express-sequelize');
const { BigQuery } = require('@google-cloud/bigquery');
const express = require('express');
const router = express.Router();
const JSONAPISerializer = require('jsonapi-serializer').Serializer

router.get('/customer_location', Liana.ensureAuthenticated, async (req, res, next) => {
  // Create a client
  const bigqueryClient = new BigQuery();

  const limit = parseInt(req.query.page.size) || 20;
  const offset = (parseInt(req.query.page.number) - 1) * limit;

  const sqlQuery = `
    SELECT station_id, name, longitude, latitude
    FROM \`bigquery-public-data.austin_bikeshare.bikeshare_stations\`
    LIMIT ${limit}
    OFFSET ${offset}
  `;
  const countQuery = `
    SELECT count(*) as total FROM \`bigquery-public-data.austin_bikeshare.bikeshare_stations\`
  `

  // Run the query
  const [rows] = await bigqueryClient.query({ query: sqlQuery, location: 'US' });
  const [totalPayload] = await bigqueryClient.query({ query: countQuery, location: 'US' });

  const serializer = new JSONAPISerializer('customer_location', {
    attributes: ['name', 'longitude', 'latitude'],
    id: 'station_id',
  })

  const customerLocation = serializer.serialize(rows)
  const count = totalPayload[0].total
  res.send({
    ...customerLocation,
    meta: { count }
  })
})

module.exports = router;
