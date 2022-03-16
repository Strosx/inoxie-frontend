import styled from '@emotion/styled';

const Container = styled.div`
	background-color: ${props => props.theme.colors.primary.light};
	min-height: 20rem;
`;

export const Footer = (): JSX.Element => <Container />;
