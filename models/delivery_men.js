module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('delivery_men', {
    note: {
      type: DataTypes.STRING,
    },
    firstname: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    available: {
      type: DataTypes.BOOLEAN,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    geoloc: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'delivery_men',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

