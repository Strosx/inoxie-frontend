import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Logo from 'src/components/logo';
import { HeaderNavi } from 'src/layouts/MainLayout/HeaderNavi';

type StyleProps = {
	isScrolled: boolean;
};

const HeaderBackgroundAnimation = (startColor: string, endColor: string) => keyframes`
	0% {
		background-color: ${startColor};
	}
	100% {
		background-color: ${endColor};
	} 
`;

const HeaderContainer = styled.div<StyleProps>`
	height: 84px;
	background-color: ${props => (props.isScrolled ? 'white' : 'transparent')};
	animation: ${props =>
			props.isScrolled ? HeaderBackgroundAnimation('transparent', 'white') : HeaderBackgroundAnimation('white', 'transparent')}
		0.2s linear;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	z-index: 999;
	padding: 0 90px;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		padding: 0 10px;
		height: 56px;
	}
`;

const LogoContainer = styled.div`
	position: relative;
	width: 160px;
	height: 25px;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		width: 120px;
		height: 18px;
	}
`;

export const Header = (): JSX.Element => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
	}, []);

	const onScroll = () => {
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrollPosition = winScroll / height;
		setScrolled(scrollPosition != 0);
	};

	return (
		<HeaderContainer isScrolled={scrolled}>
			<LogoContainer>
				<Logo variant={scrolled ? 'black' : 'white'} />
			</LogoContainer>

			<HeaderNavi isScrolled={scrolled} />
		</HeaderContainer>
	);
};
