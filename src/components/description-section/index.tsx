import { useRef, useState, useEffect } from 'react';
import { useIntersection } from 'src/shared/hooks/useIntersection';
import Image from 'next/image';
import styled from '@emotion/styled';
import { AppearAnimation, SlideLeftAnimation, SlideRightAnimation } from 'src/styles/animations/animations';

type StyleProps = {
	imagePosition: 'left' | 'right';
	isVisible: boolean;
};

const Container = styled.div<StyleProps>`
	display: flex;
	flex-direction: ${props => (props.imagePosition == 'left' ? 'row' : 'row-reverse')};
	margin: 100px 0;
	animation: ${props => (props.isVisible ? AppearAnimation() : '')} 2s;

	> * {
		margin: 0 30px;
	}

	h3 {
		font-size: 30px;
		font-weight: 600;
		color: ${props => props.theme.colors.primary.default};
	}
`;

const ImageContainer = styled.div<StyleProps>`
	position: relative;

	min-width: 600px;
	min-height: 400px;
	opacity: 1;
	/* 	transform: translateX(0%);

	animation: ${props => (props.imagePosition == 'left' ? SlideRightAnimation() : SlideLeftAnimation())} 2s;
 */
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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
			<ImageContainer imagePosition={imagePosition} isVisible={isVisible}>
				<Image src={imageUrl} layout='fill' />
			</ImageContainer>

			<TextContainer>
				<h3>{title}</h3>
				<p>{subTitle}</p>
			</TextContainer>
		</Container>
	);
};
