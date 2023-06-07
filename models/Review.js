const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.INTEGER,
    }
  //   // user_name: {
  //   //   type: DataTypes.INTEGER,
  //   //   references: {
  //   //     model: 'user',
  //   //     key: 'name',
  //   //   },
  //   // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Review',
  }
);

module.exports = Review;