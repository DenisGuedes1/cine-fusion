"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = void 0;
const nodemailer_1 = require("nodemailer");
const handleError_1 = require("../error/handleError");
const mailgen_1 = __importDefault(require("mailgen"));
class EmailService {
    sendEmail({ to, subject, text }) {
        return __awaiter(this, void 0, void 0, function* () {
            const transporter = (0, nodemailer_1.createTransport)({
                host: "smtp.gmail.com",
                port: 587,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });
            yield transporter
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
                throw new handleError_1.AppError("Error sending email", 500);
            });
        });
    }
    resetPasswordTemplate(userName, userEmail, resetToken) {
        const mailGenerator = new mailgen_1.default({
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
                    instructions: "Click no botão pra que seja feita a alteração da sua senha:",
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
exports.emailService = emailService;
