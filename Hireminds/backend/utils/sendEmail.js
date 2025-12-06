import nodeMailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_MAIL:", process.env.SMTP_MAIL);

    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",     // FIXED
        port: 465,                  // FIXED
        secure: true,               // REQUIRED for port 465
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });

    const options = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject,
        text: message,
    };

    await transporter.sendMail(options);
};
