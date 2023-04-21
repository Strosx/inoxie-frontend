import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';

const TextImageContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	width: 100%;

	> div:nth-of-type(1) {
		max-width: 80%;
		width: 80%;
	}

	@media (max-width: ${props => props.theme.breakpoints.desktop}px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;

		> div:nth-of-type(1) {
			max-width: 90%;
			width: 90%;
		}
	}
`;

const SmallImagesContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: end;
	gap: 30px;

	max-width: 20%;
	width: 20%;

	@media (max-width: ${props => props.theme.breakpoints.desktop}px) {
		flex-direction: row;
		flex-wrap: wrap;
		width: 80%;
		max-width: 80%;
	}
`;

type Props = {
	h2Title: string;
	paragraph: string;
	icons?: StaticImageData[];
	iconsElements?: ReactNode;
};

const ParagraphWithIcons = ({ h2Title, paragraph, icons, iconsElements }: Props): JSX.Element => {
	return (
		<TextImageContainer>
			<div>
				<h2 style={{ textAlign: 'center', marginTop: 0 }}>{h2Title}</h2>
				<ReactMarkdown>{paragraph}</ReactMarkdown>
			</div>

			<SmallImagesContainer>
				{iconsElements ? iconsElements : icons?.map(m => <Image key={m.src} src={m} alt='paragraph-icon' />)}
			</SmallImagesContainer>
		</TextImageContainer>
	);
};

export default ParagraphWithIcons;
