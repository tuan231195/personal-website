require('dotenv').config();
import { contactSchema } from '~/schemas/contact';
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
import * as createError from 'http-errors';

exports.handler = async (event) => {
	try {
		const body: any = await validateInput(event.body);
		const msg = {
			to: 'admin@vdtn359.com',
			from: 'support@vdtn359.com',
			subject: body.subject,
			text: getSupportEmail(body),
		};
		await sgMail.send(msg);
		return {
			statusCode: 200,
			body: 'Success',
		};
	} catch (e) {
		console.log(e);
		const status = e.status || 500;

		return {
			statusCode: status,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				error: status === 500 ? 'Internal server error' : e.message,
			}),
		};
	}
};

async function validateInput(body) {
	try {
		return await contactSchema.validate(JSON.parse(body), {
			abortEarly: true,
		});
	} catch (e) {
		throw new createError.BadRequest(e.errors && e.errors[0], {
			expose: false,
		});
	}
}

function getSupportEmail(body) {
	return `From: ${body.name}
Email: ${body.email}
Enquiry: ${body.enquiry}`;
}
