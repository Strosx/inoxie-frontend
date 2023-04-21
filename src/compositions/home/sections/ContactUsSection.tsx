import styled from '@emotion/styled';
import { Button, Form, Input, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import TextArea from 'antd/lib/input/TextArea';
import { useTranslation } from 'next-i18next';
import { useCallback, useEffect, useState } from 'react';
import Logo from 'src/components/logo';
import { ContactFormData, sendContact } from 'src/shared/emailjs';
import { GASendFormConversion } from 'src/shared/google-events/events';

const Content = styled.div`
	width: 100%;
	padding: 20px;

	h2 {
		font-size: 50px;
		font-weight: 800;
		text-align: center;
	}

	.company-data-container {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

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
	const { t } = useTranslation(['contact-us', 'shared']);

	const onSubmit = useCallback((values: ContactFormData) => {
		setIsLoading(true);
		GASendFormConversion();
		sendContact(values)
			.then(() => {
				message.success(t('messageSent'));
				form.resetFields();
			})
			.catch(() => message.error(t('messageFailed')))
			.finally(() => setIsLoading(false));
	}, []);

	useEffect(() => {
		if (email) {
			form.setFieldsValue({ email: email });
		}
	}, [email]);

	return (
		<Content id='contact-us'>
			<div className='company-data-container'>
				<div>
					<LogoContainer>
						<Logo variant='black' />
					</LogoContainer>

					<div style={{ marginTop: '20px' }}>
						<p>
							Maciej Kamieniak Inoxie <br /> PL9910535234 <br />
							Kolejowa 14 <br /> 46-073 Chróscina, Poland <br />
							Maciej Kamieniak (+48 798943352)
						</p>

						<div style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '5px' }}>
							<Button type='primary'>
								<a href='mailto: m.kamieniak@inoxiesoft.com'>m.kamieniak@inoxiesoft.com</a>
							</Button>
							<Button type='primary'>
								<a href='mailto: inoxiesoft@gmail.com'>inoxiesoft@gmail.com</a>
							</Button>
						</div>
					</div>
				</div>

				<Form layout='vertical' requiredMark form={form} onFinish={onSubmit}>
					<Form.Item name='email' rules={[{ required: true, message: t('shared:fieldRequired') }]}>
						<Input size='large' placeholder={t('emailAddress')} />
					</Form.Item>

					<Form.Item name='firstName' rules={[{ required: true, message: t('shared:fieldRequired') }]}>
						<Input size='large' placeholder={t('firstName')} />
					</Form.Item>

					<Form.Item name='lastName' rules={[{ required: true, message: t('shared:fieldRequired') }]}>
						<Input size='large' placeholder={t('lastName')} />
					</Form.Item>

					<Form.Item name='description' rules={[{ required: true, message: t('shared:fieldRequired') }]}>
						<TextArea rows={10} size='large' placeholder={t('describeProject')} />
					</Form.Item>

					<div className='button-container'>
						<Button loading={isLoading} htmlType='submit' size='large' type='primary'>
							{t('send')}
						</Button>
					</div>
				</Form>
			</div>
		</Content>
	);
};
