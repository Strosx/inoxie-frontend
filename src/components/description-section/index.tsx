import { useRef } from 'react';
import { useIntersection } from 'src/shared/hooks/useIntersection';
import Image from 'next/image';
import styled from '@emotion/styled';
import { AppearAnimation } from 'src/styles/animations/animations';

type StyleProps = {
	imagePosition: 'left' | 'right';
	isVisible: boolean;
};

const Container = styled.div<StyleProps>`
	display: flex;
	flex-direction: ${props => (props.imagePosition == 'left' ? 'row' : 'row-reverse')};
	margin: 100px 0;
	animation: ${props => (props.isVisible ? AppearAnimation() : '')} 2s;

	h3 {
		font-size: 30px;
		font-weight: 600;
		color: ${props => props.theme.colors.primary.default};
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		flex-direction: column;
	}
`;

const ImageContainer = styled.div`
	position: relative;

	min-width: 600px;
	min-height: 400px;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		min-width: 100vw;
		aspect-ratio: 16/9;
		min-height: auto;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 0 30px;
`;

type Props = {
	imageUrl: StaticImageData;
	title: string;
	subTitle: string;
	imagePosition: 'left' | 'right';
	id?: string;
};

export const DescriptionSection = ({ imageUrl, title, subTitle, imagePosition, id }: Props) => {
	const ref = useRef();
	const isVisible = useIntersection(ref, '0px');

	return (
		<Container id={id} imagePosition={imagePosition} ref={ref} isVisible={isVisible}>
			<ImageContainer>
				<Image src={imageUrl} layout='fill' />
			</ImageContainer>

			<TextContainer>
				<h3>{title}</h3>
				<p>{subTitle}</p>
			</TextContainer>
		</Container>
	);
};
