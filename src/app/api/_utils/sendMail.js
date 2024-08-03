import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "sofezzacore@gmail.com",
      pass: "ziebpvcmmnnlrxxl",
    },
  });

const sendMail = async (to, subject, html, attachments = []) => {
    try {
        await transporter.sendMail({
            from: 'Sofezza Core <sofezzacore@gmail.com>',
            to,
            html,
            subject,
            attachments
        })
        
    } catch (error) {
        console.log(error.message);
        
    }
}

export default sendMail;