// utils/db.js
const mongoose = require('mongoose');
require('dotenv').config();

const dbURI = process.env.MONGODB_CONN

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
};

module.exports = connectDB;
