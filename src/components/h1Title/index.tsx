import styled from "@emotion/styled";
import { AppearAnimation } from "src/styles/animations/animations";

const CoverTextContainer = styled.div`
	width: 50%;
	max-width: 800px;
	margin: 30px auto 0 auto;
	text-align: center;

    animation: ${AppearAnimation} 0.8s ease-in;

	@media (max-width: ${props => props.theme.breakpoints.mobile}px) {
		width: 100%;
		margin-top: 0px;
	}
`;

type Props = {
    title: string;
}

const H1Title = ({title}: Props): JSX.Element => {
	return (
		<div style={{ width: '100%' }}>
			<CoverTextContainer>
				<h1>{title}</h1>
			</CoverTextContainer>
		</div>
	);
};

export default H1Title;
