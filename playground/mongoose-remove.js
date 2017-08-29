const { ObjectID } = require('mongodb');

const { mongoose } = require ('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Remove everything: Todo.remove({});

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove()

Todo.findByIdAndRemove("59a5be99a9965d1124d6b2d8").then((todo) => {
    console.log(todo);
});