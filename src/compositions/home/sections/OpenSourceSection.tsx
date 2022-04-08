import styled from '@emotion/styled';

const Content = styled.div`
	width: 100%;
	margin-bottom: 200px;

	h2 {
		font-size: 50px;
		font-weight: 800;
		text-align: center;
	}
`;

export const OpenSourceSection = (): JSX.Element => {
	return (
		<Content id='open-source'>
			<h2>Open Source</h2>

			<p>Coming soon!!!</p>
		</Content>
	);
};
