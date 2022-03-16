import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/images/logo.png';
import { useEffect, useState } from 'react';

type StyleProps = {
	isScrolled: boolean;
};

const HeaderContainer = styled.div<StyleProps>`
	height: 84px;
	background-color: ${props => (props.isScrolled ? 'white' : 'transparent')};

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100%;
	z-index: 999;
	padding: 0 90px;
`;

const NaviContainer = styled.div`
	min-width: 500px;
	display: flex;
	justify-content: end;
	flex-direction: row;

	a {
		text-decoration: none;
		color: ${props => props.theme.colors.text.default};
	}

	> * {
		margin: 0 30px;
	}
`;

const LinkButton = styled(Button)`
	display: flex;
	align-items: center;
	font-weight: 600;
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
			<Image src={Logo} width={150} height={67.5} />

			<NaviContainer>
				<Link href='/' passHref>
					<LinkButton type='link'>Products</LinkButton>
				</Link>
				<Link href='/' passHref>
					<LinkButton type='link'>Portfolio</LinkButton>
				</Link>
				<Link href='/' passHref>
					<LinkButton type='link'>Technologies</LinkButton>
				</Link>
			</NaviContainer>

			<NaviContainer>
				<Link href='/' passHref>
					<LinkButton type='link'>Contact Us</LinkButton>
				</Link>
			</NaviContainer>
		</HeaderContainer>
	);
};
