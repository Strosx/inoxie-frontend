import styled from '@emotion/styled';
import { HeaderLogo } from 'src/layouts/MainLayout/Components/HeaderLogo';
import LanguageSwitcher from 'src/layouts/MainLayout/Components/LanguageSwitcher';
import { MobileNavi } from 'src/layouts/MainLayout/Components/MobileNavi';
import { ThemeStatics } from 'src/theme/theme';

const TopHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	background-color: rgb(25, 25, 25);
	width: 100%;
	height: ${ThemeStatics.TopHeaderHeight}px;
`;

const TopHeaderContent = styled.div`
	width: 100%;
	padding: 0 24px;
	max-width: ${ThemeStatics.ContainerMaxWidth}px;

	margin: 0 auto;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const TopHeader = () => {
	return (
		<TopHeaderContainer>
			<TopHeaderContent>
				<HeaderLogo />
				<LanguageSwitcher />

				<MobileNavi />
			</TopHeaderContent>
		</TopHeaderContainer>
	);
};
