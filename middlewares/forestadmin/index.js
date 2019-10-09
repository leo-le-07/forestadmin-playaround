const requireAll = require('require-all');
const chalk = require('chalk');
const models = require('../../models');

module.exports = function (app) {
  require('lumber-forestadmin').run(app, {
    modelsDir: __dirname + '/../../models',
    envSecret: process.env.FOREST_ENV_SECRET,
    authSecret: process.env.FOREST_AUTH_SECRET,
    sequelize: models.sequelize, 
  });

  requireAll({
    dirname: __dirname + '/../../routes',
    recursive: true,
    resolve: Module => app.use('/forest', Module)
  });

  console.log(chalk.cyan('Your admin panel is available here: https://app.forestadmin.com/projects'));
};
