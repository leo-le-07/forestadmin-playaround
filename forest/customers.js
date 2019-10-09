const Liana = require('forest-express-sequelize');

Liana.collection('customers', {
  actions: [
    {
      name: 'Mark as live',
    },
    {
      name: 'Whoami',
      type: 'global',
      endpoint: '/forest/whoami',
      httpMethod: 'get',
    },
  ]
});
