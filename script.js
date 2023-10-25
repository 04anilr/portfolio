let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "anilr5364@gmail.com",
    Password: "Anil@123",
    To: 'anil.vn5364@gmail.com',
    From: document.getElementById("email").value,
    Subject: "new contact form Enquiry",
    Body: "Name: " + document.getElementById("name").value
      + "<br> Email:" + document.getElementById("email").value
      + "<br> message:" + document.getElementById("message").value
  }).then(
    message => alert(message)
  );
};
// const express = require('express');
// const nodemailer = require('nodemailer');
// const path = require('path');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files (HTML, CSS, JavaScript)
// app.use(express.static(path.join(__dirname, 'public')));

// // Parse JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Contact form submission route
// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   // Configure a nodemailer transporter for sending email
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'your-email@gmail.com',
//       pass: 'your-email-password',
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'recipient-email@example.com',
//     subject: `Contact form submission from ${name}`,
//     text: message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error sending email.' });
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.json({ message: 'Email sent successfully.' });
//     }
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
