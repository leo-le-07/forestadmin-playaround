module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('orders_products', {
    orderId: {
      type: DataTypes.INTEGER,
    },
    productId: {
      type: DataTypes.INTEGER,
    },
  }, {
    tableName: 'orders_products',
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
  };

  return Model;
};

