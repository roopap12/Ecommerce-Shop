const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerceShop';
// const db = 'mongodb://localhost:27017/ecommerceShop';
const secretKey = process.env.MY_APP_SECRET_KEY || '2e05dbf3913bec2dfdfd6a6a47005147b812819778b61b088b3f76544a698cdd';

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4,
        });
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure
    }
};
console.log('Before connecting to MongoDB'); // Add this line for debugging

// module.exports = { connectDB, secretKey };
module.exports = connectDB;