var express = require('express');
var bodyParser  = require('body-parser');

var { mongoose } = require('./db/mongoose.js');

var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app =  express();

app.use(bodyParser.json());

app.post('/todos',(req,res) =>{
    var newTodo = new Todo({
        text : req.body.text
    });

    newTodo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });

});


app.get('/todos',(req,res)=>{
    Todo.find().then((doc)=>{
        res.send({ todos : doc})
    },(e) =>{
        res.status(400).send(e);
    })
})

app.listen(3000, () =>{
    console.log('Started server @3000');
})