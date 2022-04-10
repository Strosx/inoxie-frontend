import styled from '@emotion/styled';
import { Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeGrayscaleAnimation } from 'src/styles/animations/animations';
const { Meta } = Card;
import { useRef } from 'react';
import { useIntersection } from 'src/shared/hooks/useIntersection';
import { OpenSourceProjectType, useOpenSourceData } from 'src/components/open-source-tile/useOpenSourceData';

type StyleProps = {
	isVisible: boolean;
};

const Container = styled.div<StyleProps>`
	.card {
		margin: 20px 0;
		width: 600px;
		height: 520px;

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
			height: 500px;
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
				<Link href={link} passHref>
					<a target='_blank'>
						<Card className='card' cover={<Image src={img} />}>
							<Meta
								avatar={<Image src={logo} width={40} height={40} />}
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
					</a>
				</Link>
			) : (
				<Card className='card' cover={<Image src={img} />}>
					<Meta
						avatar={<Image src={logo} width={40} height={40} />}
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
