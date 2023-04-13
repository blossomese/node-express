// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID()
console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log(`Unable to connect to database`);
    }
   const db = client.db(databaseName)
   db.collection('users').insertOne({
    name: 'Blossom',
    age: 17
   }, (error, result) => {
 if (error) {
    return console.log(`Unable to insert user`);
 }
 console.log(result.ops);
   })

db.collection('users').insertMany([
 {
  name: 'Jane',
  age: 27
}, {
  name: 'Page',
  age: 10
}
], (error, result) => {
 if(error){
  return console.log(`Unable to insert user`);
 }
 console.log(result.ops);
})

db.collection('tasks').insertMany([
  {
    name: 'Happy Times',
    description: 'These are the best times',
    completed: true
  },   {
    name: "Leader",
    description: 'Love Letter',
    completed: false 
  },   {
    name: "Joyful",
    description: 'Love Letter',
    completed: true
  }, 
], (error, result)=>{
if(error){
  console.log(`Unable to insert tasks!`);
}
console.log(result.ops);
})
});
