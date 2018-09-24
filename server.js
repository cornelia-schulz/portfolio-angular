const path = require('path')
const express = require('express')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/dist/portfolio-angular')))

const port = process.env.PORT || 3000

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname))
})

const server = http.createServer(app)

server.listen(port, () => {
  console.log('Server is listening on port: ', port)
})

module.exports = app
