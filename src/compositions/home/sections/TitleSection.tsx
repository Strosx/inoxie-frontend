import styled from '@emotion/styled';

const TitleContainer = styled.div`
	position: relative;
	max-width: 60vw;
	height: 60vh;
	align-self: flex-start;

	h1 {
		color: white;
	}

	/* 	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		align-self: center;
		height: 30vh;

		h1 {
			font-size: 18px;
			font-weight: 700;
			color: white;
		}
	} */
`;

export const TitleSection = (): JSX.Element => {
	return (
		<TitleContainer>
			<h1>Innovative Solutions, Unmatched Expertise - InoxieSoft, Your Software Development Partner </h1>
		</TitleContainer>
	);
};
