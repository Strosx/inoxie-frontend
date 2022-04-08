import SoftflixHome from 'public/images/projects/softflix/softflix-home.png';
import SoftflixLogo from 'public/images/projects/softflix/softflix-logo.png';
import SkillsiveHome from 'public/images/projects/skillsive/skillsive-home.png';
import SkillsiveLogo from 'public/images/projects/skillsive/skillsive-logo.png';

export const useProjectData = (project: ProjectType): ProjectData => {
	switch (project) {
		case 'softflix':
			return {
				name: 'Softflix',
				description:
					'Digital selling platform, designed and developed by Inoxie. System is integrated with distributors APIs, Zoho CRM, Zoho Books, TawkTo chatbot, IGDB products API, PayPal, Stripe payment gateways and many more. Built as fully responsible multi-platform application with React, Next.js, ASP.NET Core and SQL Server.',
				img: SoftflixHome,
				link: 'https://www.softflix.com',
				logo: SoftflixLogo
			};
		case 'skillsive':
			return {
				name: 'Skillsive',
				description:
					'Digital selling platform, designed and developed by Inoxie. System is integrated with distributors APIs, Zoho CRM, Zoho Books, TawkTo chatbot, IGDB products API, PayPal, Stripe payment gateways and many more. Built as fully responsible multi-platform application with React, Next.js, ASP.NET Core and SQL Server.',
				img: SkillsiveHome,
				link: 'https://www.skillsive.com',
				logo: SkillsiveLogo
			};
		default:
			break;
	}
};

export type ProjectType = 'softflix' | 'skillsive';

type ProjectData = {
	name: string;
	description: string;
	img: StaticImageData;
	link?: string;
	logo?: StaticImageData;
};
