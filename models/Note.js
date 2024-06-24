//const { DataTypes } = require('sequelize');
//const sequelize = require('../config/database');
const User = require('./User');
const Category = require('./Category');
const connectDB = require('../config/database');

//const Note = sequelize.define('Note', {
  //title: {
    //type: DataTypes.STRING,
    //allowNull: false,
  //},
  //content: {
    //type: DataTypes.TEXT,
    //allowNull: false,
  //},
  //attachment: {
    //type: DataTypes.STRING,
  //},
//});

//Note.belongsTo(User);
//Note.belongsTo(Category);

//module.exports = Note;
connectDB(); // Connect to MongoDB

const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', NoteSchema);
