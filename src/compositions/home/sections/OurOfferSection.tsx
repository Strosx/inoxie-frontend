import styled from '@emotion/styled';
import { Button } from 'antd';
import { AppearAnimation, ChangeColorAnimation } from 'src/styles/animations/animations';
import { PhoneOutlined, AntDesignOutlined, CodepenOutlined } from '@ant-design/icons';
import { useRef } from 'react';
import { useIntersection } from 'src/shared/hooks/useIntersection';

type Props = {
	isVisible: boolean;
};

const Container = styled.div<Props>`
	width: 100%;
	margin-bottom: 150px;
	animation: ${props => (props.isVisible ? AppearAnimation() : '')} 2s;

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

		align-self: baseline;
	}

	:hover {
		background-color: #ededed;

		animation: ${ChangeColorAnimation('#ededed')} 0.2s linear;

		#showmore {
			opacity: 1;

			animation: ${AppearAnimation()} 0.2s;

			align-self: flex-end;
		}
	}
`;

export const OurOfferSection = (): JSX.Element => {
	const ref = useRef();
	const isVisible = useIntersection(ref, '0px');

	return (
		<Container ref={ref} isVisible={isVisible}>
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
