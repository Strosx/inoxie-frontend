import styled from '@emotion/styled';

const VideoContainer = styled.div`
	max-height: 70vh;
	overflow: hidden;
	box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
    opacity: 0.9;

	video {
		position: absolute;
		margin-top: calc(-50vh / 1.4);
		z-index: 0;
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
			<video src='/images/covervideo.mp4' autoPlay loop muted></video>
		</VideoContainer>
	);
};
