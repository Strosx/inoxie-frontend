import Head from 'next/head';

export const HomePageSeo = (): JSX.Element => {
	function addOrganizationJsonLd() {
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
					streetAddress: 'Mieszczańska 11/17',
					addressLocality: 'Wroclaw',
					postalCode: '50-201',
					addressCountry: 'Poland'
				}
			})
		};
	}

	return (
		<>
			<Head>
				<title>Custom Software Development Company | Inoxiesoft - Your Partner in Innovation</title>
				<meta
					name='description'
					key='description'
					content='Looking for a reliable custom software development company? Inoxiesoft is your partner in innovation, offering expert software development services tailored to your unique needs. Contact us today to bring your ideas to life with our top-notch software solutions.'
				/>

				<script type='application/ld+json' dangerouslySetInnerHTML={addOrganizationJsonLd()} key='organization-jsonld' />

				<link rel='alternate' hrefLang='en' href='https://www.inoxiesoft.com/en-US' />
				<link rel='canonical' href={'https://www.inoxiesoft.com'} />
			</Head>
		</>
	);
};

export enum SocialLinks {
	FACEBOOK = 'https://www.facebook.com/Inoxiesoft-104119575667227',
	LINKEDIN = 'https://www.linkedin.com/company/inoxiesoft'
}
