import styled from '@emotion/styled';
import Image from 'next/image';
import CoverImg from 'public/images/coverimg.png';

const VideoContainer = styled.div`
	overflow: hidden;
	box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
	opacity: 0.9;
	position: absolute;
	width: 100vw;
	height: 70vh;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		height: 50vh;
	}

	video {
		display: block;
		position: absolute;
		z-index: 0;
		width: 100vw;
		filter: grayscale(0.5);
		box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);

		@media (max-width: ${props => props.theme.breakpoints.mobile}px) {
			zoom: 2.5;
			transform: translateX(-20%);
		}
	}

	.content {
		margin-top: 10px;
		position: relative;
		z-index: 1;
	}
`;

export const BackgroundVideo = (): JSX.Element => {
	return (
		<VideoContainer>
			<video src='/images/covervideo2.mp4' autoPlay loop muted />
		</VideoContainer>
	);
};
