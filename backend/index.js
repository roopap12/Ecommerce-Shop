const express = require('express');
const connectDB = require('./server');
const user = require('./models/user');

const app = express();

connectDB();

app.get('/', (req, res) => {
    res.send('Hello World!');
    user.find({}, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
})

