import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';
import Image, { StaticImageData } from 'next/image';
import AzureLogo from 'public/images/logos/azure-logo.png';
import DevopsLogo from 'public/images/logos/devops-logo.png';
import InoxieLogo from 'public/images/logos/inoxie-black-transparent-square.png';
import NetLogo from 'public/images/logos/net-logo.png';
import NextJsLogo from 'public/images/logos/next-js-logo.png';
import ReactLogo from 'public/images/logos/react-logo.png';
import UnityLogo from 'public/images/logos/unity-logo.png';
import ZohoLogo from 'public/images/logos/zoho-logo.png';
import BhpAppsHome from 'public/images/projects/bhpvrapps/home.png';
import CryptoHome from 'public/images/projects/cryptogambling/home.png';
import EyGVRTHome from 'public/images/projects/ey-gvrt/ey-gvrt-home.png';
import EyLogo from 'public/images/projects/ey-gvrt/ey-logo.png';
import FrankensteinHome from 'public/images/projects/frankenstein/home.jpg';
import FrankensteinLogo from 'public/images/projects/frankenstein/logo.jpg';
import KolejoweHome from 'public/images/projects/kolejoweABC/home.jpg';
import KolejoweLogo from 'public/images/projects/kolejoweABC/logo.jpg';
import SkillsiveHome from 'public/images/projects/skillsive/skillsive-home.png';
import SkillsiveLogo from 'public/images/projects/skillsive/skillsive-logo.png';
import SoftflixHome from 'public/images/projects/softflix/softflix-home.png';
import SoftflixLogo from 'public/images/projects/softflix/softflix-logo.png';
import TaHome from 'public/images/projects/tradeanalytics/ta-home.png';
import TaLogo from 'public/images/projects/tradeanalytics/ta-logo.png';
import { ReactNode } from 'react';

const TechContainer = styled.div`
	display: flex;
	flex-direction: row;

	> * {
		margin-right: 10px !important;
	}
`;

export const useProjectData = (project: ProjectType): ProjectData => {
	const { t } = useTranslation('projects');

	switch (project) {
		case 'softflix':
			return {
				name: t('softflix.name'),
				description: t('softflix.description'),
				img: SoftflixHome,
				link: 'https://www.softflix.com',
				logo: SoftflixLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
						<Image src={AzureLogo} width={60} height={30} alt='azure-logo' />
						<Image src={ReactLogo} width={60} height={30} alt='react-logo' />
						<Image src={NextJsLogo} width={60} height={30} alt='next-js-logo' />
						<Image src={ZohoLogo} width={50} height={30} alt='zoho-logo' />
						<Image src={DevopsLogo} width={75} height={30} alt='azure-devops-logo' />
					</TechContainer>
				)
			};
		case 'skillsive':
			return {
				name: t('skillsive.name'),
				description: t('skillsive.description'),
				img: SkillsiveHome,
				link: 'https://www.skillsive.com',
				logo: SkillsiveLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
						<Image src={AzureLogo} width={60} height={30} alt='azure-logo' />
						<Image src={ReactLogo} width={60} height={30} alt='react-logo' />
						<Image src={NextJsLogo} width={60} height={30} alt='next-js-logo' />
						<Image src={DevopsLogo} width={75} height={30} alt='devops-logo' />
						<Image src={UnityLogo} width={50} height={30} alt='unity-logo' />
					</TechContainer>
				)
			};
		case 'eygvrt':
			return {
				name: t('eygvrt.name'),
				description: t('eygvrt.description'),
				img: EyGVRTHome,
				link: 'https://www.ey.com/en_pl/tax/global-vat-reporting-tool',
				logo: EyLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
						<Image src={AzureLogo} width={60} height={30} alt='azure-logo' />
						<Image src={ReactLogo} width={60} height={30} alt='react-logo' />
						<Image src={DevopsLogo} width={75} height={30} alt='devops-logo' />
					</TechContainer>
				)
			};
		case 'tradeanalytics':
			return {
				name: t('tradeanalytics.name'),
				description: t('tradeanalytics.description'),
				img: TaHome,
				link: 'https://allegro.pl/moje-allegro/sprzedaz/allegro-analytics/o-narzedziu',
				logo: TaLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
						<Image src={AzureLogo} width={60} height={30} alt='azure-logo' />
						<Image src={ReactLogo} width={60} height={30} alt='react-logo' />
						<Image src={DevopsLogo} width={75} height={30} alt='devops-logo' />
					</TechContainer>
				)
			};
		case 'kolejoweABC':
			return {
				name: t('kolejoweABC.name'),
				description: t('kolejoweABC.description'),
				img: KolejoweHome,
				link: 'https://kolejoweabc.pl/ABC/aktualnosci/730-podrozuj-z-edukacyjna-gra-kolejowe-abc?fbclid=IwAR2Th4ELEP41p6MXTRqCKe_wXX-akpHBBDAIP4lcgQJOR-rVC0iJB-HW3mI',
				logo: KolejoweLogo,
				tech: (
					<TechContainer>
						<Image src={UnityLogo} width={50} height={30} alt='unity-logo' />
					</TechContainer>
				)
			};
		case 'frankenstein':
			return {
				name: t('frankenstein.name'),
				description: t('frankenstein.description'),
				img: FrankensteinHome,
				link: 'https://store.steampowered.com/app/863380/Frankenstein_Beyond_the_Time',
				logo: FrankensteinLogo,
				tech: (
					<TechContainer>
						<Image src={UnityLogo} width={50} height={30} alt='unity-logo' />
					</TechContainer>
				)
			};
		case 'cryptogambling':
			return {
				name: t('cryptogambling.name'),
				description: t('cryptogambling.description'),
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
						<Image src={AzureLogo} width={60} height={30} alt='azure-logo' />
						<Image src={ReactLogo} width={60} height={30} alt='react-logo' />
						<Image src={DevopsLogo} width={75} height={30} alt='azure-devops-logo' />
					</TechContainer>
				),
				img: CryptoHome,
				logo: InoxieLogo
			};
		case 'bhpapps':
			return {
				name: t('bhpapps.name'),
				description: t('bhpapps.description'),
				tech: (
					<TechContainer>
						<Image src={UnityLogo} width={50} height={30} alt='unity-logo' />
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
						<Image src={AzureLogo} width={60} height={30} alt='azure-logo' />
						<Image src={DevopsLogo} width={75} height={30} alt='devops-logo' />
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
