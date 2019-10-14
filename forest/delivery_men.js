const Liana = require('forest-express-sequelize');

Liana.collection('delivery_men', {
  fields: [
    {
      field: 'fullname',
      type: 'String',
      get: (men) => {
        return men.firstname + ' ' + men.lastname;
      },
    },
  ],
})
