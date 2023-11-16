const mongoose = require('mongoose');
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerceShop';

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure
    }
}

console.log('Before connecting to MongoDB'); // Add this line for debugging

// // Call the connectDB function
connectDB();

console.log('After connecting to MongoDB'); // Add this line for debugging

module.exports = connectDB;