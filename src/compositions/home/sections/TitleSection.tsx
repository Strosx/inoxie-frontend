import styled from '@emotion/styled';
import { Button, Input } from 'antd';
import { scrollToId } from 'src/components/link-button-with-scroll';

const TitleContainer = styled.div`
	margin-left: 20px;
	height: 60vh;
	align-self: flex-start;

	h1 {
		font-size: 70px;
		font-weight: 900;
		color: white;
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		align-self: center;
		height: 30vh;

		h1 {
			font-size: 30px;
			font-weight: 900;
			color: white;
		}
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

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		height: 30px;
		font-size: 10px;

		input {
			font-size: 12px;
		}

		button {
			height: 30px;
			font-size: 12px;
		}
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
				<Button size='large' type='primary' onClick={e => scrollToId(e, 'contact-us')}>
					Confirm
				</Button>
			</ContactUsContainer>
		</TitleContainer>
	);
};
