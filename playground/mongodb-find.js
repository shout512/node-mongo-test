// const MongoClient = require('mongodb').MongoClient ;

const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('58fb75011c47ff4080e5b15c')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(` ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

db.collection('Users').find({name: 'leo'}).count().then((count) => {
  console.log(count);
}, (err) => {
  console.log('Unable to find', err);
})

  // db.close();
});
