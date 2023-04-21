export const OrganizationSeo = () => {
	const getData = () => {
		return {
			__html: JSON.stringify({
				'@context': 'http://schema.org',
				'@type': 'Organization',
				name: 'Inoxiesoft',
				url: 'https://www.inoxiesoft.com',
				logo: 'https://www.inoxiesoft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finoxie-black-transparent.1476b534.png&w=3840&q=75',
				foundingDate: '2020',
				description:
					'We are developing custom software applications, sas, modern websites, databases, backend systems, VR applications development, games. Our team provide also IT consulting and Business Design, tech NET, C#, React, SQL - Inoxiesoft Software House',
				sameAs: [SocialLinks.FACEBOOK, SocialLinks.LINKEDIN],
				contactPoint: {
					'@type': 'ContactPoint',
					contactType: 'customer support',
					telephone: '+48798943352',
					email: 'm.kamieniak@inoxiesoft.com'
				},
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'Kolejowa 14',
					addressLocality: 'Chróscina',
					postalCode: '46-073',
					addressCountry: 'Poland'
				}
			})
		};
	};

	return (
		<>
			<script type='application/ld+json' dangerouslySetInnerHTML={getData()} key='organization-jsonld' />
		</>
	);
};

export enum SocialLinks {
	FACEBOOK = 'https://www.facebook.com/Inoxiesoft-104119575667227',
	LINKEDIN = 'https://www.linkedin.com/company/inoxiesoft'
}
