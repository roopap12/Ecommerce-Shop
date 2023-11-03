const mongoose = require('mongoose');
const db = process.env.MONGODB_URI || 'mongodb+srv://PatelR:Rp1234@cluster0.fx0n3bt.mongodb.net/?retryWrites=true&w=majority'
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
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