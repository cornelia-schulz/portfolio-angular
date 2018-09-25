const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')

const email = process.env.USER_EMAIL
const pw = process.env.USER_EMAIL_PASSWORD
const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const refreshToken = process.env.REFRESH_TOKEN
const accessToken = process.env.ACCESS_TOKEN

let transport = {
  host: 'smtp.gmail.com',
  service: 'gmail',
  auth: {
    user: email,
    pass: pw
  }
}

// let transport = {
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     type: 'OAuth2',
//     user: email,
//     clientId: clientID,
//     clientSecret: clientSecret,
//     refreshToken: refreshToken,
//     accessToken: accessToken
//   }
// }

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})

router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n message: ${message}`

  const mail = {
    from: name,
    to: 'cornelia.schulz.photography@gmail.com',
    subject: 'Mail from Portfolio',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: err.message
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router
