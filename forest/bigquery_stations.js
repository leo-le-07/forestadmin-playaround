const Liana = require('forest-express-sequelize');

Liana.collection('bigquery_stations', {
  fields: [
    {
      field: 'id',
      type: 'String',
    },
    {
      field: 'name',
      type: 'String',
    },
    {
      field: 'latitude',
      type: 'Number',
    },
    {
      field: 'longitude',
      type: 'Number',
    },
  ]
})
