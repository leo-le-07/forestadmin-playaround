module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('customers', {
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    stripeId: {
      type: DataTypes.STRING,
    },
    bulkActionStartedBy: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'customers',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

