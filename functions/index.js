const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

var mailjet = require ('node-mailjet')
    .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
var request = mailjet
    .post("send")
    .request({
        "FromEmail":"pilot@mailjet.com",
        "FromName":"Mailjet Pilot",
        "Subject":"Your email flight plan!",
        "Text-part":"Dear passenger, welcome to Mailjet! May the delivery force be with you!",
        "Html-part":"<h3>Dear passenger, welcome to Mailjet!</h3><br />May the delivery force be with you!",
        "Recipients":[
                {
                        "Email": "passenger@mailjet.com"
                }
        ]
    });
request
    .on('success', function (response, body) {
        console.log (response.statusCode, body);
    })
    .on('error', function (err, response) {
        console.log (response.statusCode, err);
    });