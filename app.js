const express = require('express');
const connectDB = require('./config/database');
const noteRoutes = require('./routes/noteRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const shareRoutes = require('./routes/shareRoutes');
require('dotenv').config();

const app = express();

if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

app.use(express.json());
app.use('/api', noteRoutes);
app.use('/api', categoryRoutes);
app.use('/api', userRoutes);
app.use('/api', shareRoutes);

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
