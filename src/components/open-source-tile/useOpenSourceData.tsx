import Image, { StaticImageData } from 'next/image';
import ApiImg from 'public/images/apiservices.jpg';
import DataProcessorImg from 'public/images/dataprocessor.jpg';
import ExceptionsImg from 'public/images/exceptions.jpg';
import InoxieWebsiteImg from 'public/images/inoxiewebsite.png';
import AzureLogo from 'public/images/logos/azure-logo.png';
import InoxieLogo from 'public/images/logos/inoxie-black-transparent-square.png';
import NetLogo from 'public/images/logos/net-logo.png';
import NextJsLogo from 'public/images/logos/next-js-logo.png';
import VercelLogo from 'public/images/logos/vercel-logo.png';
import NugetLogo from 'public/images/nuget-logo.svg';
import RedisImage from 'public/images/redis.jpg';
import RespositoryImg from 'public/images/repository.jpg';
import { ReactNode } from 'react';

import styled from '@emotion/styled';

const TechContainer = styled.div`
	display: flex;
	flex-direction: row;

	> * {
		margin-right: 10px !important;
	}
`;

export const useOpenSourceData = (project: OpenSourceProjectType): OpenSourceData => {
	switch (project) {
		case 'apiservices':
			return {
				name: 'Inoxie.Tools.ApiServices 6.0.0',
				description:
					'Nuget package which allow developers to create new projects faster and cleaner. References: Inoxie.Tools.DataProcessor and Inoxie.Tools.Repository. NET Support: 6.0.0 and higher',
				img: ApiImg,
				link: 'https://www.nuget.org/packages/Inoxie.Tools.ApiServices/',
				logo: NugetLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
					</TechContainer>
				)
			};

		case 'dataprocessor':
			return {
				name: 'Inoxie.Tools.DataProcessor 6.0.0',
				description:
					'Nuget package which makes paging and filtering very easy for develops. All you have to do is pass IQueryable interface and register filter provider in your app. NET Support: 6.0.0 and higher',
				img: DataProcessorImg,
				link: 'https://www.nuget.org/packages/Inoxie.Tools.DataProcessor/',
				logo: NugetLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
					</TechContainer>
				)
			};
		case 'repository':
			return {
				name: 'Inoxie.Tools.Core.Repository 6.0.0',
				description:
					'Nuget package for connecting application to relative or non relative database. Package exposes generic IReadRepository and IWriteRepository interface. NET Support: 6.0.0 and higher',
				img: RespositoryImg,
				link: 'https://www.nuget.org/packages/Inoxie.Tools.Core.Repository/',
				logo: NugetLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
						<Image src={AzureLogo} width={60} height={30} alt='azure-logo' />
					</TechContainer>
				)
			};
		case 'rediscache':
			return {
				name: 'Inoxie.Tools.RedisCache 6.0.0',
				description:
					'Nuget package for connecting application to Microsoft Azure Redis Cache, exposing Read And Write generic interfaces, all you need to do is register dependency injection and start using. NET Support: 6.0.0 and higher',
				img: RedisImage,
				link: 'https://www.nuget.org/packages/Inoxie.Tools.RedisCache/',
				logo: NugetLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
						<Image src={AzureLogo} width={60} height={30} alt='azure-logo' />
					</TechContainer>
				)
			};
		case 'exceptions':
			return {
				name: 'Inoxie.Tools.Exceptions 6.0.0',
				description:
					'Nuget package for managing exception in backend application, this package help to throw exception codes to client side from API. NET Support: 6.0.0 and higher',
				img: ExceptionsImg,
				link: 'https://www.nuget.org/packages/Inoxie.Tools.Exceptions/',
				logo: NugetLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotnet-logo' />
					</TechContainer>
				)
			};
		case 'inoxiesoftwebsite':
			return {
				name: 'Inoxiesoft Website',
				description:
					'Website created by us with NextJs and Vercel deployement server. Website is optimized for search engine traffic, mobile devices, it is fully responsible with SEO included.',
				img: InoxieWebsiteImg,
				link: 'https://github.com/Strosx/inoxie-frontend',
				logo: InoxieLogo,
				tech: (
					<TechContainer>
						<Image src={NetLogo} width={30} height={30} alt='dotne-logo' />
						<Image src={NextJsLogo} width={60} height={30} alt='next-js-logo' />
						<Image src={VercelLogo} width={60} height={30} alt='vercel-logo' />
					</TechContainer>
				)
			};
		default:
			break;
	}
};

export type OpenSourceProjectType = 'apiservices' | 'dataprocessor' | 'repository' | 'rediscache' | 'exceptions' | 'inoxiesoftwebsite';

type OpenSourceData = {
	name: string;
	description: string;
	img: StaticImageData;
	link?: string;
	logo: StaticImageData;
	tech: ReactNode;
};
