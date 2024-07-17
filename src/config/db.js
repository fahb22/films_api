const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    console.log("MongoDB URI:", process.env.MONGODB_URI); // Verifica se a URI está carregada
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

module.exports = connectDB;
