// /* eslint-disable */
// const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//     host: "http://localhost:5000",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//         user: '', // generated ethereal user
//         pass: '', // generated ethereal password
//     },
// })

// // let message = {
// //     from: "francisalexander000@gmail.com",
// //     to: "francislegendokon@gmail.com",
// //     subject: "testing doki",
// //     text: "Plaintext version of the message",
// //     html: "<p>HTML version of the message</p>"
// // };
// let message = {
//     from: 'francisalexander000@gmail.com', // sender address
//     to: "francislegendokon000@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
// }

// // host: "smtp.example.com",
// //     port: 587,
// //         secure: false, // upgrade later with STARTTLS
// //             auth: {
// //     user: "username",
// //         pass: "password",
// //     },



// export default function sendMail() {
//     transporter.sendMail(message, (err) => {
//         if(err){
//             console.log(err)
//         }else{
//             console.log('email has sent')
//         }
//     })
//     // verify connection configuration

//     // send mail with defined transport object
//     // let info = transporter.sendMail(message);

//     // transporter.verify(function (error: any, success) {
//     //     if (error) {
//     //         console.log(error);
//     //     } else {
//     //         console.log("Server is ready to take our messages");
//     //     }
//     // });

//     // console.log(nodemailer)
// }


// // let testAccount = await nodemailer.createTestAccount();

// // create reusable transporter object using the default SMTP transport
// // let transporter = nodemailer.createTransport({
// //     host: "http://localhost:5000/waitlist",
// //     port: 587,
// //     secure: false, // true for 465, false for other ports
// //     auth: {
// //         user: 'f', // generated ethereal user
// //         pass: '', // generated ethereal password
// //     },
// // });

// // send mail with defined transport object
// // let info = transporter.sendMail({
// //     from: '', // sender address
// //     to: "", // list of receivers
// //     subject: "Hello ✔", // Subject line
// //     text: "Hello world?", // plain text body
// //     html: "<b>Hello world?</b>", // html body
// // });

// // console.log("Message sent: %s", info.messageId);
// // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // // Preview only available when sending through an Ethereal account
// // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...