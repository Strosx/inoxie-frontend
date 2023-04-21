import styled from '@emotion/styled';
import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { OpenSourceProjectType, useOpenSourceData } from 'src/components/open-source-tile/useOpenSourceData';
import { useIntersection } from 'src/shared/hooks/useIntersection';
import { ChangeGrayscaleAnimation } from 'src/styles/animations/animations';
const { Meta } = Card;

type StyleProps = {
	isVisible: boolean;
};

const Container = styled.div<StyleProps>`
	.card {
		margin: 20px 0;
		width: 600px;
		height: 650px;

		border-radius: 10px;
		filter: grayscale(1);

		:hover {
			filter: grayscale(0);

			animation: ${ChangeGrayscaleAnimation(0)} 0.4s linear;
		}

		@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
			filter: ${props => (props.isVisible ? 'grayscale(0)' : 'grayscale(1)')};
			animation: ${props => (props.isVisible ? ChangeGrayscaleAnimation(0) : '')} 2s linear;

			width: 100vw;
			height: 650px;
		}
	}
`;

type Props = {
	project: OpenSourceProjectType;
};

export const OpenSourceTile = ({ project }: Props): JSX.Element => {
	const { name, description, img, link, logo, tech } = useOpenSourceData(project);
	const ref = useRef();
	const isVisible = useIntersection(ref, '0px');

	return (
		<Container ref={ref} isVisible={isVisible}>
			{link ? (
				<Link href={link} target='_blank'>
					<Card
						className='card'
						cover={
							<div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '16/9' }}>
								<Image src={img} alt='open-source-img' fill style={{ objectFit: 'cover' }} />
							</div>
						}
					>
						<Meta
							avatar={<Image src={logo} width={40} height={40} alt='open-source-avatar' />}
							title={<h3>{name}</h3>}
							description={
								<>
									<p>{description}</p>

									<p>Technologies used:</p>
									{tech}
								</>
							}
						/>
					</Card>
				</Link>
			) : (
				<Card
					className='card'
					cover={
						<div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '16/9' }}>
							<Image src={img} alt='open-source-img' fill style={{ objectFit: 'cover' }} />
						</div>
					}
				>
					<Meta
						avatar={<Image src={logo} width={40} height={40} alt='open-source-avatar' />}
						title={<h3>{name}</h3>}
						description={
							<>
								<p>{description}</p>

								<p>Technologies used:</p>
								{tech}
							</>
						}
					/>
				</Card>
			)}
		</Container>
	);
};
