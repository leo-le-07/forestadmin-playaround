module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('menus_products', {
    productId: {
      type: DataTypes.INTEGER,
    },
    menuId: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'menus_products',
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
  };

  return Model;
};

