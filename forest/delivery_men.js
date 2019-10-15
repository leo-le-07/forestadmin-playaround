const Liana = require('forest-express-sequelize');

Liana.collection('delivery_men', {
  fields: [
    {
      field: 'fullname',
      type: 'String',
      get: (men) => {
        return men.firstname + ' ' + men.lastname;
      },
      set: (men, fullname) => {
        let names = fullname.split(' ');
        men.firstname = names[0];
        men.lastname = names[1];

        // Don't forget to return the model
        return men;
      },
    },
  ],
  actions: [
    {
      name: 'Mark as unavailable',
      // type: 'single',
      fields: [
        {
          field: 'Reason',
          description: 'The reason why he/she is unavailable',
          type: 'String',
          isRequired: false,
        },
      ],
    },
  ],
})
