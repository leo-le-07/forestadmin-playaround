module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('product_images', {
    productId: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    imageFileName: {
      type: DataTypes.STRING,
    },
    imageContentType: {
      type: DataTypes.STRING,
    },
    imageFileSize: {
      type: DataTypes.INTEGER,
    },
    imageUpdatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'product_images',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

