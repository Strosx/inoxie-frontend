import {
	BulbOutlined,
	DollarCircleOutlined,
	GlobalOutlined,
	PhoneOutlined,
	PrinterOutlined,
	SettingOutlined,
	TeamOutlined
} from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button, Divider, Dropdown, MenuProps } from 'antd';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeStatics } from 'src/theme/theme';

const BottomHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	padding: 0 24px;

	background-color: ${props => props.theme.colors.background.slightlyDark};
	width: 100%;
	height: ${ThemeStatics.BottomHeaderHeight}px;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		display: none;
	}
`;

const BottomHeaderContent = styled.div`
	width: 100%;
	max-width: ${ThemeStatics.ContainerMaxWidth}px;
	height: 100%;

	margin: 0 auto;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	padding: 10px 0;
`;

type LinkContainerProps = {
	isLinkActive: boolean;
};

const LinkContainer = styled.div<LinkContainerProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 10px 30px;
	color: ${props => props.theme.colors.text.default};

	span {
		margin-left: 0px !important;
	}

	.anticon {
		color: ${props => (props.isLinkActive ? props.theme.colors.primary.default : 'unset')};
	}

	:hover {
		.anticon {
			color: ${props => props.theme.colors.primary.default};
		}

		color: unset !important;
	}
`;

const LinkText = styled.span`
	margin-top: 5px;
	font-size: 14px;

	text-decoration: none;
	color: ${props => props.theme.colors.text.default};

	:hover {
		color: ${props => props.theme.colors.text.default};
	}
`;

const DropdownContent = styled.div<LinkContainerProps>`
	display: flex;
	flex-direction: column;
	align-items: center;

	span {
		margin-top: 2px;
		font-size: 14px;
	}

	.anticon {
		color: ${props => (props.isLinkActive ? props.theme.colors.primary.default : 'unset')};
	}

	:hover {
		.anticon {
			color: ${props => props.theme.colors.primary.default};
		}

		color: unset !important;
	}
`;

export const BottomHeader = () => {
	const { t } = useTranslation('shared');
	const router = useRouter();

	const items: MenuProps['items'] = [
		{
			key: '1',
			label: (
				<Link href='/solutions/custom-web-development' passHref>
					{t('webDevelopment')}
				</Link>
			)
		},
		{
			key: '2',
			label: (
				<Link href='/solutions/cloud-development' passHref>
					{t('cloudDevelopment')}
				</Link>
			)
		},
		{
			key: '4',
			label: (
				<Link href='/solutions/product-design' passHref>
					{t('productDesign')}
				</Link>
			)
		},
		{
			key: '5',
			label: (
				<Link href='/solutions/quality-assurance' passHref>
					{t('qualityAssurance')}
				</Link>
			)
		},
		{
			key: '6',
			label: (
				<Link href='/solutions/game-development-xr-ar' passHref>
					{t('gameDevelopment')}
				</Link>
			)
		},
		{
			key: '7',
			label: (
				<Link href='/solutions/ai-automation-chat-gpt-open-ai' passHref>
					{t('aiAutomation')}
				</Link>
			)
		},
		{
			key: '8',
			label: (
				<Link href='/solutions/software-architecture-design-and-development' passHref>
					{t('softwareArchitecture')}
				</Link>
			)
		}
	];

	return (
		<BottomHeaderContainer>
			<BottomHeaderContent>
				<Link href={'/'} passHref>
					<LinkContainer isLinkActive={router.asPath == '/'}>
						<PrinterOutlined style={{ fontSize: '22px' }} />
						<LinkText>{t('home')}</LinkText>
					</LinkContainer>
				</Link>
				<Dropdown menu={{ items }} placement='bottomLeft' arrow>
					<DropdownContent isLinkActive={router.asPath.includes('/solutions')}>
						<BulbOutlined style={{ fontSize: '22px' }} />
						<Button type='ghost'>{t('solutions')}</Button>
					</DropdownContent>
				</Dropdown>

				<Link href={'/projects'} passHref>
					<LinkContainer isLinkActive={router.asPath.includes('/projects')}>
						<PrinterOutlined style={{ fontSize: '22px' }} />
						<LinkText>{t('projects')}</LinkText>
					</LinkContainer>
				</Link>

				<Link href={'/technologies'} passHref>
					<LinkContainer isLinkActive={router.asPath.includes('/technologies')}>
						<SettingOutlined style={{ fontSize: '22px' }} />
						<LinkText>{t('technologies')}</LinkText>
					</LinkContainer>
				</Link>

				<Link href={'/pricing'} passHref>
					<LinkContainer isLinkActive={router.asPath.includes('/pricing')}>
						<DollarCircleOutlined style={{ fontSize: '22px' }} />
						<LinkText>{t('pricing')}</LinkText>
					</LinkContainer>
				</Link>

				<Link href={'/career'} passHref>
					<LinkContainer isLinkActive={router.asPath.includes('/career')}>
						<TeamOutlined style={{ fontSize: '22px' }} />
						<LinkText>{t('career')}</LinkText>
					</LinkContainer>
				</Link>

				<Link href={'/partner'} passHref>
					<LinkContainer isLinkActive={router.asPath.includes('/partner')}>
						<GlobalOutlined style={{ fontSize: '22px' }} />
						<LinkText>{t('partner')}</LinkText>
					</LinkContainer>
				</Link>

				<Divider type='vertical' style={{ height: '100%', borderLeft: '1px solid rgb(171, 171, 171)', margin: '0 30px' }} />
				{/* 				<Link href={'/blog'} passHref>
					<LinkContainer isLinkActive={router.asPath.includes('/blog')}>
						<ReadOutlined style={{ fontSize: '22px' }} />
						<LinkText>{t('blog')}</LinkText>
					</LinkContainer>
				</Link> */}

				<Link href={'/contact-us'} passHref>
					<LinkContainer isLinkActive={router.asPath.includes('/contact-us')}>
						<PhoneOutlined style={{ fontSize: '22px' }} />
						<LinkText>{t('contact-us')}</LinkText>
					</LinkContainer>
				</Link>
			</BottomHeaderContent>
		</BottomHeaderContainer>
	);
};
