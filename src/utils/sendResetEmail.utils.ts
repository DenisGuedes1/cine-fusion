import { createTransport } from "nodemailer";
import { IemailRequest } from "../interface/interfaceProducts";
import { AppError } from "../error/handleError";
import Mailgen from "mailgen";
class EmailService {
    async sendEmail({ to, subject, text }: IemailRequest) {
        const transporter = createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter
            .sendMail({
                from: "resetp564@gmail.com",
                to,
                subject,
                html: text,
            })
            .then(() => {
                console.log("email send");
            })
            .catch((err) => {
                console.log(err);
                throw new AppError("Error sending email", 500);
            });
    }

    resetPasswordTemplate(
        userName: string,
        userEmail: string,
        resetToken: string
    ) {
        const mailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Esqueceu a senha né? Calma que ja vinhemos te ajudar ",
                link: "http://localhost:3000/store/reset-password",
            },
        });
        const email = {
            body: {
                name: userName,
                intro: "Voce está recebendo este email devido a uma soliçitção de recuperação de senha, caso não tenha solicitado, basta ignorar e notificar nossa central.",
                action: {
                    instructions:
                        "Click no botão pra que seja feita a alteração da sua senha:",
                    button: {
                        color: "#DC4D2F",
                        text: "Alteração de senha store",
                        link: `http://localhost:3000/reset-password/${resetToken}`, //passar link do front
                    },
                },
                outro: "if you did not request a password reset.",
            },
        };
        const emailBody = mailGenerator.generate(email);
        const emailTemplate = {
            to: userEmail,
            subject: "Alteração de senha de acesso.",
            text: emailBody,
        };
        return emailTemplate;
    }
}
const emailService = new EmailService();

export { emailService };
