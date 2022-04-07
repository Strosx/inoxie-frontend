import styled from '@emotion/styled';
import { Button, Card } from 'antd';
import { AppearAnimation, ChangeColorAnimation } from 'src/styles/animations/animations';
import { PhoneOutlined, AntDesignOutlined, CodepenOutlined } from '@ant-design/icons';

const Container = styled.div`
	width: 100%;
	margin-bottom: 150px;
	animation: ${AppearAnimation()} 2s;

	h2 {
		font-size: 50px;
		font-weight: 800;
		text-align: center;
	}
`;

const TilesContainer = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const StyledCard = styled.div`
	padding: 30px;
	background-color: white;
	width: 400px;
	border-radius: 10px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	> * {
		margin: 0 5px;
	}

	h3 {
		font-size: 20px;
		font-weight: 600;
	}

	#showmore {
		opacity: 0;
	}

	:hover {
		background-color: #ededed;

		animation: ${ChangeColorAnimation('#ededed')} 0.2s linear;

		#showmore {
			opacity: 1;

			animation: ${AppearAnimation()} 0.2s;
		}
	}
`;

export const OurOfferSection = (): JSX.Element => {
	return (
		<Container>
			<h2>What can we do for you?</h2>
			<TilesContainer>
				<StyledCard>
					<AntDesignOutlined style={{ fontSize: '56px' }} />
					<div>
						<h3>Business Design</h3>
						<p>Team of highly qualified and experienced developers will create modern application.</p>
						<Button type='primary' id='showmore'>
							Show more
						</Button>
					</div>
				</StyledCard>
				<StyledCard>
					<CodepenOutlined style={{ fontSize: '56px' }} />
					<div>
						<h3>Development</h3>
						<p>Our team will help you to a technologies and develop software for your business</p>
						<Button type='primary' id='showmore'>
							Show more
						</Button>
					</div>
				</StyledCard>
				<StyledCard>
					<PhoneOutlined style={{ fontSize: '56px' }} />
					<div>
						<h3>Consulting</h3>
						<p>If you plan to expand your software, our experienced team will help you.</p>
						<Button type='primary' id='showmore'>
							Show more
						</Button>
					</div>
				</StyledCard>
			</TilesContainer>
		</Container>
	);
};
