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
		<div style={{ fontSize: '12px' }}>@ Designed and developed by InoxieSoft 2022</div>
	</Container>
);
