const express = require('express')
const bodyParser = require('body-parser')
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const app = express()
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const adapter = new FileAsync('db.json')
low(adapter)
  .then(db => {
    // GET users
    app.get('/users', (req, res) => {
      const users = db.get('users')
        .value()

      res.send(users)
    })

    // POST user
    app.post('/users', (req, res) => {
      db.get('users')
        .push(req.body)
        .last()
        .assign({ id: Date.now().toString() })
        .write()
        .then(post => res.send(post))
    })

    // UPDATE/DELETE user
    app.post('/users/:id', (req, res) => {
      let users = []
      if (req.body.id) {
        users = db.get('users')
          .find({ id: req.params.id })
          .assign(req.body)
          .write()
      } else {
        users = db.get('users')
          .remove({ id: req.params.id })
          .write()
      }

      res.send(users);
    })
  })
  .then(() => {
    app.listen(2000, () => console.log('listening on port 2000'))
  })
