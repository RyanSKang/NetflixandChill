const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Review = sequelize.define('Review', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  movieTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  reviewText: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Review;
