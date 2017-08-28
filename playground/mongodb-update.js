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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("59a40036f5df38e7d0ca9862")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("59a1e1a44f27e23508dfa912")
    }, {
        $set: {
            name: "An Đẹp Trai"
        },
        $inc: {
            age: 3
        }
    }, {
        returnOriginal: false
    }, (result) => {
        console.log(result);
    })

    // Close the connection
    db.close();
});