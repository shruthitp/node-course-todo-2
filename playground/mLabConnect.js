const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://todoapp2:todoapp2@ds151180.mlab.com:51180/todoapp', (err,client )=>{
    if(err){
        console.log(err);
        return console.log('Unable to Connect to MLab server');
    }
    console.log("Connected to MLab");
    const db = client.db('todoapp');
    // db.collection('todos2').insertOne({
    //     text:'Something to do',
    //     completed: false
    // },(err,result) =>{
    //     if(err){
    //         return console.log('Unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    db.collection('users2').insertOne({
        name : 'Shruthi',
        email: 'abc@gmail.com',
        age : 1000
    },(err,result) =>{
        if(err){
            return console.log('Unable to insert todo',err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });

    client.close();
})