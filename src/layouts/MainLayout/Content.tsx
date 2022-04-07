import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Container = styled.div`
	min-height: 100vh;
	background-color: ${props => props.theme.colors.primary.default};
`;

type Props = {
	children: ReactNode;
};

export const Content = ({ children }: Props): JSX.Element => <Container>{children}</Container>;
