import nodemailer from "nodemailer";

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
	secure: true,
	host: "smtp.gmail.com",
	port: 465,
	auth: {
		user,
		pass,
	},
});

export default defineEventHandler(async (event) => {
	const { subject, html } = await readBody(event);

	await transporter.sendMail({
		from: `"WEBSITE EMAIL" ${user}`,
		to: user,
		subject: `[New Email From Your Website]: ${subject}`,
		html,
	});
});
