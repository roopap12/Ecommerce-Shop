const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    profilePicture: {
        type: String, // You can store the file path or URL to the profile picture
        required: false
    },
    role: {
        type: String,
        default: 'user', // default role is 'user'
        enum: ['user', 'admin'] // the role can be either 'user' or 'admin'
      }
    // Add other fields as necessary
});

module.exports = User = mongoose.model('User', UserSchema);