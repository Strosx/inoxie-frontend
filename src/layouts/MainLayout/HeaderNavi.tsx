import styled from '@emotion/styled';
import { LinkButtonWithScroll } from 'src/components/link-button-with-scroll';
import { MenuOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useCallback, useState } from 'react';
import { SettingOutlined, CarryOutOutlined, DollarOutlined, CloseOutlined, PhoneOutlined } from '@ant-design/icons';
import { SlideLeftAnimation } from 'src/styles/animations/animations';

type StyleProps = {
	isScrolled: boolean;
};

const NaviContainer = styled.div<StyleProps>`
	min-width: 500px;
	display: flex;
	justify-content: end;
	flex-direction: row;

	a {
		color: ${props => (props.isScrolled ? props.theme.colors.text.default : 'white')};
	}

	> * {
		margin: 0 30px;
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		display: none;
	}
`;

const MobileNaviContainer = styled.div<StyleProps>`
	display: none;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		display: block;
	}

	.icon {
		font-size: 24px;
		color: ${props => (props.isScrolled ? props.theme.colors.text.default : 'white')};
	}

	.menu {
		position: absolute;
		top: 56px;
		right: 0;

		animation: ${SlideLeftAnimation()} 0.5s;
		-webkit-animation: ${SlideLeftAnimation()} 0.5s;

		width: 250px;
		height: 100vh;

		display: flex;
		flex-direction: column;

		a {
			text-decoration: none;
			color: white;
		}

		.menu-close-icon {
			padding: 10px;

			font-size: 24px;
			align-self: flex-end;
		}
	}
`;

type Props = {
	isScrolled: boolean;
};

export const HeaderNavi = ({ isScrolled }: Props): JSX.Element => {
	const [isOpened, setIsOpened] = useState(false);

	const scrollToId = useCallback((id: string) => {
		let el = document.getElementById(id);
		el && window.scrollTo({ top: el.offsetTop + 100, behavior: 'smooth' });
		setIsOpened(false);
	}, []);

	return (
		<>
			<NaviContainer isScrolled={isScrolled}>
				<LinkButtonWithScroll name='Technologies' id='technologies' />
				<LinkButtonWithScroll name='Projects' id='projects' />
				<LinkButtonWithScroll name='Offer' id='development' />
				<LinkButtonWithScroll name='Open source' id='open-source' />
				<LinkButtonWithScroll style={{ color: 'white' }} name='Contact Us' id='contact-us' type='primary' />
			</NaviContainer>

			<MobileNaviContainer isScrolled={isScrolled}>
				{isOpened ? (
					<CloseOutlined className='icon' onClick={() => setIsOpened(false)} />
				) : (
					<MenuOutlined className='icon' onClick={() => setIsOpened(true)} />
				)}

				{isOpened && (
					<Menu className='menu' mode='inline' theme='dark'>
						<Menu.Item
							style={{ color: 'white' }}
							icon={<SettingOutlined />}
							onClick={() => {
								scrollToId('technologies');
							}}
						>
							Technologies
						</Menu.Item>

						<Menu.Item
							style={{ color: 'white' }}
							icon={<CarryOutOutlined />}
							onClick={() => {
								scrollToId('projects');
							}}
						>
							Projects
						</Menu.Item>

						<Menu.Item
							style={{ color: 'white' }}
							icon={<DollarOutlined />}
							onClick={() => {
								scrollToId('development');
							}}
						>
							Offer
						</Menu.Item>

						<Menu.Item
							style={{ color: 'white' }}
							icon={<DollarOutlined />}
							onClick={() => {
								scrollToId('open-source');
							}}
						>
							Open source
						</Menu.Item>

						<Menu.Item
							style={{ color: 'white' }}
							icon={<PhoneOutlined />}
							onClick={() => {
								scrollToId('contact-us');
							}}
						>
							Contact
						</Menu.Item>
					</Menu>
				)}
			</MobileNaviContainer>
		</>
	);
};
