import styled from '@emotion/styled';
import { useRef } from 'react';
import { ProjectTile } from 'src/components/project-tile';
import { useIntersection } from 'src/shared/hooks/useIntersection';
import { AppearAnimation } from 'src/styles/animations/animations';

type Props = {
	isVisible: boolean;
};

const Content = styled.div<Props>`
	width: 100%;
	margin-bottom: 100px;
	animation: ${props => (props.isVisible ? AppearAnimation() : '')} 2s;

	h2 {
		font-size: 50px;
		font-weight: 800;
		text-align: center;
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		margin-bottom: 0px;

		h2 {
			font-size: 30px;
			font-weight: 800;
			text-align: center;
		}
	}
`;

const ProjectsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const ProjectsSection = (): JSX.Element => {
	const ref = useRef();
	const isVisible = useIntersection(ref, '0px');

	return (
		<>
			<Content ref={ref} isVisible={isVisible} id='projects'>
				<h2>Our Projects</h2>

				<ProjectsContainer>
					<ProjectTile project='softflix' />

					<ProjectTile project='skillsive' />

					<ProjectTile project='bhpapps' />

					<ProjectTile project='cryptogambling' />
				</ProjectsContainer>

				<h2>We were part of this projects too</h2>

				<ProjectsContainer>
					<ProjectTile project='eygvrt' />

					<ProjectTile project='tradeanalytics' />

					<ProjectTile project='frankenstein' />

					<ProjectTile project='kolejoweABC' />
				</ProjectsContainer>
			</Content>
		</>
	);
};
