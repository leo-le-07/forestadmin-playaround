module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  const Model = sequelize.define('products', {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    instructions: {
      type: DataTypes.STRING,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: Sequelize.literal('{}'),
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    allergens: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: Sequelize.literal('{}'),
    },
    productType: {
      type: DataTypes.INTEGER,
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
    price: {
      type: DataTypes.DOUBLE,
      defaultValue: Sequelize.literal('0.0'),
    },
  }, {
    tableName: 'products',
    underscored: true,
  });

  Model.associate = (models) => {
  };

  return Model;
};

