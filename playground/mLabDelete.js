//const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://todoapp2:todoapp2@ds151180.mlab.com:51180/todoapp', (err, client) => {
    if (err) {
        console.log(err);
        return console.log('Unable to Connect to MLab server');
    }
    console.log("Connected to MLab");

    const db = client.db('todoapp');

    //deleteMany
    // db.collection('todos2').deleteMany({
    //     text : 'Something to do'
    // })
    // .then((res) =>{
    //     console.log(res);
    // })

    //deleteOne

    // db.collection('todos2').deleteOne({
    //     text : 'Eat the icecream'
    // })
    // .then((res) =>{
    //     console.log(res);
    // })

    //findOneAndDelete


    // db.collection('todos2').findOneAndDelete({
    //     text : 'Eat the icecream'
    // })
    // .then((res) =>{
    //     console.log(res);
    // });

    db.collection('users2').deleteMany({
        name : 'Shruthi'
    })
    .then((res) =>{
        console.log(res);
    });

    db.collection('users2').findOneAndDelete({
        _id : new ObjectId('5bb0d445e7179a358dc27871')
    })
    .then((res) =>{
        console.log(res);
    });



   // client.close();
})