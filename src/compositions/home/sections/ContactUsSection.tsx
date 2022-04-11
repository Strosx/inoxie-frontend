import styled from '@emotion/styled';
import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import { useCallback, useEffect, useState } from 'react';
import Logo from 'src/components/logo';
import { GASendFormData, GoogleFormData } from 'src/shared/google-events/events';

const Content = styled.div`
	width: 100%;
	margin-bottom: 200px;
	padding: 20px;

	h2 {
		font-size: 50px;
		font-weight: 800;
		text-align: center;
	}

	.company-data-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		> * {
			width: 48%;
		}
	}

	.button-container {
		width: 100%;
		display: flex;
		justify-content: flex-end;

		button {
			min-width: 200px;
		}
	}

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		margin-bottom: 100px;
		padding: 5px;

		h2 {
			font-size: 30px;
			font-weight: 800;
			text-align: center;
		}

		.button-container {
			button {
				min-width: 100%;
			}
		}

		.company-data-container {
			flex-direction: column;
			align-items: center;

			> * {
				width: 100%;
				margin: 10px 0;
			}
		}
	}
`;

const LogoContainer = styled.div`
	position: relative;
	width: 160px;
	height: 25px;

	@media (max-width: ${props => props.theme.breakpoints.tablet}px) {
		width: 120px;
		height: 18px;
	}
`;

type Props = {
	email?: string;
};

export const ContactUsSection = ({ email }: Props): JSX.Element => {
	const [form] = useForm();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback((values: GoogleFormData) => {
		setIsLoading(true);
		GASendFormData(values);
		delayAction(() => {
			setIsLoading(false);
			form.resetFields();
			message.success('Succesfully sent, we will get back to you as soon as possible :)');
		});
	}, []);

	const delayAction = useCallback((action: () => void) => {
		setTimeout(function () {
			action();
		}, 2000);
	}, []);

	useEffect(() => {
		if (email) {
			form.setFieldsValue({ email: email });
		}
	}, [email]);

	return (
		<Content id='contact-us'>
			<h2>Contact us</h2>

			<div className='company-data-container'>
				<div>
					<LogoContainer>
						<Logo variant='black' />
					</LogoContainer>

					<div style={{ marginTop: '20px' }}>
						<p>
							Maciej Kamieniak Inoxie <br /> Mieszczańska 11/17 <br /> 50-201 Wrocław, Poland
						</p>

						<p>
							Maciej Kamieniak (+48798943352) <br /> Aleksander Górka (+48798943352)
						</p>

						<p>
							<Button type='primary'>
								<a href='mailto: inoxiesoft@gmail.com'>inoxiesoft@gmail.com</a>
							</Button>
						</p>
					</div>
				</div>

				<Form layout='vertical' requiredMark form={form} onFinish={onSubmit}>
					<Form.Item name='email' rules={[{ required: true, message: 'This field is required' }]}>
						<Input size='large' placeholder='Email address' />
					</Form.Item>

					<Form.Item name='firstName' rules={[{ required: true, message: 'This field is required' }]}>
						<Input size='large' placeholder='First Name' />
					</Form.Item>

					<Form.Item name='lastName' rules={[{ required: true, message: 'This field is required' }]}>
						<Input size='large' placeholder='Last Name' />
					</Form.Item>

					<Form.Item name='description' rules={[{ required: true, message: 'This field is required' }]}>
						<TextArea rows={10} size='large' placeholder='Describe your project...' />
					</Form.Item>

					<div className='button-container'>
						<Button loading={isLoading} htmlType='submit' size='large' type='primary'>
							Send
						</Button>
					</div>
				</Form>
			</div>
		</Content>
	);
};
