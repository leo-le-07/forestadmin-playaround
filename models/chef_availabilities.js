module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('chef_availabilities', {
    chefId: {
      type: DataTypes.INTEGER,
    },
    availableAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'chef_availabilities',
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
  };

  return Model;
};

