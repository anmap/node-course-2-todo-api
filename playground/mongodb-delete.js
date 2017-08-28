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

    // deleteMany
    // db.collection('Todos').deleteMany(
    //     { text: 'Eat lunch' }
    // ).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne(
    //     { text: 'Eat lunch' }
    // ).then((result) => {
    //     console.log(result);
    // })

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({
        completed: false
        // Use objectId for ID
    }).then((result) => {
        console.log(result);
    })

    // Close the connection
    db.close();
});