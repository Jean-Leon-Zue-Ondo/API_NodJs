const { DataTypes } = require('sequelize');
const connectDB = require('../config/database');
const User = require('./User');
//const Note = require('./Note');

//const Share = sequelize.define('Share', {
  //sharedWithUserId: {
    //type: DataTypes.INTEGER,
    //allowNull: false,
  //},
//});

//Share.belongsTo(User, { as: 'owner' });
//Share.belongsTo(Note);

//module.exports = Share;
connectDB(); // Connect to MongoDB

const mongoose = require('mongoose');

const ShareSchema = new mongoose.Schema({
  note: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Note',
    required: true
  },
  sharedWith: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  permission: {
    type: String,
    enum: ['read', 'write'],
    default: 'read'
  },
  sharedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Share', ShareSchema);
