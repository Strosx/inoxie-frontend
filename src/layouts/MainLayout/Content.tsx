import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Container = styled.div`
	min-height: 100vh;
	background-color: #f5f5f5;
`;

type Props = {
	children: ReactNode;
};

export const Content = ({ children }: Props): JSX.Element => <Container>{children}</Container>;
