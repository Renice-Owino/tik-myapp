## Backend API using ExpressJS


### Basic route setup

Replace **METHOD** with a CRUD method ``get, put, post, delete``

```js
app.METHOD(route, function(req, res){
    // logic goes here
})
```
```js
// Respond with Hello World! on the homepage:
app.get('/', function (req, res) {
  res.send('Hello World!')
})
// Respond to POST request on the root route (/), the application’s home page:

app.post('/', function (req, res) {
  res.send('Got a POST request')
})
// Respond to a PUT request to the root route (/):

app.put('/:id', function (req, res) {
  res.send('Got a PUT request using and id')
})
// Respond to a DELETE request to the root route (/):

app.delete('/:id', function (req, res) {
  res.send('Got a DELETE request for a user')
})
```

### server files config
```sh
mkdir myapp
cd myapp

yarn init
yarn add express
touch app.js
```

add the following code to the ``app.js`` file
```js
const express = require('express')
const app = express()
const port = 3000

// simple route
app.get('/', (req, res) => res.send('Hello World!'))

// start a server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```
run the following command in your terminal and open [http://localhost:3000](http://localhost:3000) in your browser

```shell
node app.js
```

### lets make the SERVER file better
###
###
