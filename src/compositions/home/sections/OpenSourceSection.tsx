import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import GithubLogo from 'public/images/logos/github-wide-logo.png';
import { OpenSourceTile } from 'src/components/open-source-tile';

const Content = styled.div`
	width: 100%;
	margin-bottom: 100px;

	h2 {
		//	font-size: 50px;
		//	font-weight: 800;
		text-align: center;
	}

	h3 {
		margin-top: 0;
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		margin-bottom: 0px;

		h2 {
			//	font-size: 30px;
			//	font-weight: 800;
			text-align: center;
		}
	}
`;

const PackagesContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const OpenSourceSection = (): JSX.Element => {
	return (
		<Content id='open-source'>
			<h2>
				Open Source{' '}
				<Link href={'https://github.com/Strosx?tab=repositories'} target='_blank'>
					<Image src={GithubLogo} alt='github-logo' />
				</Link>
			</h2>
			<PackagesContainer>
				<OpenSourceTile project='inoxiesoftwebsite' />
				<OpenSourceTile project='apiservices' />
				<OpenSourceTile project='dataprocessor' />
				<OpenSourceTile project='repository' />
				<OpenSourceTile project='rediscache' />
				<OpenSourceTile project='exceptions' />
			</PackagesContainer>
		</Content>
	);
};
