//const { DataTypes } = require('sequelize');
//const sequelize = require('../config/database');
const connectDB = require('../config/database');

//const Category = sequelize.define('Category', {
  //name: {
    //type: DataTypes.STRING,
    //allowNull: false,
  //},
//});

//module.exports = Category;
connectDB(); // Connect to MongoDB
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('Category', CategorySchema);
