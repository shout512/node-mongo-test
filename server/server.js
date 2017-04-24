var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {Parse} = require('./models/parse');
const {ObjectID} = require('mongodb');


var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/parseObject', (req, res) => {
  var parse = new Parse({
    parseObject: req.body
  });

  parse.save().then((parseObject) => {
    res.send(parseObject);
  }, (e) => {
    res.status(400).send();
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos
    })
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req,res) => {
  var id = req.params.id
  if(!ObjectID.isValid(id)){
    return res.send('Id is wrongly formatted');
  }

Todo.findById(id).then((todo) => {
if (!todo) {
    return res.status(404).send(`Unable to find the object with id ${id}`);
}
  res.send(todo);
}, (e) => {
  res.status(400).send();
});


});


app.listen(port, () => {
  console.log(`Up and running on port "${port}"`);
});

module.exports = {app};
