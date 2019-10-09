module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('menus', {
    availableAt: {
      type: DataTypes.DATE,
    },
    chefId: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'menus',
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
  };

  return Model;
};

