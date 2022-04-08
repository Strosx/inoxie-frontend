import styled from '@emotion/styled';
import { useRef } from 'react';
import { useIntersection } from 'src/shared/hooks/useIntersection';
import { AppearAnimation } from 'src/styles/animations/animations';
import NetLogo from 'public/images/logos/net-logo.png';
import SqlLogo from 'public/images/logos/sql-logo.png';
import NextJsLogo from 'public/images/logos/next-js-logo.png';
import AzureLogo from 'public/images/logos/azure-logo.png';
import ReactLogo from 'public/images/logos/react-logo.png';
import UnityLogo from 'public/images/logos/unity-logo.png';
import ZohoLogo from 'public/images/logos/zoho-logo.png';
import DevopsLogo from 'public/images/logos/devops-logo.png';
import ElasticLogo from 'public/images/logos/elastic-logo.svg';
import VercelLogo from 'public/images/logos/vercel-logo.png';
import Image from 'next/image';

type Props = {
	isVisible: boolean;
};

const Content = styled.div<Props>`
	width: 100%;
	margin-bottom: 200px;
	animation: ${props => (props.isVisible ? AppearAnimation() : '')} 2s;
	h2 {
		font-size: 50px;
		font-weight: 800;
		text-align: center;
	}
`;

const LogosContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;

	width: 100%;

	.img-container {
		margin: 10px;
	}
`;

export const OurSkillsSections = (): JSX.Element => {
	const ref = useRef();
	const isVisible = useIntersection(ref, '0px');

	return (
		<>
			<Content ref={ref} isVisible={isVisible}>
				<h2>Our skills</h2>

				<LogosContainer>
					<div className='img-container'>
						<Image src={AzureLogo} width={200} height={100} />
					</div>
					<div className='img-container'>
						<Image src={NetLogo} width={100} height={100} />
					</div>
					<div className='img-container'>
						<Image src={DevopsLogo} width={250} height={100} />
					</div>
					<div className='img-container'>
						<Image src={SqlLogo} width={120} height={100} />
					</div>
					<div className='img-container'>
						<Image src={UnityLogo} width={250} height={100} />
					</div>
					<div className='img-container'>
						<Image src={ZohoLogo} width={220} height={100} />
					</div>
					<div className='img-container'>
						<Image src={ElasticLogo} width={250} height={100} />
					</div>
					<div className='img-container'>
						<Image src={ReactLogo} width={200} height={100} />
					</div>
					<div className='img-container'>
						<Image src={NextJsLogo} width={200} height={100} />
					</div>

					<div className='img-container'>
						<Image src={VercelLogo} width={250} height={100} />
					</div>
				</LogosContainer>
			</Content>
		</>
	);
};
