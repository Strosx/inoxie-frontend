export const sendContact = (data: ContactFormData): Promise<Response> => {
	const formattedData = {
		service_id: 'service_4o6b9ji',
		template_id: 'template_hooe0ul',
		user_id: '1YA-k9W8QT6kaytqs',
		accessToken: 'qO4tn9eqDgoZrky5a4Ziq',
		template_params: {
			from_name: `${data.firstName} ${data.lastName}`,
			from_email: data.email,
			message: data.description
		}
	};

	return fetch('https://api.emailjs.com/api/v1.0/email/send', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formattedData)
	});
};

export type ContactFormData = {
	email: string;
	firstName: string;
	lastName: string;
	description: string;
};
