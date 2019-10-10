const Liana = require('forest-express-sequelize');
const { BigQuery } = require('@google-cloud/bigquery');
const express = require('express');
const router = express.Router();
const JSONAPISerializer = require('jsonapi-serializer').Serializer

router.get('/customer_location', Liana.ensureAuthenticated, async (req, res, next) => {
  const limit = parseInt(req.query.page.size) || 20;
  const offset = (parseInt(req.query.page.number) - 1) * limit;

  console.log({ limit, offset })

  // Create a client
  const bigqueryClient = new BigQuery();

  const sqlQuery = `
    SELECT station_id, name, longitude, latitude
    FROM \`bigquery-public-data.austin_bikeshare.bikeshare_stations\`
    LIMIT ${limit}
    OFFSET ${offset}
  `;

  const options = {
    query: sqlQuery,
    // Location must match that of the dataset(s) referenced in the query.
    location: 'US',
  };

  // Run the query
  const [rows] = await bigqueryClient.query(options);

  const serializer = new JSONAPISerializer('customer_location', {
    attributes: ['name', 'longitude', 'latitude'],
    id: 'station_id',
  })

  const customerLocation = serializer.serialize(rows)
  const count = rows.length
  res.send({
    ...customerLocation,
    meta: { count }
  })
})

module.exports = router;
