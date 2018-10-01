const { ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User} = require('./../server/models/user');

// var id = '5bb1e7e01d8a44049000302222';

// if(!ObjectID.isValid(id)){
//     console.log('id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todo) =>{
//     console.log('Todos',todo);
// });

// Todo.findOne({
//     completed: false
// }).then((todo) =>{
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) =>{
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo 2', todo);
// }).catch((e) => console.log(e));

User.findById('6bb1c6b23575882b40e8131399').then((user) =>{
    if(!user){
        return console.log('User not found');
    }
    console.log('User', user);
}).catch((e)=> console.log('Error',e));
