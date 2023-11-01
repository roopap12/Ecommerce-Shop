const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('YOUR_MONGODB_URI', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectDB;