const mongoose = require('mongoose');

// Setup Todo model
const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true // Remove all preceeding and suceeding spaces
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = { Todo };