import SoftflixHome from 'public/images/projects/softflix/softflix-home.png';
import SoftflixLogo from 'public/images/projects/softflix/softflix-logo.png';
import SkillsiveHome from 'public/images/projects/skillsive/skillsive-home.png';
import SkillsiveLogo from 'public/images/projects/skillsive/skillsive-logo.png';
import TaHome from 'public/images/projects/tradeanalytics/ta-home.png';
import TaLogo from 'public/images/projects/tradeanalytics/ta-logo.png';
import EyGVRTHome from 'public/images/projects/ey-gvrt/ey-gvrt-home.png';
import EyLogo from 'public/images/projects/ey-gvrt/ey-logo.png';
import KolejoweHome from 'public/images/projects/kolejoweABC/home.jpg';
import KolejoweLogo from 'public/images/projects/kolejoweABC/logo.jpg';
import FrankensteinLogo from 'public/images/projects/frankenstein/logo.jpg';
import FrankensteinHome from 'public/images/projects/frankenstein/home.jpg';

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
		case 'eygvrt':
			return {
				name: 'EY Global Vat Reporting Tool',
				description:
					'Digital selling platform, designed and developed by Inoxie. System is integrated with distributors APIs, Zoho CRM, Zoho Books, TawkTo chatbot, IGDB products API, PayPal, Stripe payment gateways and many more. Built as fully responsible multi-platform application with React, Next.js, ASP.NET Core and SQL Server.',
				img: EyGVRTHome,
				link: 'https://www.ey.com/en_pl/tax/global-vat-reporting-tool',
				logo: EyLogo
			};
		case 'tradeanalytics':
			return {
				name: 'Trade Analytics',
				description:
					'Digital selling platform, designed and developed by Inoxie. System is integrated with distributors APIs, Zoho CRM, Zoho Books, TawkTo chatbot, IGDB products API, PayPal, Stripe payment gateways and many more. Built as fully responsible multi-platform application with React, Next.js, ASP.NET Core and SQL Server.',
				img: TaHome,
				link: 'https://allegro.pl/moje-allegro/sprzedaz/allegro-analytics/o-narzedziu',
				logo: TaLogo
			};
		case 'kolejoweABC':
			return {
				name: 'Kolejowe ABC',
				description:
					'Digital selling platform, designed and developed by Inoxie. System is integrated with distributors APIs, Zoho CRM, Zoho Books, TawkTo chatbot, IGDB products API, PayPal, Stripe payment gateways and many more. Built as fully responsible multi-platform application with React, Next.js, ASP.NET Core and SQL Server.',
				img: KolejoweHome,
				link: 'https://kolejoweabc.pl/ABC/aktualnosci/730-podrozuj-z-edukacyjna-gra-kolejowe-abc?fbclid=IwAR2Th4ELEP41p6MXTRqCKe_wXX-akpHBBDAIP4lcgQJOR-rVC0iJB-HW3mI',
				logo: KolejoweLogo
			};
		case 'frankenstein':
			return {
				name: 'Frankenstein: Beyond the Time',
				description:
					'Digital selling platform, designed and developed by Inoxie. System is integrated with distributors APIs, Zoho CRM, Zoho Books, TawkTo chatbot, IGDB products API, PayPal, Stripe payment gateways and many more. Built as fully responsible multi-platform application with React, Next.js, ASP.NET Core and SQL Server.',
				img: FrankensteinHome,
				link: 'https://store.steampowered.com/app/863380/Frankenstein_Beyond_the_Time',
				logo: FrankensteinLogo
			};
		default:
			break;
	}
};

export type ProjectType = 'softflix' | 'skillsive' | 'eygvrt' | 'tradeanalytics' | 'kolejoweABC' | 'frankenstein';

type ProjectData = {
	name: string;
	description: string;
	img: StaticImageData;
	link?: string;
	logo?: StaticImageData;
};
