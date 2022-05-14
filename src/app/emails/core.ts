import { config } from "dotenv";
import nodemailer from "nodemailer";

interface SendEmailType {
    email: string;
    name: string;
    id: string;
}

const {
    SMTP_USER,
    SMTP_PASSWORD,
    SMTP_HOST,
    SMTP_PORT
}: any = process.env;


export default async (data: SendEmailType) => {
    const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: false,
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD
        }
    });

    await transporter.sendMail({
        cc: data.name,
        from: "No reply <no-reply@alisson.com>",
        to: data.email,
        subject: 'esqueceu a senha?',
        html: `<p>teste<br>${data.id}</p>`
    })
};
