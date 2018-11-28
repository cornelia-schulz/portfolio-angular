const path = require('path')
const express = require('express')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')
const nodemailerRoutes = require('./nodemailer')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/dist/portfolio-angular')))

const port = process.env.PORT || 3000

const server = http.createServer(app)

app.use('/api/v1/nodemailer', nodemailerRoutes)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname))
})

app.get('/.well-known/acme-challenge/:content', function (req, res) {
  res.send('rY_88f687JJEhTxbarkFS2ZRLiVLRBmtgLiYvT6LI30.wlEH0QKgIRQuxZKVbcgPdnJ6goOSGYJ4MKRymM8d9Rs')
})

server.listen(port, () => {
  console.log('Server is listening on port: ', port)
})

module.exports = app
