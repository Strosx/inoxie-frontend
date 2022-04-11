export const GASendFormData = (data: GoogleFormData) => {
	gtag('event', 'contact_form', {
		description: JSON.stringify(data)
	});
};

export type GoogleFormData = {
	email: string;
	firstName: string;
	lastName: string;
	description: string;
};
