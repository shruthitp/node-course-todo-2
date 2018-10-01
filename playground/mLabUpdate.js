//const MongoClient = require('mongodb').MongoClient;

const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://todoapp2:todoapp2@ds151180.mlab.com:51180/todoapp', (err, client) => {
    if (err) {
        console.log(err);
        return console.log('Unable to Connect to MLab server');
    }
    console.log("Connected to MLab");

    const db = client.db('todoapp');


    //findOneAndUpdate

    // db.collection('todos2').findOneAndUpdate({
    //     _id : new ObjectId('5bb0d28ce7179a358dc27824')

    // },{
    //     $set : {
    //         completed : false
    //     }

    // },{
    //     returnOriginal : false
    // }).then( (result) =>{
    //     console.log(result);
    // });


    db.collection('users2').findOneAndUpdate({
        _id : new ObjectId('5bb0d564e7179a358dc27899')

    },{
        $set : {
            name : 'Shruthi'
        },
        $inc:{
            age : -950
        }

    },{
        returnOriginal : false
    }).then( (result) =>{
        console.log(result);
    });

   // client.close();
})