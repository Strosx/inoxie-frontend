import styled from '@emotion/styled';
import { ReactNode } from 'react';

const Container = styled.div`
	min-height: 70vh;
	background-color: ${props => props.theme.colors.primary.default};
	//	padding-top: 100px;
	/* 	padding-left: 16px;
	padding-right: 16px;
	padding-bottom: 16px;; */
`;

type Props = {
	children: ReactNode;
};

export const Content = ({ children }: Props): JSX.Element => <Container>{children}</Container>;
