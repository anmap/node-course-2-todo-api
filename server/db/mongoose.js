const mongoose = require('mongoose');

// Setup promise for mongoose (check if new version supports Promise automatically!!!)
mongoose.Promise = global.Promise;

// Mongoose.connect(host, { useMongoClient: true});
mongoose.connect('mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
});

module.exports = { mongoose };