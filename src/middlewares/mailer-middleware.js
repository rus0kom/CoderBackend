import { createTransport } from "nodemailer";
import { MAILER_MAIL, MAILER_PASS } from "../config/config.js";

async function mailer(obj) {

    const html = `
        <ul style="list-style-type: none;">
            <li><b>Username:</b> ${obj.username}</li>
            <li><b>Name:</b> ${obj.name}</li>
            <li><b>Address:</b> ${obj.address}</li>
            <li><b>Age:</b> ${obj.age}</li>
            <li><b>Phone:</b> ${obj.phone}</li>
            <li>
                <img src="${obj.image}">
            </li>
        </ul>
    `;

    const transporter = createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: MAILER_MAIL,
            pass: MAILER_PASS
        }
    });
    
    const info = await transporter.sendMail({
        from: "Servidor",
        to: MAILER_MAIL,
        subject: "Nuevo registro",
        html
    })
}

export default mailer;