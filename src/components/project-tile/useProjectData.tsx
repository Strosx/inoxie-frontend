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
import CryptoHome from 'public/images/projects/cryptogambling/home.png';
import BhpAppsHome from 'public/images/projects/bhpvrapps/home.png';
import { ReactNode } from 'react';
import Image from 'next/image';
import NetLogo from 'public/images/logos/net-logo.png';
import NextJsLogo from 'public/images/logos/next-js-logo.png';
import AzureLogo from 'public/images/logos/azure-logo.png';
import ReactLogo from 'public/images/logos/react-logo.png';
import UnityLogo from 'public/images/logos/unity-logo.png';
import ZohoLogo from 'public/images/logos/zoho-logo.png';
import DevopsLogo from 'public/images/logos/devops-logo.png';
import InoxieLogo from 'public/images/logos/inoxie-black-transparent-square.png';

import styled from '@emotion/styled';

const TechContainer = styled.div`
	display: flex;
	flex-direction: row;

	> * {
		margin-right: 10px !important;
	}
`;

export const useProjectData = (project: ProjectType): ProjectData => {
	switch (project) {
		case 'softflix':
			return {
				name: 'Softflix',
				description:
					'Digital selling platform, designed and developed by Inoxie. System is integrated with distributors APIs, Zoho CRM, Zoho Books, TawkTo chatbot, IGDB products API, PayPal, Stripe payment gateways and many more. Built as fully responsible multi-platform application with React, Next.js, ASP.NET Core and SQL Server.',
				img: SoftflixHome,
				link: 'https://www.softflix.com',
				logo: SoftflixLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} />
						<Image src={AzureLogo} width={60} height={30} />
						<Image src={ReactLogo} width={60} height={30} />
						<Image src={NextJsLogo} width={60} height={30} />
						<Image src={ZohoLogo} width={50} height={30} />
						<Image src={DevopsLogo} width={75} height={30} />
					</TechContainer>
				)
			};
		case 'skillsive':
			return {
				name: 'Skillsive',
				description:
					'Digital platform for virtual reality trainings, which includes a web application, API and SDK for Unity. The web application consists of admin panel (customer management), dev panel (course configuration) and client panel (results preview). In this application, we used WebSockets which allowed remote control of VR applications from the client panel level.',
				img: SkillsiveHome,
				link: 'https://www.skillsive.com',
				logo: SkillsiveLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} />
						<Image src={AzureLogo} width={60} height={30} />
						<Image src={ReactLogo} width={60} height={30} />
						<Image src={NextJsLogo} width={60} height={30} />
						<Image src={DevopsLogo} width={75} height={30} />
						<Image src={UnityLogo} width={50} height={30} />
					</TechContainer>
				)
			};
		case 'eygvrt':
			return {
				name: 'EY Global Vat Reporting Tool',
				description:
					'We took part in development of Global Vat Reporting Tool for EY GDS Poland. This application was made to calculate tax declarations for big, worldwide corporations. Application was integrated with Azure Cosmos Database, Vies VAT number validation system and many more. Developed with ASP.NET Core and React on frontend.',
				img: EyGVRTHome,
				link: 'https://www.ey.com/en_pl/tax/global-vat-reporting-tool',
				logo: EyLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} />
						<Image src={AzureLogo} width={60} height={30} />
						<Image src={ReactLogo} width={60} height={30} />
						<Image src={DevopsLogo} width={75} height={30} />
					</TechContainer>
				)
			};
		case 'tradeanalytics':
			return {
				name: 'Trade Analytics',
				description:
					'Our developers were part of a development team of TradeAnalytics.pl (while working in Ceneo.pl). Main goal of project was to allow Allegro seller to analise their sales on different kind of charts and summary tables. We used ElasticSearch to store data, ASP.NET Core for backend login and Angular.',
				img: TaHome,
				link: 'https://allegro.pl/moje-allegro/sprzedaz/allegro-analytics/o-narzedziu',
				logo: TaLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} />
						<Image src={AzureLogo} width={60} height={30} />
						<Image src={ReactLogo} width={60} height={30} />
						<Image src={DevopsLogo} width={75} height={30} />
					</TechContainer>
				)
			};
		case 'kolejoweABC':
			return {
				name: 'Kolejowe ABC',
				description:
					'A series of mini-games commissioned by the Office of Rail Transportation. All games were created on the Unity engine and adapted to the Android and IOS mobile platforms. The applications in an easy and fun way teach children the rules of safety and proper behavior on railway areas.',
				img: KolejoweHome,
				link: 'https://kolejoweabc.pl/ABC/aktualnosci/730-podrozuj-z-edukacyjna-gra-kolejowe-abc?fbclid=IwAR2Th4ELEP41p6MXTRqCKe_wXX-akpHBBDAIP4lcgQJOR-rVC0iJB-HW3mI',
				logo: KolejoweLogo,
				tech: (
					<TechContainer>
						<Image src={UnityLogo} width={50} height={30} />
					</TechContainer>
				)
			};
		case 'frankenstein':
			return {
				name: 'Frankenstein: Beyond the Time',
				description:
					'High-quality graphics, multiplatform VR game created on Unity game engine. The game has been adapted to all the most popular VR devices at that time, such as HTC Vive, Oculus Rift, PSVR. Part of our team participated in developing the features and optimization this game.',
				img: FrankensteinHome,
				link: 'https://store.steampowered.com/app/863380/Frankenstein_Beyond_the_Time',
				logo: FrankensteinLogo,
				tech: (
					<TechContainer>
						<Image src={UnityLogo} width={50} height={30} />
					</TechContainer>
				)
			};
		case 'cryptogambling':
			return {
				name: 'Crypto Casino',
				description:
					'Application for cryptocurrency lottery, customers could register, add funds by blockchain payment and join jackpot lotery. Technologies used React, ASP.NET Core, MS SQL Server, Azure Cloud. Unfortunatly application never started, client decided to abandon project.',
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} />
						<Image src={AzureLogo} width={60} height={30} />
						<Image src={ReactLogo} width={60} height={30} />
						<Image src={DevopsLogo} width={75} height={30} />
					</TechContainer>
				),
				img: CryptoHome,
				logo: InoxieLogo
			};
		case 'bhpapps':
			return {
				name: 'Skillsive SDK and VR Training Apps',
				description:
					'The SDK was created with two things in mind: networking and VR features. Networking is an API connection that allows you to receive and send data to SQL Server and Azure Storage. VR features such as hand gesture recognition, calibration, interaction and motion systems have been added. Over 10 VR applications have been built on the basis of the SDK.',
				tech: (
					<TechContainer>
						<Image src={UnityLogo} width={50} height={30} />
						<Image src={NetLogo} width={30} height={30} />
						<Image src={AzureLogo} width={60} height={30} />
						<Image src={DevopsLogo} width={75} height={30} />
					</TechContainer>
				),
				logo: SkillsiveLogo,
				img: BhpAppsHome,
				link: 'https://www.skillsive.com'
			};
		default:
			break;
	}
};

export type ProjectType =
	| 'softflix'
	| 'skillsive'
	| 'eygvrt'
	| 'tradeanalytics'
	| 'kolejoweABC'
	| 'frankenstein'
	| 'bhpapps'
	| 'cryptogambling';

type ProjectData = {
	name: string;
	description: string;
	img: StaticImageData;
	link?: string;
	logo: StaticImageData;
	tech: ReactNode;
};
