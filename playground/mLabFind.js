const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://todoapp2:todoapp2@ds151180.mlab.com:51180/todoapp', (err, client) => {
    if (err) {
        console.log(err);
        return console.log('Unable to Connect to MLab server');
    }
    console.log("Connected to MLab");

    const db = client.db('todoapp');
    // db.collection('todos2').find({
    //     completed : false
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log(err);
    // });


    // db.collection('todos2').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
        
    // }, (err) => {
    //     console.log(err);
    // })

    db.collection('users2').find({
        name :'Shruthii'
    }).toArray().then((doc) => {
        console.log(`Todos count: ${doc}`);
        console.log(JSON.stringify(doc,undefined,2))
        
    }, (err) => {
        console.log(err);
    })

   // client.close();
})