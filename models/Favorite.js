const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Favorite = sequelize.define('Favorite', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  movieTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Add more columns as needed
});

module.exports = Favorite;
