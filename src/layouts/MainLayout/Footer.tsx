import styled from '@emotion/styled';

const Container = styled.div`
	background-color: #0e0e0e;
	padding: 3px 20px 3px 20px;

	div {
		text-align: right;
		color: white;
	}
`;

export const Footer = (): JSX.Element => (
	<Container>
		<div>@ Designed and developed by Inoxie Software 2022</div>
	</Container>
);
