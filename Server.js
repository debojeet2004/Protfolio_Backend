
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
// const PORT = 8000;
const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.APP_PASSWORD
}
});

app.post('/send', (req, res) => {
const { name, email, message } = req.body;

const mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: `A Message from ${name}`,
    text: message,
    replyTo: email
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully');
});
});

app.get('/ping', (req, res) => {
res.send('pong');
})

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT} 😃`);
});


// BMBA9UCSBSV1627ZKHKQF7T4  If you lose your phone, or don’t have access to your verification device, this code is your failsafe to access your account.

// Recovery code of sendgrid







// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// const sgMail = require('@sendgrid/mail');




// const app = express();
// const PORT = 8000;
// // const PORT = process.env.PORT || 5000;
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);


// app.use(cors());
// app.use(bodyParser.json());



// app.post('/send', (req, res) => {
//     const { name, email, message } = req.body;

//     const msg = {
//         to: 'debojeetkarmakar2020@gmail.com', // Your email address
//         from: email, // User's email address
//         subject: `New message from ${name}`,
//         text: message,
//     };

//     sgMail
//         .send(msg)
//         .then(() => {
//         res.status(200).send('Message sent successfully');
//         })
//         .catch((error) => {
//         console.error(error);
//         res.status(500).send(error.toString());
//     });
// });

// app.listen(PORT, () => {
// console.log(`Server is running on port ${PORT} 😃`);
// });



// // BMBA9UCSBSV1627ZKHKQF7T4  If you lose your phone, or don’t have access to your verification device, this code is your failsafe to access your account.

// // Recovery code of sendgrid