const path = require('path')
const express = require('express')
const http = require('http')
const app = express()
const bodyParser = require('body-parser')
const nodemailerRoutes = require('./nodemailer')
// const nodemailer = require('nodemailer')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/dist/portfolio-angular')))

const port = process.env.PORT || 3000

const server = http.createServer(app)

app.use('api/v1/nodemailer', nodemailerRoutes)
// router.post('./send', function (req, res) {
    // let transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     service: 'gmail',
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: 'firzhugh@gmail.com',
    //         pass: 'cdkambwkkfjdxkse'
    //     }
    // })

    // transporter.verify((error, success) => {
    //     if(error) {
    //       console.log(error)
    //     } else {
    //       console.log('Server is ready to take messages')
    //     }
    //   })
    
    // const data = req.body

    // let mailOptions = {
    //     from: data.email,
    //     to: 'firzhugh@gmail.com',
    //     subject: 'Portfolio enquiry from ' + data.name,
    //     text: data.message
    // }

    // transporter.sendMail(mailOptions, (error, data) => {
    //     if (error) {
    //         res.json({
    //             msg: error.message
    //         })
    //     } else {
    //         res.json({
    //             msg: 'Email sent'
    //         })
    //     }
    // })
// })

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname))
  })

server.listen(port, () => {
  console.log('Server is listening on port: ', port)
})

module.exports = app