import styled from '@emotion/styled';
import { Button, Input } from 'antd';

const TitleContainer = styled.div`
	padding: 30px;
	margin-left: -35vw;
	height: 70vh;

	h1 {
		font-size: 70px;
		font-weight: 900;
		color: white;
	}
`;

const ContactUsContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 50px;
	border-radius: 10px;
	overflow: hidden;

	button {
		margin-left: -5px;
		height: 50px;
	}

`;

export const TitleSection = (): JSX.Element => {
	return (
		<TitleContainer>
			<h1>
				We will build your <br /> custom software
			</h1>

			<ContactUsContainer>
				<Input placeholder='Leave us your email address...' size='large' />
				<Button size='large' type='primary'>
					Confirm
				</Button>
			</ContactUsContainer>
		</TitleContainer>
	);
};
