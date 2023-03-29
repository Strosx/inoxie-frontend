import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Logo from 'src/components/logo';
import Link from 'next/link';
import { keyframes } from '@emotion/react';

type Props = {
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

const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 999;
	transition: background-color 1s ease;
`;

const HeaderWrapper = styled.div<Props>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 80px;
	padding: 0 20px;
	background-color: ${props => (props.isScrolled ? '#ffffff' : 'transparent')};

	animation: ${props =>
			props.isScrolled ? HeaderBackgroundAnimation('transparent', 'white') : HeaderBackgroundAnimation('white', 'transparent')}
		0.2s linear;
`;

const LogoContainer = styled.div`
	position: relative;
	width: 160px;
	height: 25px;
	font-size: 2rem;
	font-weight: bold;
	color: white;
	cursor: pointer;
`;

const NavList = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	gap: 20px;
`;

const NavItem = styled.li`
	margin: 0 10px;
	display: block;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		display: none;
	}
`;

const NavLink = styled.a<Props>`
	color: ${props => (props.isScrolled ? '#000000' : '#ffffff')};
	text-decoration: none;
	font-weight: bold;
	cursor: pointer;

	:hover {
		color: #0da237;
		//	color: #0fc742;
	}
`;

const HamburgerMenu = styled.button`
	display: none;
	border-width: 0;
	padding: 0.5rem 1rem;
	text-align: center;
	text-decoration: none;
	background-color: transparent;
	transition: all 0.3s ease;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		display: block;
	}
`;

const HamburgerIcon = styled.div<Props>`
	width: 30px;
	height: 4px;
	background-color: ${props => (props.isScrolled ? '#000000' : '#ffffff')};
	margin: 6px 0;
	transition: transform 0.3s ease;
`;

const MobileMenu = styled.div<Props>`
	display: none;
	position: fixed;
	top: 80px;
	left: 0;
	width: 100%;
	background-color: ${props => (props.isScrolled ? '#ffffff' : '#000000')};

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		display: block;
	}
`;

const MobileMenuList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

const MobileMenuItem = styled.li`
	margin: 10px 0;
`;

const MobileMenuLink = styled.a`
	color: #000000;
	text-decoration: none;
	font-size: 1.2rem;
	font-weight: bold;
	cursor: pointer;
`;

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleMobileMenuClick = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<HeaderContainer>
			<HeaderWrapper isScrolled={isScrolled}>
				<LogoContainer>
					<Logo variant={isScrolled ? 'black' : 'white'} isClickable />
				</LogoContainer>
				<NavList>
					<NavItem>
						<Link passHref href={'#technologies'}>
							<NavLink isScrolled={isScrolled}>Technologies</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link passHref href={'#offer'}>
							<NavLink isScrolled={isScrolled}>Offer</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link passHref href={'#projects'}>
							<NavLink isScrolled={isScrolled}>Portfolio</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link passHref href={'#open-source'}>
							<NavLink isScrolled={isScrolled}>Open Source</NavLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link passHref href={'#contact-us'}>
							<NavLink isScrolled={isScrolled}>Contact</NavLink>
						</Link>
					</NavItem>
					{/* 					<HamburgerMenu onClick={handleMobileMenuClick}>
						<HamburgerIcon isScrolled={isScrolled} />
						<HamburgerIcon isScrolled={isScrolled} />
						<HamburgerIcon isScrolled={isScrolled} />
					</HamburgerMenu>
 */}{' '}
				</NavList>
			</HeaderWrapper>
			{/* 		{isMobileMenuOpen && (
				<MobileMenu isScrolled={isScrolled}>
					<MobileMenuList>
						<MobileMenuItem>
							<Link passHref href={'/technologies'}>
								<MobileMenuLink>Technologies</MobileMenuLink>
							</Link>
						</MobileMenuItem>
						<MobileMenuItem>
							<Link passHref href={'/portfolio'}>
								<MobileMenuLink>Portfolio</MobileMenuLink>
							</Link>
						</MobileMenuItem>
						<MobileMenuItem>
							<Link passHref href={'/offer'}>
								<MobileMenuLink>Offer</MobileMenuLink>
							</Link>
						</MobileMenuItem>
						<MobileMenuItem>
							<Link passHref href={'/open-source'}>
								<MobileMenuLink>Open Source</MobileMenuLink>
							</Link>
						</MobileMenuItem>
						<MobileMenuItem>
							<Link passHref href={'/contact'}>
								<MobileMenuLink>Contact</MobileMenuLink>
							</Link>
						</MobileMenuItem>
					</MobileMenuList>
				</MobileMenu>
			)} */}
		</HeaderContainer>
	);
};

export default Header;
