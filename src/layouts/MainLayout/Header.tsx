import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LinkButtonWithScroll } from 'src/components/link-button-with-scroll';
import Logo from 'src/components/logo';

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
`;

const NaviContainer = styled.div<StyleProps>`
	min-width: 500px;
	display: flex;
	justify-content: end;
	flex-direction: row;

	a {
		text-decoration: none;
		color: ${props => (props.isScrolled ? props.theme.colors.text.default : 'white')};
	}

	> * {
		margin: 0 30px;
	}
`;

const LinkButton = styled(Button)`
	display: flex;
	align-items: center;
	font-weight: 700;
	font-size: 14px;
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
			<div style={{ position: 'relative', width: '160px', height: '25px' }}>
				<Logo variant={scrolled ? 'black' : 'white'} />
			</div>

			<NaviContainer isScrolled={scrolled}>
				<LinkButtonWithScroll name='Technologies' id='technologies' />
				<LinkButtonWithScroll name='Projects' id='projects' />
				<LinkButtonWithScroll name='Offer' id='development' />

				<LinkButtonWithScroll name='Open Source' id='open-source' />

				<LinkButtonWithScroll style={{ color: 'white' }} name='Contact Us' id='contact-us' type='primary' />
			</NaviContainer>
		</HeaderContainer>
	);
};
