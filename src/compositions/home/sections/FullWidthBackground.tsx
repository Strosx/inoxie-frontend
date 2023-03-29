import styled from '@emotion/styled';
import Image from 'next/image';
import Bg from 'public/images/widetopbg.jpg';

const FullWidthBackgroundContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		height: 70vh;
	}
`;

const SloganContainer = styled.div`
	position: absolute;
	top: 30%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	color: #ffffff;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		left: 0%;
		top: 15%;

		transform: unset;
	}
`;

const SloganText = styled.h1`
	margin-bottom: 1rem;
	color: #ffffff;
`;

const SubSloganText = styled.p`
	color: #ffffff;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		display: none;
	}
`;

const FullWidthBackground = () => {
	return (
		<FullWidthBackgroundContainer>
			<Image priority={true} src={Bg} alt='background-cover-img' layout='fill' objectFit='cover' />
			<SloganContainer>
				<SloganText>Innovative Solutions, Unmatched Expertise - InoxieSoft</SloganText>
				<SubSloganText>Your Software Development Partner</SubSloganText>
			</SloganContainer>
		</FullWidthBackgroundContainer>
	);
};

export default FullWidthBackground;
