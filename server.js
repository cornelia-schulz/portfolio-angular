// const path = require('path')
const express = require('express')
const server = express()
const bodyParser = require('body-parser')
server.use(bodyParser.json())

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log('Server is listening on port: ', port)
})

server.route('/api/portfolio').get((req, res) => {
  res.send(
    'hello'
  )
})

module.exports = server
