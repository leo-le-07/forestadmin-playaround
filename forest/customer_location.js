const Liana = require('forest-express-sequelize');

Liana.collection('customer_location', {
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
