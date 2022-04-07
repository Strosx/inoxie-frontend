import styled from '@emotion/styled';
import { useRef } from 'react';
import { useIntersection } from 'src/shared/hooks/useIntersection';
import { AppearAnimation } from 'src/styles/animations/animations';

type Props = {
	isVisible: boolean;
};

const Content = styled.div<Props>`
	width: 100%;
	margin-bottom: 200px;
	animation: ${props => (props.isVisible ? AppearAnimation() : '')} 2s;

	h2 {
		font-size: 50px;
		font-weight: 800;
		text-align: center;
	}
`;

export const OurSkillsSections = (): JSX.Element => {
	const ref = useRef();
	const isVisible = useIntersection(ref, '0px');

	return (
		<>
			<Content ref={ref} isVisible={isVisible}>
				<h2>Our skills</h2>
			</Content>
		</>
	);
};
