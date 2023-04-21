import { AntDesignOutlined, CodepenOutlined, PhoneOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';
import { Button } from 'antd';
import { useTranslation } from 'next-i18next';
import { useRef } from 'react';
import { scrollToId } from 'src/components/link-button-with-scroll';
import { AppearAnimation, ChangeColorAnimation } from 'src/styles/animations/animations';

type Props = {
	isVisible: boolean;
};

const Container = styled.div<Props>`
	width: 100%;
	margin-bottom: 100px;
	animation: ${props => (props.isVisible ? AppearAnimation() : '')} 2s;

	h2 {
		//	font-size: 50px;
		//	font-weight: 800;
		text-align: center;
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		margin-bottom: 0px;

		h2 {
			//	font-size: 30px;
			//	font-weight: 800;
			text-align: center;
		}
	}
`;

const TilesContainer = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
	}
`;

const StyledCard = styled.div`
	margin: 10px;
	padding: 30px;
	background-color: #f6f6f6;
	width: 400px;
	border-radius: 10px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	> * {
		margin: 0 5px;
	}

	h3 {
		font-size: 20px;
		font-weight: 600;
	}

	#showmore {
		opacity: 1;

		align-self: baseline;

		@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
			opacity: 1;
			align-self: flex-end;
		}
	}

	:hover {
		background-color: #ededed;

		animation: ${ChangeColorAnimation('#ededed')} 0.2s linear;

		#showmore {
			opacity: 1;

			animation: ${AppearAnimation()} 0.2s;

			align-self: flex-end;
		}
	}
`;

export const OurOfferSection = (): JSX.Element => {
	const ref = useRef();
	const { t } = useTranslation('home');

	return (
		<Container ref={ref} isVisible={false} id='offer'>
			<h2>{t('ourOfferSection.title')}</h2>
			<TilesContainer>
				<StyledCard>
					<CodepenOutlined style={{ fontSize: '56px' }} />
					<div>
						<h3>{t('ourOfferSection.card1.title')}</h3>
						<p>{t('ourOfferSection.card1.description')}</p>
						<Button type='primary' id='showmore' onClick={e => scrollToId(e, 'development')}>
							{t('ourOfferSection.card1.button')}
						</Button>
					</div>
				</StyledCard>
				<StyledCard>
					<AntDesignOutlined style={{ fontSize: '56px' }} />
					<div>
						<h3>{t('ourOfferSection.card2.title')}</h3>
						<p>{t('ourOfferSection.card2.description')}</p>
						<Button type='primary' id='showmore' onClick={e => scrollToId(e, 'business-design')}>
							{t('ourOfferSection.card2.button')}
						</Button>
					</div>
				</StyledCard>
				<StyledCard>
					<PhoneOutlined style={{ fontSize: '56px' }} />
					<div>
						<h3>{t('ourOfferSection.card3.title')}</h3>
						<p>{t('ourOfferSection.card3.description')}</p>
						<Button type='primary' id='showmore' onClick={e => scrollToId(e, 'consulting')}>
							{t('ourOfferSection.card3.button')}
						</Button>
					</div>
				</StyledCard>
			</TilesContainer>
		</Container>
	);
};
