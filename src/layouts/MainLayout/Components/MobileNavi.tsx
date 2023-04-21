import {
	BulbOutlined,
	CloseOutlined,
	DollarCircleOutlined,
	DownOutlined,
	GlobalOutlined,
	MenuOutlined,
	PhoneOutlined,
	PrinterOutlined,
	SettingOutlined,
	TeamOutlined
} from '@ant-design/icons';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Divider } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ThemeStatics } from 'src/theme/theme';

const HamburgerMenu = styled(Button)`
	display: none;
	cursor: pointer;
	background-color: transparent;
	border: none;
	padding: 0;
	color: white;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		display: inline-block;
	}
`;

const showIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

type LinkButtonProps = {
	isLinkActive: boolean;
};

const LinkContainer = styled.div<LinkButtonProps>`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 10px;

	padding: 10px 30px;
	color: ${props => (props.isLinkActive ? props.theme.colors.primary.default : props => props.theme.colors.text.light)};

	span {
		margin-left: 0px !important;
	}

	.anticon {
		color: ${props => (props.isLinkActive ? props.theme.colors.primary.default : 'unset')};
	}
`;

const LinkText = styled.span`
	margin-top: 5px;
	font-size: 14px;

	text-decoration: none;
`;

const MenuDrawer = styled.div`
	position: absolute;
	top: ${ThemeStatics.TopHeaderHeight}px;
	left: 0;
	width: 100%;
	background-color: #000000e9;
	height: calc(100vh - ${ThemeStatics.TopHeaderHeight}px);

	animation: ${showIn} 0.2s ease-in forwards;
	z-index: 10;
`;

export const MobileNavi = () => {
	const [isOpen, setIsOpened] = useState(false);
	const router = useRouter();
	const { t } = useTranslation('shared');

	return (
		<>
			<HamburgerMenu type='ghost' onClick={() => setIsOpened(v => !v)}>
				{isOpen ? <CloseOutlined style={{ fontSize: '22px' }} /> : <MenuOutlined style={{ fontSize: '22px' }} />}
			</HamburgerMenu>
			{isOpen && (
				<MenuDrawer>
					<div>
						<LinkContainer isLinkActive={false}>
							<BulbOutlined style={{ fontSize: '22px' }} />
							<LinkText>{t('solutions')}</LinkText>
							<DownOutlined style={{ fontSize: '10px', marginTop: '4px' }} />
						</LinkContainer>
					</div>

					<div style={{ marginLeft: '60px' }}>
						<Link href={'/solutions/custom-web-development'}>
							<LinkContainer
								isLinkActive={router.asPath.includes('/solutions/custom-web-development')}
								onClick={() => setIsOpened(false)}
							>
								<LinkText>{t('webDevelopment')}</LinkText>
							</LinkContainer>
						</Link>

						<Link href={'/solutions/cloud-development'}>
							<LinkContainer
								isLinkActive={router.asPath.includes('/solutions/cloud-development')}
								onClick={() => setIsOpened(false)}
							>
								<LinkText>{t('cloudDevelopment')}</LinkText>
							</LinkContainer>
						</Link>

						<Link href={'/solutions/product-design'}>
							<LinkContainer
								isLinkActive={router.asPath.includes('/solutions/product-design')}
								onClick={() => setIsOpened(false)}
							>
								<LinkText>{t('productDesign')}</LinkText>
							</LinkContainer>
						</Link>

						<Link href={'/solutions/quality-assurance'}>
							<LinkContainer
								isLinkActive={router.asPath.includes('/solutions/quality-assurance')}
								onClick={() => setIsOpened(false)}
							>
								<LinkText>{t('qualityAssurance')}</LinkText>
							</LinkContainer>
						</Link>

						<Link href={'/solutions/game-development-xr-ar'}>
							<LinkContainer
								isLinkActive={router.asPath.includes('/solutions/game-development-xr-ar')}
								onClick={() => setIsOpened(false)}
							>
								<LinkText>{t('gameDevelopment')}</LinkText>
							</LinkContainer>
						</Link>

						<Link href={'/solutions/ai-automation-chat-gpt-open-ai'}>
							<LinkContainer
								isLinkActive={router.asPath.includes('/solutions/ai-automation-chat-gpt-open-ai')}
								onClick={() => setIsOpened(false)}
							>
								<LinkText>{t('aiAutomation')}</LinkText>
							</LinkContainer>
						</Link>

						<Link href={'/solutions/software-architecture-design-and-development'}>
							<LinkContainer
								isLinkActive={router.asPath.includes('/solutions/software-architecture-design-and-development')}
								onClick={() => setIsOpened(false)}
							>
								<LinkText>{t('softwareArchitecture')}</LinkText>
							</LinkContainer>
						</Link>
					</div>

					<Link href={'/projects'} passHref>
						<LinkContainer isLinkActive={router.asPath.includes('/projects')} onClick={() => setIsOpened(false)}>
							<PrinterOutlined style={{ fontSize: '22px' }} />
							<LinkText>{t('projects')}</LinkText>
						</LinkContainer>
					</Link>

					<Link href={'/technologies'} passHref>
						<LinkContainer isLinkActive={router.asPath.includes('/technologies')} onClick={() => setIsOpened(false)}>
							<SettingOutlined style={{ fontSize: '22px' }} />
							<LinkText>{t('technologies')}</LinkText>
						</LinkContainer>
					</Link>

					<Link href={'/pricing'} passHref>
						<LinkContainer isLinkActive={router.asPath.includes('/pricing')} onClick={() => setIsOpened(false)}>
							<DollarCircleOutlined style={{ fontSize: '22px' }} />
							<LinkText>{t('pricing')}</LinkText>
						</LinkContainer>
					</Link>

					<Link href={'/career'} passHref>
						<LinkContainer isLinkActive={router.asPath.includes('/career')} onClick={() => setIsOpened(false)}>
							<TeamOutlined style={{ fontSize: '22px' }} />
							<LinkText>{t('career')}</LinkText>
						</LinkContainer>
					</Link>

					<Link href={'/partner'} passHref>
						<LinkContainer isLinkActive={router.asPath.includes('/partner')} onClick={() => setIsOpened(false)}>
							<GlobalOutlined style={{ fontSize: '22px' }} />
							<LinkText>{t('partner')}</LinkText>
						</LinkContainer>
					</Link>

					<Divider
						type='horizontal'
						style={{ borderTop: '1px solid rgba(237, 237, 237, 0.867)', minWidth: '90%', width: '80%', margin: '20px auto' }}
					/>

					{/* 				<Link href={'/blog'} passHref>
						<LinkContainer isLinkActive={router.asPath.includes('/blog')} onClick={() => setIsOpened(false)}>
							<ReadOutlined style={{ fontSize: '22px' }} />
							<LinkText>{t('blog')}</LinkText>
						</LinkContainer>
					</Link> */}

					<Link href={'/contact-us'} passHref>
						<LinkContainer isLinkActive={router.asPath.includes('/contact-us')} onClick={() => setIsOpened(false)}>
							<PhoneOutlined style={{ fontSize: '22px' }} />
							<LinkText>{t('contact-us')}</LinkText>
						</LinkContainer>
					</Link>
				</MenuDrawer>
			)}
		</>
	);
};
