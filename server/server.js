var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose.js');

var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text
    });

    newTodo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});


app.get('/todos', (req, res) => {
    Todo.find().then((doc) => {
        res.send({ todos: doc })
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    //console.log(id);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({
            todo
        });
    }).catch((e) => res.status(400).send());
});

app.delete('/todos/:id', (req,res) =>{

    var id = req.params.id;
    console.log(id);
    if (!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) =>{
        if(!todo){
            return  res.status(404).send();
        }
        console.log(todo);
        res.send(todo);
    })
    .catch((e) =>{
        console.log(e);
        res.status(400).send();
    })
})

app.listen(port, () => {
    console.log(`Started server port - ${port}`);
});