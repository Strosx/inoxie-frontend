import styled from '@emotion/styled';
import { Divider } from 'antd';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import LogoBlack from 'public/images/logos/inoxie-black-transparent.png';
import { ThemeStatics } from 'src/theme/theme';

const FooterContainer = styled.div`
	background-color: ${props => props.theme.colors.background.slightlyDark};
	padding: 30px 20px 10px 20px;
	padding: 30px 20px 10px 20px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ContentContainer = styled.div`
	width: 100%;
	max-width: ${ThemeStatics.ContainerMaxWidth}px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const TopContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: ${props => props.theme.breakpoints.mobile}px) {
		flex-direction: column;
		justify-content: center;
		align-items: start;

		h5 {
			margin-top: 10px;
			margin-bottom: 5px;
		}
	}
`;

const LinkButton = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	gap: 10px;

	color: ${props => props.theme.colors.text.default};

	span {
		margin-left: 0px !important;
	}
`;

const LinkText = styled.div`
	margin-top: 3px;
	font-size: 12px;
	color: ${props => props.theme.colors.text.default};

	:hover {
		color: ${props => props.theme.colors.primary.default} !important;
	}
`;

export const Footer = () => {
	const { t } = useTranslation('shared');

	return (
		<FooterContainer>
			<ContentContainer>
				<TopContainer>
					<div>
						<Image src={LogoBlack} height={36} width={206} alt='inoxiesoft-logo-black' />
						<p style={{ marginTop: '10px', fontSize: '12px' }}>
							Maciej Kamieniak Inoxie <br /> PL9910535234 <br />
							Kolejowa 14 <br /> 46-073 Chróscina, Poland <br /> m.kamieniak@inoxiesoft.com <br /> inoxiesoft@gmail.com <br />
							+48 798943352
						</p>
					</div>

					<div>
						<h5 style={{ fontWeight: '600', marginBottom: '15px' }}>{t('services')}</h5>
						<Link href={'/solutions/custom-web-development'}>
							<LinkText>{t('webDevelopment')}</LinkText>
						</Link>
						<Link href={'/solutions/cloud-development'}>
							<LinkText>{t('cloudDevelopment')}</LinkText>
						</Link>
						<Link href={'/solutions/product-design'}>
							<LinkText>{t('productDesign')}</LinkText>
						</Link>
						<Link href={'/solutions/quality-assurance'}>
							<LinkText>{t('qualityAssurance')}</LinkText>
						</Link>
						<Link href={'/solutions/game-development-xr-ar'}>
							<LinkText>{t('gameDevelopment')}</LinkText>
						</Link>
						<Link href={'/solutions/ai-automation-chat-gpt-open-ai'}>
							<LinkText>{t('aiAutomation')}</LinkText>
						</Link>
						<Link href={'/solutions/software-architecture-design-and-development'}>
							<LinkText>{t('softwareArchitecture')}</LinkText>
						</Link>
					</div>

					<div>
						<h5 style={{ fontWeight: '600', marginBottom: '15px' }}>{t('technologies')}</h5>

						<Link href={'/technologies'}>
							<LinkText>{t('reactDevelopment')}</LinkText>
						</Link>

						<Link href={'/technologies'}>
							<LinkText>{t('nextjsDevelopment')}</LinkText>
						</Link>

						<Link href={'/technologies'}>
							<LinkText>{t('aspnetDevelopment')}</LinkText>
						</Link>

						<Link href={'/technologies'}>
							<LinkText>{t('c#Development')}</LinkText>
						</Link>

						<Link href={'/technologies'}>
							<LinkText>{t('angularDevelopment')}</LinkText>
						</Link>

						<Link href={'/technologies'}>
							<LinkText>{t('sqlDevelopment')}</LinkText>
						</Link>

						<Link href={'/technologies'}>
							<LinkText>{t('azureCloud')}</LinkText>
						</Link>
					</div>

					<div>
						<h5 style={{ fontWeight: '600', marginBottom: '15px' }}>{t('company')}</h5>

						<Link href={'/contact-us'}>
							<LinkText>{t('contact-us')}</LinkText>
						</Link>
						<Link href={'/pricing'}>
							<LinkText>{t('pricing')}</LinkText>
						</Link>
						<Link href={'/career'}>
							<LinkText>{t('career')}</LinkText>
						</Link>
						<Link href={'/partner'}>
							<LinkText>{t('partner')}</LinkText>
						</Link>
					</div>
				</TopContainer>

				<Divider style={{ maxWidth: ThemeStatics.ContainerMaxWidth }} />
				<p style={{ fontSize: '10px', textAlign: 'center' }}>
					Copyright © 2023 www.inoxiesoft.com <br />
					{t('copyrightsText')}
				</p>
			</ContentContainer>
		</FooterContainer>
	);
};
