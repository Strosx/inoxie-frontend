import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';

const ImageContainer = styled.div`
	position: relative;
	width: 60%;
	height: auto;
	aspect-ratio: 10/9;
	margin: 0 auto;

	@media (max-width: ${props => props.theme.breakpoints.mobile}px) {
		width: 100%;
	}
`;

type Props = {
	img: StaticImageData;
};

const ContentBigImage = ({ img }: Props): JSX.Element => {
	return (
		<ImageContainer>
			<Image src={img} fill alt='content-cover-img' />
		</ImageContainer>
	);
};

export default ContentBigImage;
