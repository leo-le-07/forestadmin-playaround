const Liana = require('forest-express-sequelize');

Liana.collection('googlesheet_stations', {
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
      field: 'gender',
      type: 'String',
    },
    {
      field: 'classlevel',
      type: 'String',
    },
  ]
})
