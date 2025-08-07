const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://localhost:27017/InventoryManager';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);    
    }

}

module.exports = connectDB;