// ES6 obj destructuring
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

// Connect to db
// connect(url, callback)
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('59a1e06ee9ca5b0554efc694')
    // }).toArray().then(docs => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // })

    // db.collection('Todos').find().count().then(count => {
    //     console.log(`Todos count: ${count}`);
    // }, err => {
    //     console.log('Unable to fetch todos', err);
    // })

    db.collection('Users').find({ name: 'An Mập'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    })

    // Close the connection
    db.close();
});