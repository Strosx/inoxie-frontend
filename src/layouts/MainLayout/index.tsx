import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';
import { BottomHeader } from 'src/layouts/MainLayout/Components/BottomHeader';
import { Footer } from 'src/layouts/MainLayout/Components/Footer';
import { TopHeader } from 'src/layouts/MainLayout/Components/TopHeader';
import { ThemeStatics } from 'src/theme/theme';

type Props = {
	children: React.ReactNode;
};

const HeadersContainer = styled.div`
	top: 0;
	position: fixed;
	width: 100%;
	z-index: 10;
`;

const ContentContainer = styled.div`
	margin-top: ${ThemeStatics.BottomHeaderHeight + ThemeStatics.TopHeaderHeight}px;
	margin-bottom: 100px;
	height: calc(100vh-${ThemeStatics.BottomHeaderHeight + ThemeStatics.TopHeaderHeight}px);
	width: 100%;
	min-height: 40vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.content {
		max-width: ${ThemeStatics.ContainerMaxWidth}px;
		width: 100%;
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		margin-top: ${ThemeStatics.TopHeaderHeight}px;
		height: calc(100vh-${ThemeStatics.TopHeaderHeight}px);
		//padding: 15px;
	}
`;

const Content = styled.div`
	max-width: ${ThemeStatics.ContainerMaxWidth}px;
	width: 100%;
`;

const MainLayout = ({ children }: Props): JSX.Element => {
	const { t } = useTranslation('shared');

	return (
		<>
			<HeadersContainer>
				<TopHeader />
				<BottomHeader />
			</HeadersContainer>

			<ContentContainer>
				<Content>{children}</Content>
			</ContentContainer>

			<Footer />
		</>
	);
};

export default MainLayout;
